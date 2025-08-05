import React from 'react';
import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Cookie Policy
            </h1>
            <p className="text-xl text-gray-200">
              How we use cookies and similar technologies
            </p>
            <p className="text-sm text-gray-300 mt-4">
              Last updated: January 2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">1. What Are Cookies?</h2>
                <p className="text-muted-foreground">
                  Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better experience by remembering your preferences, analyzing how you use our site, and enabling certain functionality.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">2. Types of Cookies We Use</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Essential Cookies</h3>
                    <p className="text-muted-foreground mb-3">
                      These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website.
                    </p>
                    <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                      <li>Session management</li>
                      <li>Security features</li>
                      <li>Load balancing</li>
                      <li>Form submission</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">Analytics Cookies</h3>
                    <p className="text-muted-foreground mb-3">
                      These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
                    </p>
                    <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                      <li>Google Analytics</li>
                      <li>Page view tracking</li>
                      <li>User behavior analysis</li>
                      <li>Performance monitoring</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">Functional Cookies</h3>
                    <p className="text-muted-foreground mb-3">
                      These cookies enable enhanced functionality and personalization, such as remembering your preferences and settings.
                    </p>
                    <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                      <li>Language preferences</li>
                      <li>Theme settings</li>
                      <li>Form data retention</li>
                      <li>User interface customization</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">Marketing Cookies</h3>
                    <p className="text-muted-foreground mb-3">
                      These cookies are used to track visitors across websites to display relevant and engaging advertisements.
                    </p>
                    <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                      <li>Advertising personalization</li>
                      <li>Retargeting campaigns</li>
                      <li>Social media integration</li>
                      <li>Conversion tracking</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">3. Third-Party Cookies</h2>
                <p className="text-muted-foreground mb-4">
                  We may use third-party services that set cookies on our website:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li><strong>Google Analytics:</strong> For website analytics and performance monitoring</li>
                  <li><strong>Google Ads:</strong> For advertising and conversion tracking</li>
                  <li><strong>Facebook Pixel:</strong> For social media advertising and analytics</li>
                  <li><strong>LinkedIn Insight Tag:</strong> For professional network advertising</li>
                  <li><strong>Hotjar:</strong> For user experience analysis and heatmaps</li>
                  <li><strong>Intercom:</strong> For customer support and communication</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">4. Cookie Duration</h2>
                <p className="text-muted-foreground mb-4">
                  Cookies may be stored for different periods:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li><strong>Session Cookies:</strong> Deleted when you close your browser</li>
                  <li><strong>Persistent Cookies:</strong> Remain on your device for a set period or until manually deleted</li>
                  <li><strong>Analytics Cookies:</strong> Typically stored for 2 years</li>
                  <li><strong>Marketing Cookies:</strong> Usually stored for 30-90 days</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">5. Managing Your Cookie Preferences</h2>
                <p className="text-muted-foreground mb-4">
                  You have several options for managing cookies:
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Browser Settings</h3>
                    <p className="text-muted-foreground mb-2">
                      Most browsers allow you to control cookies through their settings:
                    </p>
                    <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                      <li>Block all cookies</li>
                      <li>Block third-party cookies only</li>
                      <li>Delete existing cookies</li>
                      <li>Receive notifications when cookies are set</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Opt-Out Tools</h3>
                    <p className="text-muted-foreground mb-2">
                      You can opt out of specific tracking services:
                    </p>
                    <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                      <li>Google Analytics Opt-out Browser Add-on</li>
                      <li>Network Advertising Initiative opt-out</li>
                      <li>Digital Advertising Alliance opt-out</li>
                      <li>Your Online Choices (European users)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">6. Impact of Disabling Cookies</h2>
                <p className="text-muted-foreground mb-4">
                  Disabling cookies may affect your experience on our website:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Some features may not work properly</li>
                  <li>You may need to re-enter information</li>
                  <li>Personalization features will be limited</li>
                  <li>We cannot remember your preferences</li>
                  <li>Analytics and improvement efforts may be hindered</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">7. Mobile Devices</h2>
                <p className="text-muted-foreground">
                  Mobile devices may use different technologies for tracking, such as mobile advertising IDs. You can typically manage these through your device settings under "Privacy" or "Advertising" options.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">8. Updates to This Policy</h2>
                <p className="text-muted-foreground">
                  We may update this Cookie Policy from time to time to reflect changes in our practices or applicable laws. We will notify you of any material changes by posting the updated policy on our website and updating the "Last updated" date.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">9. Legal Basis</h2>
                <p className="text-muted-foreground mb-4">
                  Our legal basis for using cookies includes:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li><strong>Consent:</strong> For non-essential cookies, we obtain your consent</li>
                  <li><strong>Legitimate Interest:</strong> For analytics and website improvement</li>
                  <li><strong>Contractual Necessity:</strong> For essential website functionality</li>
                  <li><strong>Legal Obligation:</strong> For compliance with applicable laws</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">10. Contact Us</h2>
                <p className="text-muted-foreground mb-4">
                  If you have any questions about our use of cookies, please contact us:
                </p>
                <div className="bg-muted/50 p-6 rounded-lg">
                  <p className="text-muted-foreground">
                    <strong>Bridge Supply Co.</strong><br />
                    Email: accounts@bridgesupplyco.com<br />
                    Phone: +1 (555) 123-4567<br />
                    Address: 123 Business Ave, Suite 100, City, State 12345
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />
    </div>
  );
};

export default CookiePolicy;

