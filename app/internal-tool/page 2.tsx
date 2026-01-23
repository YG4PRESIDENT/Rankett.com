"use client";

import { useState, useEffect } from "react";

interface RepurposedContent {
  optimizedContent: string;
  faqSchema: object;
  imageSuggestions: string[];
}

export default function InternalToolPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

  const [inputContent, setInputContent] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [result, setResult] = useState<RepurposedContent | null>(null);
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState<"content" | "schema" | "images">("content");

  useEffect(() => {
    const authStatus = sessionStorage.getItem("rankett-internal-auth");
    if (authStatus === "true") {
      setIsAuthenticated(true);
    }
    setIsCheckingAuth(false);
  }, []);

  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPasswordError("");

    const res = await fetch("/api/internal/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      sessionStorage.setItem("rankett-internal-auth", "true");
      setIsAuthenticated(true);
    } else {
      setPasswordError("Invalid password");
    }
  };

  const handleRepurpose = async () => {
    if (!inputContent.trim()) {
      setError("Please paste some content to repurpose");
      return;
    }

    setIsProcessing(true);
    setError("");
    setResult(null);

    try {
      const res = await fetch("/api/internal/repurpose", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: inputContent }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "Failed to process content");
      }

      const data = await res.json();
      setResult(data);
      setActiveTab("content");
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setIsProcessing(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  if (isCheckingAuth) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950">
        <div className="text-slate-400">Loading...</div>
      </div>
    );
  }

  // Password gate with Rankett styling
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 relative">
        {/* Background gradient effects */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute top-1/4 left-1/4 w-[600px] h-[600px]"
            style={{
              background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
              filter: 'blur(80px)',
            }}
          />
          <div
            className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px]"
            style={{
              background: 'radial-gradient(circle, rgba(139, 92, 246, 0.12) 0%, transparent 70%)',
              filter: 'blur(80px)',
            }}
          />
        </div>

        <div className="w-full max-w-md relative z-10">
          <div
            className="rounded-2xl p-8"
            style={{
              background: 'rgba(15, 23, 42, 0.6)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(51, 65, 85, 0.5)',
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
            }}
          >
            <h1 className="text-2xl font-bold text-white mb-2">AI Content Engine</h1>
            <p className="text-slate-400 mb-6">Internal Tool — Enter password to access</p>

            <form onSubmit={handlePasswordSubmit}>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-4 transition-all"
                autoFocus
              />
              {passwordError && (
                <p className="text-red-400 text-sm mb-4">{passwordError}</p>
              )}
              <button
                type="submit"
                className="w-full py-3 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                style={{
                  background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                  boxShadow: '0 4px 20px rgba(59, 130, 246, 0.3)',
                }}
              >
                Access Tool
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  // Main tool UI with Rankett styling
  return (
    <div className="min-h-screen p-4 md:p-8 relative">
      {/* Background gradient effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-0 left-1/4 w-[800px] h-[800px]"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
            filter: 'blur(100px)',
          }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-[600px] h-[600px]"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 70%)',
            filter: 'blur(100px)',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-3xl font-bold text-white">AI Content Engine</h1>
            <span
              className="px-3 py-1 text-xs font-medium rounded-full"
              style={{
                background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(139, 92, 246, 0.2) 100%)',
                border: '1px solid rgba(139, 92, 246, 0.3)',
                color: '#a78bfa',
              }}
            >
              INTERNAL
            </span>
          </div>
          <p className="text-slate-400">
            Transform blog content into <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent font-medium">AI-optimized format</span> for maximum LLM visibility
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Input Section */}
          <div
            className="rounded-2xl p-6"
            style={{
              background: 'rgba(15, 23, 42, 0.6)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(51, 65, 85, 0.5)',
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
            }}
          >
            <h2 className="text-lg font-semibold text-white mb-4">Input Content</h2>
            <textarea
              value={inputContent}
              onChange={(e) => setInputContent(e.target.value)}
              placeholder="Paste your blog article or content here..."
              className="w-full h-96 px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none font-mono text-sm transition-all"
            />
            <div className="mt-4 flex items-center justify-between">
              <span className="text-slate-500 text-sm">
                {inputContent.length.toLocaleString()} characters
              </span>
              <button
                onClick={handleRepurpose}
                disabled={isProcessing || !inputContent.trim()}
                className="px-6 py-3 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center gap-2"
                style={{
                  background: isProcessing || !inputContent.trim()
                    ? 'rgba(51, 65, 85, 0.5)'
                    : 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                  boxShadow: isProcessing || !inputContent.trim()
                    ? 'none'
                    : '0 4px 20px rgba(59, 130, 246, 0.3)',
                }}
              >
                {isProcessing ? (
                  <>
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Processing...
                  </>
                ) : (
                  <>
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Repurpose Content
                  </>
                )}
              </button>
            </div>
            {error && (
              <div className="mt-4 p-4 bg-red-900/20 border border-red-800/50 rounded-xl text-red-400">
                {error}
              </div>
            )}
          </div>

          {/* Output Section */}
          <div
            className="rounded-2xl p-6"
            style={{
              background: 'rgba(15, 23, 42, 0.6)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(51, 65, 85, 0.5)',
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
            }}
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-white">Output</h2>
              {result && (
                <div className="flex gap-1 bg-slate-800/50 p-1 rounded-lg border border-slate-700/50">
                  <button
                    onClick={() => setActiveTab("content")}
                    className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
                      activeTab === "content"
                        ? "text-white"
                        : "text-slate-400 hover:text-white"
                    }`}
                    style={activeTab === "content" ? {
                      background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                    } : {}}
                  >
                    Content
                  </button>
                  <button
                    onClick={() => setActiveTab("schema")}
                    className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
                      activeTab === "schema"
                        ? "text-white"
                        : "text-slate-400 hover:text-white"
                    }`}
                    style={activeTab === "schema" ? {
                      background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                    } : {}}
                  >
                    FAQ Schema
                  </button>
                  <button
                    onClick={() => setActiveTab("images")}
                    className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
                      activeTab === "images"
                        ? "text-white"
                        : "text-slate-400 hover:text-white"
                    }`}
                    style={activeTab === "images" ? {
                      background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                    } : {}}
                  >
                    Images
                  </button>
                </div>
              )}
            </div>

            {!result ? (
              <div className="h-96 flex items-center justify-center border-2 border-dashed border-slate-700/50 rounded-xl">
                <div className="text-center text-slate-500">
                  <svg className="h-12 w-12 mx-auto mb-4 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <p>AI-optimized content will appear here</p>
                </div>
              </div>
            ) : (
              <div className="h-96 overflow-auto">
                {activeTab === "content" && (
                  <div className="relative">
                    <button
                      onClick={() => copyToClipboard(result.optimizedContent)}
                      className="absolute top-2 right-2 p-2 bg-slate-700/50 hover:bg-slate-600/50 rounded-lg transition-colors border border-slate-600/50"
                      title="Copy to clipboard"
                    >
                      <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                      </svg>
                    </button>
                    <pre className="whitespace-pre-wrap text-slate-300 text-sm font-mono bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                      {result.optimizedContent}
                    </pre>
                  </div>
                )}

                {activeTab === "schema" && (
                  <div className="relative">
                    <button
                      onClick={() => copyToClipboard(JSON.stringify(result.faqSchema, null, 2))}
                      className="absolute top-2 right-2 p-2 bg-slate-700/50 hover:bg-slate-600/50 rounded-lg transition-colors border border-slate-600/50"
                      title="Copy to clipboard"
                    >
                      <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                      </svg>
                    </button>
                    <pre className="text-slate-300 text-sm font-mono bg-slate-800/50 p-4 rounded-xl border border-slate-700/50 overflow-auto">
                      {JSON.stringify(result.faqSchema, null, 2)}
                    </pre>
                  </div>
                )}

                {activeTab === "images" && (
                  <div className="space-y-3">
                    {result.imageSuggestions.map((suggestion, index) => (
                      <div
                        key={index}
                        className="p-4 rounded-xl border transition-all hover:border-blue-500/30"
                        style={{
                          background: 'rgba(30, 41, 59, 0.4)',
                          border: '1px solid rgba(51, 65, 85, 0.5)',
                        }}
                      >
                        <div className="flex items-start gap-3">
                          <div
                            className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center font-medium text-sm"
                            style={{
                              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(139, 92, 246, 0.2) 100%)',
                              border: '1px solid rgba(139, 92, 246, 0.3)',
                              color: '#a78bfa',
                            }}
                          >
                            {index + 1}
                          </div>
                          <p className="text-slate-300 text-sm">{suggestion}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* AI-Optimized Format Guide */}
        <div
          className="mt-8 rounded-2xl p-6"
          style={{
            background: 'rgba(15, 23, 42, 0.6)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(51, 65, 85, 0.5)',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
          }}
        >
          <h3 className="text-lg font-semibold text-white mb-4">AI-Optimized Content Format</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { title: "TLDR Summary", desc: "Quick summary at the top for LLMs to grab first" },
              { title: "Clear Stance", desc: "Definitive position the model can identify and cite" },
              { title: "Consistent Entities", desc: "Same terminology used throughout" },
              { title: "Parseable Headings", desc: "H2/H3 structure LLMs can navigate" },
              { title: "Facts & Stats", desc: "Citable data points LLMs love" },
              { title: "Summary Close", desc: "Reinforces key points at the end" },
            ].map((item, i) => (
              <div
                key={i}
                className="p-4 rounded-xl transition-all hover:border-blue-500/30"
                style={{
                  background: 'rgba(30, 41, 59, 0.4)',
                  border: '1px solid rgba(51, 65, 85, 0.5)',
                }}
              >
                <h4 className="text-white font-medium text-sm mb-1">{item.title}</h4>
                <p className="text-slate-400 text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
