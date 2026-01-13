import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white flex justify-center">
        <div className="w-full">
          {/* Top spacing to clear navbar */}
          <div className="h-24"></div>

          <div className="max-w-3xl mx-auto px-6 py-12 pb-20">
            <h1 className="text-4xl font-bold text-black mb-8">Privacy Policy</h1>

            <div className="space-y-6 text-gray-700">
              <div className="bg-gray-50 p-4 rounded-md">
                <p className="font-semibold text-black">Effective Date: January 10, 2026</p>
                <p className="text-sm mt-1">Last Updated: January 10, 2026</p>
              </div>

              <p>
                Think Outside The Box Ventures, LLC (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates Rankett.com (&quot;Marketing Site&quot;) and the associated AI Visibility Dashboard tool (&quot;Service&quot;). This Privacy Policy explains how we collect, use, and protect your personal data across both the Marketing Site and the Service.
              </p>

              <p>
                We are committed to protecting your privacy and complying with applicable data protection laws, including the EU General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA), where applicable.
              </p>

              <section>
                <h2 className="text-2xl font-semibold text-black mb-3">1. Information We Collect</h2>
                <ul className="space-y-3 ml-4">
                  <li>
                    <strong className="text-black">Contact & Quiz Data:</strong> Name, email address, website URL, and quiz responses when you use forms on our Marketing Site (e.g., for a free audit or contact requests). This data is collected via Web3Forms.
                  </li>
                  <li>
                    <strong className="text-black">Account Data (for Service Users):</strong> If you create an account for our Service, we collect your email address, and authentication data. Payment details (e.g., credit card information) are processed securely by our third-party payment processor, Stripe, and we do not store sensitive payment card information on our servers.
                  </li>
                  <li>
                    <strong className="text-black">Publicly Available Brand Data (for Service Users):</strong> To provide our AI Visibility Service, we query various AI models (such as OpenAI, Google Gemini, Anthropic, and Perplexity) and public web sources about your brand and competitors. This involves processing publicly available information like brand mentions, search rankings, reviews, and entity data. We do not process private or confidential data in this process.
                  </li>
                  <li>
                    <strong className="text-black">Usage & Analytics Data:</strong> We collect non-personally identifiable information about how you interact with our Marketing Site and Service, such as IP address, browser type, device information, pages visited, and time spent. This data helps us improve our offerings. Our hosting provider, Vercel, collects standard server logs.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-black mb-3">2. Cookies & Tracking Technologies</h2>
                <p>
                  We use essential cookies and similar technologies for the proper functioning of our Marketing Site and Service (e.g., to maintain your session, secure forms). We do not currently use third-party analytics cookies (like Google Analytics or Microsoft Clarity) for tracking user behavior. You can control cookies through your browser settings, but disabling essential cookies may affect the functionality of our platforms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-black mb-3">3. How We Use Your Data</h2>
                <p className="mb-2">We use your personal data to:</p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Provide and operate the Marketing Site and the AI Visibility Service.</li>
                  <li>Process your requests (e.g., free audits, contact forms).</li>
                  <li>Manage your user account and authenticate your access to the Service.</li>
                  <li>Generate AI visibility reports and insights for your brand and competitors based on publicly available data.</li>
                  <li>Process payments and manage subscriptions (via Stripe).</li>
                  <li>Improve and secure our Marketing Site and Service.</li>
                  <li>Communicate with you regarding your account, our services, or updates.</li>
                  <li>Comply with legal obligations.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-black mb-3">4. Legal Basis for Processing (GDPR)</h2>
                <p className="mb-2">For users in the European Economic Area (EEA) and UK, we process personal data based on:</p>
                <ul className="list-disc ml-6 space-y-2">
                  <li><strong className="text-black">Performance of a contract:</strong> To fulfill the services you request (e.g., providing AI visibility audits, account management).</li>
                  <li><strong className="text-black">Legitimate interests:</strong> To operate, maintain, and improve our Marketing Site and Service, and to prevent fraud, provided these interests are not overridden by your data protection rights.</li>
                  <li><strong className="text-black">Compliance with legal obligations:</strong> To adhere to applicable laws and regulations.</li>
                  <li><strong className="text-black">Consent:</strong> Where required (e.g., for certain marketing communications), we will obtain your explicit consent. You may withdraw consent at any time.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-black mb-3">5. Third-Party Service Providers (Data Processors)</h2>
                <p className="mb-2">We engage trusted third-party providers to help us operate our Marketing Site and Service:</p>
                <ul className="list-disc ml-6 space-y-2">
                  <li><strong className="text-black">Vercel:</strong> Our hosting provider, which collects standard server logs and may process usage data.</li>
                  <li><strong className="text-black">Web3Forms:</strong> Used for collecting contact and quiz form submissions on our Marketing Site.</li>
                  <li><strong className="text-black">Stripe:</strong> Our payment processor for subscriptions and billing information.</li>
                  <li><strong className="text-black">Supabase:</strong> Our database and authentication provider for user accounts and Service data.</li>
                  <li><strong className="text-black">AI Model Providers (e.g., OpenAI, Google Gemini, Anthropic, Perplexity):</strong> These providers process public information about your brand to generate audit reports as part of our Service. We send queries containing your brand name and related keywords, but no personal identifying information, to these models.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-black mb-3">6. AI-Generated Data Disclaimer & Accuracy of Reports</h2>
                <p>
                  Our Service generates reports and insights based on information retrieved from various Large Language Models (LLMs) and public web sources. While we strive to provide valuable and actionable intelligence, the responses and data generated by these third-party AI models are beyond our direct control. Therefore, we cannot guarantee the complete accuracy, completeness, or up-to-date nature of all AI-generated information presented in our reports. Our reports are for informational purposes only and should not be taken as definitive legal, financial, or business advice.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-black mb-3">7. International Data Transfers</h2>
                <p>
                  If you are located in the EEA, UK, or Switzerland, your data may be transferred to and processed in the U.S. We rely on standard contractual clauses (SCCs) and implement appropriate safeguards to protect your data during these transfers.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-black mb-3">8. Data Retention</h2>
                <p>
                  We retain your personal data for as long as your account is active or as needed to provide our Service, and thereafter as required by law or for legitimate business purposes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-black mb-3">9. Your Rights</h2>
                <p className="mb-2"><strong className="text-black">GDPR Rights:</strong> If you are in the EEA or UK, you have rights including the right to access, rectify, erase, restrict processing, object to processing, and data portability. You also have the right to lodge a complaint with a supervisory authority.</p>
                <p className="mb-2"><strong className="text-black">CCPA Rights:</strong> If you are a California resident, you have rights including the right to know about personal information collected, deleted, and to opt-out of the "sale" of personal information (we do not sell your personal information).</p>
                <p className="mb-2"><strong className="text-black">Making a Request:</strong> To exercise your rights, please contact us at 📩 <a href="mailto:team@rankett.com" className="text-blue-600 hover:underline">team@rankett.com</a>. We will respond within the required timeframe (generally 30-45 days).</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-black mb-3">10. Lawful Disclosure</h2>
                <p>
                  We may disclose your information if required by law, legal process, or valid governmental request.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-black mb-3">11. Security</h2>
                <p>
                  We implement appropriate technical and organizational safeguards to protect your data. However, no internet transmission or electronic storage is 100% secure.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-black mb-3">12. Breach Notification</h2>
                <p>
                  In the unlikely event of a data breach affecting your personal data, we will notify you and relevant authorities as required by law.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-black mb-3">13. Children&apos;s Privacy</h2>
                <p>
                  Our Marketing Site and Service are not directed to individuals under the age of 18. We do not knowingly collect personal data from children.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-black mb-3">14. Changes to This Policy</h2>
                <p>
                  We may update this Privacy Policy periodically. We will notify you of any material changes by posting the new policy on this page and updating the &quot;Last Updated&quot; date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-black mb-3">15. Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy, please contact us: 📩 <a href="mailto:team@rankett.com" className="text-blue-600 hover:underline">team@rankett.com</a>
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