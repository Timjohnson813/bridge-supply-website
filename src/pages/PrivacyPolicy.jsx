import React from 'react';
import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';

const PrivacyPolicy = () => {
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
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-200">
              How we collect, use, and protect your information
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
                <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
                <p className="text-muted-foreground mb-4">
                  We collect information you provide directly to us, such as when you:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Fill out contact forms or request consultations</li>
                  <li>Subscribe to our newsletter or marketing communications</li>
                  <li>Engage with our Amazon brand management services</li>
                  <li>Communicate with us via email, phone, or other channels</li>
                  <li>Provide business information for service delivery</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
                <p className="text-muted-foreground mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Provide and improve our Amazon brand management services</li>
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Send you marketing communications (with your consent)</li>
                  <li>Analyze and optimize our website and services</li>
                  <li>Comply with legal obligations and protect our rights</li>
                  <li>Manage wholesale purchasing and distribution activities</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">3. Information Sharing</h2>
                <p className="text-muted-foreground mb-4">
                  We do not sell, trade, or otherwise transfer your personal information to third parties except:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>With your explicit consent</li>
                  <li>To trusted service providers who assist in our operations</li>
                  <li>When required by law or to protect our rights</li>
                  <li>In connection with Amazon marketplace operations (as necessary for service delivery)</li>
                  <li>With business partners for legitimate business purposes (with appropriate safeguards)</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">4. Data Security</h2>
                <p className="text-muted-foreground mb-4">
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Encryption of sensitive data in transit and at rest</li>
                  <li>Regular security assessments and updates</li>
                  <li>Limited access to personal information on a need-to-know basis</li>
                  <li>Secure data storage and backup procedures</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">5. Cookies and Tracking</h2>
                <p className="text-muted-foreground mb-4">
                  Our website uses cookies and similar tracking technologies to enhance your experience. We use:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Essential cookies for website functionality</li>
                  <li>Analytics cookies to understand website usage</li>
                  <li>Marketing cookies for personalized advertising (with consent)</li>
                  <li>Performance cookies to optimize website speed and functionality</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">6. Your Rights</h2>
                <p className="text-muted-foreground mb-4">
                  Depending on your location, you may have the following rights:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Access to your personal information</li>
                  <li>Correction of inaccurate information</li>
                  <li>Deletion of your personal information</li>
                  <li>Restriction of processing</li>
                  <li>Data portability</li>
                  <li>Objection to processing</li>
                  <li>Withdrawal of consent</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">7. Third-Party Services</h2>
                <p className="text-muted-foreground mb-4">
                  Our services may integrate with third-party platforms, including:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Amazon Seller Central and related Amazon services</li>
                  <li>Email marketing platforms</li>
                  <li>Analytics and tracking services</li>
                  <li>Payment processing services</li>
                  <li>Customer relationship management (CRM) systems</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  These third parties have their own privacy policies, and we encourage you to review them.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">8. Data Retention</h2>
                <p className="text-muted-foreground">
                  We retain your personal information for as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce our agreements. Business information related to Amazon brand management services may be retained for longer periods as required for ongoing service delivery and compliance.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">9. International Transfers</h2>
                <p className="text-muted-foreground">
                  Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your information in accordance with applicable data protection laws.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">10. Changes to This Policy</h2>
                <p className="text-muted-foreground">
                  We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on our website and updating the "Last updated" date. Your continued use of our services after such changes constitutes acceptance of the updated policy.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">11. Contact Us</h2>
                <p className="text-muted-foreground mb-4">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
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

export default PrivacyPolicy;

