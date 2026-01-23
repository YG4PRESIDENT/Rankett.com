import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";

const SYSTEM_PROMPT = `You are an AI content optimization expert. Your job is to take blog content and restructure it into a format that AI language models (ChatGPT, Claude, Perplexity, etc.) can easily parse, understand, and cite.

You will output three things:
1. OPTIMIZED_CONTENT - The fully rewritten article in AI-optimized format
2. FAQ_SCHEMA - JSON-LD FAQ schema markup
3. IMAGE_SUGGESTIONS - Specific, findable image suggestions

## AI-OPTIMIZED CONTENT FORMAT

The optimized content MUST follow this exact structure:

### 1. TLDR Summary (First)
Start with a 2-3 sentence summary that captures the main point. This is what LLMs grab first. Format as:
**TLDR:** [Summary here]

### 2. Definitive Stance
Make a clear, quotable position statement that the model can identify and cite. Don't be wishy-washy. Be definitive.

### 3. Main Content with Parseable Subheadings
Use clear H2 headings that LLMs can navigate:
- "What is [Topic]?"
- "How Does [Topic] Work?"
- "Why [Topic] Matters"
- "Key Benefits of [Topic]"
- "[Topic] vs [Alternative]"

### 4. Consistent Entities
Use the same terminology throughout. If you say "AI visibility" don't switch to "LLM optimization" later. Pick one term and stick with it.

### 5. Facts, Stats, and Original Insights
Include specific data points, statistics, and unique insights that LLMs love to cite. Format key facts in bold or as bullet points.

### 6. Summary Paragraph (Last)
End with a short summary paragraph that reinforces the key points. This bookends nicely with the TLDR.

## FAQ SCHEMA FORMAT

Generate valid JSON-LD FAQ schema based on the content. Extract 3-5 natural question/answer pairs from the content.

Format:
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Question here?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Answer here."
      }
    }
  ]
}

## IMAGE SUGGESTIONS FORMAT

Provide 3-5 specific, actionable image suggestions. Each suggestion must:
- Describe an image that ACTUALLY EXISTS on stock photo sites (Unsplash, Pexels, Shutterstock)
- Include a search term that will find it
- Explain WHERE in the article to place it
- Note what alt-text to use (for SEO + AI parsing)

Format each suggestion as:
"[PLACEMENT: After section X] Search '[search term]' on Unsplash/Pexels for: [specific description]. Alt-text: '[alt text here]'"

## OUTPUT FORMAT

You MUST respond in this exact JSON format:
{
  "optimizedContent": "The full rewritten article in markdown format...",
  "faqSchema": { ... valid JSON-LD ... },
  "imageSuggestions": ["suggestion 1", "suggestion 2", ...]
}

IMPORTANT: Your response must be valid JSON only. No markdown code blocks, no explanation before or after - just the raw JSON object.`;

export async function POST(request: NextRequest) {
  try {
    const { content } = await request.json();

    if (!content || typeof content !== "string") {
      return NextResponse.json(
        { error: "Content is required" },
        { status: 400 }
      );
    }

    if (!process.env.ANTHROPIC_API_KEY) {
      return NextResponse.json(
        { error: "API key not configured. Add ANTHROPIC_API_KEY to environment variables." },
        { status: 500 }
      );
    }

    const anthropic = new Anthropic({
      apiKey: process.env.ANTHROPIC_API_KEY,
    });

    const message = await anthropic.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 8192,
      messages: [
        {
          role: "user",
          content: `Please transform this blog content into AI-optimized format:\n\n---\n\n${content}`,
        },
      ],
      system: SYSTEM_PROMPT,
    });

    const textContent = message.content.find((block) => block.type === "text");
    if (!textContent || textContent.type !== "text") {
      throw new Error("No text response from Claude");
    }

    let result;
    try {
      result = JSON.parse(textContent.text);
    } catch {
      const jsonMatch = textContent.text.match(/```(?:json)?\s*([\s\S]*?)```/);
      if (jsonMatch) {
        result = JSON.parse(jsonMatch[1].trim());
      } else {
        throw new Error("Invalid JSON response from Claude");
      }
    }

    if (!result.optimizedContent || !result.faqSchema || !result.imageSuggestions) {
      throw new Error("Incomplete response from Claude");
    }

    return NextResponse.json(result);
  } catch (error) {
    console.error("Repurpose error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to process content" },
      { status: 500 }
    );
  }
}
