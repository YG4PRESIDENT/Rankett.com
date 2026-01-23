"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-950 flex justify-center text-slate-300"> {/* Updated background and text color */}
        <div className="w-full">
          {/* Top spacing to clear navbar */}
          <div className="h-24"></div>

          <div className="max-w-4xl mx-auto px-6 py-12 pb-20">
            <h1 className="text-4xl md:text-5xl font-bold text-center text-gradient mb-12">Privacy Policy</h1> {/* Styled with text-gradient */}

            <div className={cn(
              "space-y-8", // Increased spacing
              "glass-card p-8 rounded-xl", // Applied glass-card styling
              "border border-slate-800" // Added explicit border for consistency
            )}>
              <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-800"> {/* Styled for dark theme */}
                <p className="font-semibold text-white">Effective Date: January 10, 2026</p> {/* White text for headings */}
                <p className="text-sm mt-1 text-slate-400">Last Updated: January 10, 2026</p>
              </div>

              <div className="prose prose-invert max-w-none text-slate-300"> {/* prose-invert for dark mode typography */}
                <p className="text-lg leading-relaxed">
                  Rankett LLC (&quot;Rankett,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) provides a white-label AI visibility platform for agencies (&quot;Service&quot;). This Privacy Policy explains how we collect, use, and protect data when you visit our marketing website (Rankett.com) or use our Agency Platform.
                </p>

                <p className="text-lg leading-relaxed">
                  We are a B2B service provider. This policy primarily covers data we collect from our direct customers (Agencies). If you are a client of an Agency using our platform, please refer to that Agency&apos;s privacy policy.
                </p>
              </div>

              <hr className="my-8 border-slate-800" /> {/* Darker divider */}

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-white mt-8">1. Information We Collect</h2> {/* White text for headings */}
                
                <h3 className="text-xl font-semibold text-white mt-4">A. Information You Provide to Us (Agencies & Visitors)</h3>
                <ul className="list-disc ml-6 space-y-2">
                  <li><strong>Account & Billing Data:</strong> When you sign up as an Agency Partner, we collect your name, email address, agency details, and billing information. Payment data is processed securely via <strong>Stripe</strong>; we do not store full credit card numbers.</li>
                  <li><strong>Quiz & Lead Data:</strong> If you use our free audit tools or quizzes on Rankett.com, we collect the contact information (email, website URL) you provide via <strong>Web3Forms</strong>.</li>
                  <li><strong>Branding Assets:</strong> We store logos, color codes, and brand preferences you upload to configure your white-label portal.</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mt-4">B. Information Processed on Your Behalf (End-Client Data)</h3>
                <ul className="list-disc ml-6 space-y-2">
                  <li><strong>Client Business Data:</strong> As an Agency, you input data about your clients (e.g., Business Name, Website URL, Location, Industry) into our platform. We process this data solely to provide the Service (AI Visibility Audits).</li>
                  <li><strong>Publicly Available Information:</strong> Our system automatically extracts public information from the websites you provide and queries third-party sources (search engines, directories) to analyze visibility.</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-white mt-8">2. How We Use Data (The &quot;AI Audit&quot; Process)</h2>
                <p>To provide our core service—measuring visibility in AI search—we perform the following data processing activities:</p>
                <ul className="list-disc ml-6 space-y-2">
                  <li><strong>AI Model Querying:</strong> We send the Business Name, Industry, and Location data you provide to third-party Large Language Models (LLMs) including <strong>OpenAI (ChatGPT), Anthropic (Claude), Google (Gemini), and Perplexity</strong>.</li>
                  <li><strong>Purpose:</strong> This is done strictly to generate visibility reports (e.g., &quot;Does ChatGPT recommend this business?&quot;). We do not use your private client data to train these public models, but the query itself is processed by them.</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-white mt-8">3. Our Tech Stack (Third-Party Processors)</h2>
                <p>We believe in transparency. Here are the specific tools we use to operate our platform:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="p-4 bg-slate-900/50 rounded border border-slate-800"> {/* Styled for dark theme */}
                    <strong className="block text-white mb-1">Infrastructure & Hosting</strong>
                    <span className="text-sm text-slate-400">Vercel (Hosting, Logs), Supabase (Database & Auth)</span>
                  </div>
                  <div className="p-4 bg-slate-900/50 rounded border border-slate-800"> {/* Styled for dark theme */}
                    <strong className="block text-white mb-1">Forms & Communication</strong>
                    <span className="text-sm text-slate-400">Web3Forms (Lead Capture), Postmark/Resend (Transactional Email)</span>
                  </div>
                  <div className="p-4 bg-slate-900/50 rounded border border-slate-800"> {/* Styled for dark theme */}
                    <strong className="block text-white mb-1">Payments</strong>
                    <span className="text-sm text-slate-400">Stripe (Subscriptions)</span>
                  </div>
                  <div className="p-4 bg-slate-900/50 rounded border border-slate-800"> {/* Styled for dark theme */}
                    <strong className="block text-white mb-1">AI Intelligence</strong>
                    <span className="text-sm text-slate-400">OpenAI, Anthropic, Google, Perplexity</span>
                  </div>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-white mt-8">4. Cookies & Tracking</h2>
                <p>
                  We use only <strong>essential cookies</strong> required for the platform to function (e.g., keeping you logged in). We do <strong>not</strong> currently use third-party tracking pixels like Google Analytics or Microsoft Clarity on our marketing site. If this changes, we will update this policy and request consent where required.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-white mt-8">5. AI Data Disclaimer</h2>
                <div className="bg-primary/10 p-6 rounded-lg border border-primary/30 text-slate-300"> {/* Styled with primary colors */}
                  <p className="font-medium text-white mb-2">Important Note on AI Reports</p>
                  <p>
                    Rankett aggregates and analyzes responses from third-party AI models. We do not control these AI models, and their outputs can be unpredictable or inaccurate (&quot;hallucinations&quot;). Rankett is not responsible for the content, sentiment, or accuracy of the descriptions generated by third-party AI platforms about your or your clients&apos; businesses.
                  </p>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-white mt-8">6. Data Retention & Deletion</h2>
                <p>
                  We retain Agency account data as long as your subscription is active. You may request deletion of your account and all associated client data by contacting support. Upon termination, we may retain certain billing data as required by tax laws.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-white mt-8">7. Your Rights</h2>
                <p>
                  Depending on your location (GDPR/CCPA), you have rights to access, correct, or delete your personal data.
                </p>
                <p>
                  <strong>For Agencies:</strong> Contact us directly to exercise these rights.
                </p>
                <p>
                  <strong>For End-Clients:</strong> If you are a client of an Agency using Rankett, please contact the Agency directly. We act as a processor and will assist the Agency in fulfilling your request.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-white mt-8">8. Contact Us</h2>
                <p>
                  Rankett LLC<br />
                  <a href="mailto:info@Rankett.com" className="text-blue-400 font-medium hover:text-blue-300">info@Rankett.com</a> {/* Styled links */}
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}