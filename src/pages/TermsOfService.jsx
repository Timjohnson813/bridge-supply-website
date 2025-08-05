import React from 'react';
import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';

const TermsOfService = () => {
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
              Terms of Service
            </h1>
            <p className="text-xl text-gray-200">
              Terms and conditions for using our services
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
                <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground">
                  By accessing and using Bridge Supply Co.'s website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">2. Services Description</h2>
                <p className="text-muted-foreground mb-4">
                  Bridge Supply Co. provides Amazon brand management services, including but not limited to:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Amazon listing creation and optimization</li>
                  <li>Amazon advertising and PPC campaign management</li>
                  <li>Brand protection and unauthorized seller removal</li>
                  <li>Full Amazon account management</li>
                  <li>Logistics and inventory management</li>
                  <li>Distributor search and partnership facilitation</li>
                  <li>Brand reputation building and management</li>
                  <li>Wholesale purchasing and distribution services</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">3. Client Responsibilities</h2>
                <p className="text-muted-foreground mb-4">
                  As a client, you agree to:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Provide accurate and complete information about your business and products</li>
                  <li>Grant necessary access to Amazon Seller Central and related accounts</li>
                  <li>Comply with all Amazon policies and terms of service</li>
                  <li>Provide timely feedback and approvals as requested</li>
                  <li>Pay all fees according to the agreed payment schedule</li>
                  <li>Maintain adequate inventory levels for managed products</li>
                  <li>Respond promptly to requests for information or documentation</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">4. Payment Terms</h2>
                <p className="text-muted-foreground mb-4">
                  Payment terms are as follows:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Service fees are due according to the payment schedule outlined in your service agreement</li>
                  <li>Late payments may incur additional fees and service suspension</li>
                  <li>All fees are non-refundable unless otherwise specified in writing</li>
                  <li>Wholesale purchasing requires separate payment terms as agreed</li>
                  <li>Advertising spend is billed separately and requires pre-approval</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">5. Intellectual Property</h2>
                <p className="text-muted-foreground mb-4">
                  Intellectual property rights are handled as follows:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>You retain ownership of your brand, trademarks, and product designs</li>
                  <li>We retain ownership of our proprietary methods, tools, and processes</li>
                  <li>Any content created for your brand becomes your property upon full payment</li>
                  <li>We may use anonymized case studies for marketing purposes</li>
                  <li>You grant us necessary licenses to perform our services</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">6. Confidentiality</h2>
                <p className="text-muted-foreground">
                  We maintain strict confidentiality regarding your business information, including but not limited to sales data, product information, business strategies, and customer data. We will not disclose confidential information to third parties without your written consent, except as required by law or necessary for service delivery.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">7. Performance and Results</h2>
                <p className="text-muted-foreground mb-4">
                  While we strive to achieve the best possible results:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>We cannot guarantee specific sales figures or rankings</li>
                  <li>Amazon's algorithms and policies are beyond our control</li>
                  <li>Market conditions and competition may affect results</li>
                  <li>Success depends on various factors including product quality and market demand</li>
                  <li>We provide regular reporting and transparent communication about performance</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">8. Limitation of Liability</h2>
                <p className="text-muted-foreground">
                  Bridge Supply Co.'s liability is limited to the amount of fees paid for services in the preceding 12 months. We are not liable for indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or business opportunities.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">9. Termination</h2>
                <p className="text-muted-foreground mb-4">
                  Either party may terminate services under the following conditions:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>30 days written notice for standard termination</li>
                  <li>Immediate termination for breach of contract</li>
                  <li>Immediate termination for non-payment</li>
                  <li>Upon termination, we will provide transition assistance as agreed</li>
                  <li>All outstanding fees become immediately due upon termination</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">10. Amazon Policy Compliance</h2>
                <p className="text-muted-foreground">
                  All services are performed in compliance with Amazon's terms of service and policies. Changes to Amazon's policies may require adjustments to our service delivery. We are not responsible for account suspensions or policy violations that occur outside of our direct control or recommendations.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">11. Force Majeure</h2>
                <p className="text-muted-foreground">
                  We are not liable for any failure or delay in performance due to circumstances beyond our reasonable control, including but not limited to acts of God, natural disasters, war, terrorism, labor disputes, or changes in Amazon's platform or policies.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">12. Governing Law</h2>
                <p className="text-muted-foreground">
                  These terms are governed by and construed in accordance with the laws of the jurisdiction where Bridge Supply Co. is incorporated. Any disputes will be resolved through binding arbitration or in the courts of competent jurisdiction.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">13. Modifications</h2>
                <p className="text-muted-foreground">
                  We reserve the right to modify these terms at any time. Material changes will be communicated to clients with 30 days notice. Continued use of our services after such changes constitutes acceptance of the modified terms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">14. Contact Information</h2>
                <p className="text-muted-foreground mb-4">
                  For questions about these Terms of Service, please contact us:
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

export default TermsOfService;

