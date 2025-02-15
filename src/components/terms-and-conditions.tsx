import { Button } from "@/components/ui/button";

export default function TermsAndConditions() {
  return (
    <div className="container mx-auto px-4 py-8 font-poppins">
      <h1 className="mb-6 text-3xl font-bold text-ddarkVioletNeutral">
        Terms and Conditions
      </h1>
      <div className="space-y-4 text-dvioletGrayNeutral">
        <p>
          Welcome to Shortly. By using our service, you agree to these terms and
          conditions.
        </p>

        <h2 className="mt-6 text-xl font-semibold text-ddarkBlueNeutral">
          1. Acceptance of Terms
        </h2>
        <p>
          By accessing and using Shortly (the "Service"), you accept and agree
          to be bound by these Terms and Conditions.
        </p>

        <h2 className="mt-6 text-xl font-semibold text-ddarkBlueNeutral">
          2. Description of Service
        </h2>
        <p>
          Shortly provides URL shortening services. We reserve the right to
          modify or discontinue the Service at any time.
        </p>

        <h2 className="mt-6 text-xl font-semibold text-ddarkBlueNeutral">
          3. User Responsibilities
        </h2>
        <p>
          You are responsible for all activity that occurs under your account.
          You agree not to use the Service for any illegal or unauthorized
          purpose.
        </p>

        <h2 className="mt-6 text-xl font-semibold text-ddarkBlueNeutral">
          4. Prohibited Content
        </h2>
        <p>You may not use Shortly to shorten URLs that lead to:</p>
        <ul className="list-disc pl-6">
          <li>Illegal content</li>
          <li>Malware or phishing sites</li>
          <li>Spam or unsolicited promotional content</li>
          <li>Pornographic or explicit material</li>
          <li>Content that infringes on intellectual property rights</li>
        </ul>

        <h2 className="mt-6 text-xl font-semibold text-ddarkBlueNeutral">
          5. Privacy
        </h2>
        <p>
          Your use of the Service is also governed by our Privacy Policy. Please
          review our Privacy Policy to understand our practices.
        </p>

        <h2 className="mt-6 text-xl font-semibold text-ddarkBlueNeutral">
          6. Termination
        </h2>
        <p>
          We reserve the right to terminate or suspend access to our Service
          immediately, without prior notice or liability, for any reason
          whatsoever.
        </p>

        <h2 className="mt-6 text-xl font-semibold text-ddarkBlueNeutral">
          7. Limitation of Liability
        </h2>
        <p>
          Shortly shall not be liable for any indirect, incidental, special,
          consequential or punitive damages resulting from your use of the
          Service.
        </p>

        <h2 className="mt-6 text-xl font-semibold text-ddarkBlueNeutral">
          8. Changes to Terms
        </h2>
        <p>
          We reserve the right to modify these terms at any time. We will
          provide notice of significant changes by posting an announcement on
          our website.
        </p>

        <h2 className="mt-6 text-xl font-semibold text-ddarkBlueNeutral">
          9. Contact Us
        </h2>
        <p>
          If you have any questions about these Terms, please contact us at
          support@shortly.com.
        </p>

        <div className="mt-8 flex justify-center">
          <Button className="bg-dcyanPrimary font-semibold text-white hover:bg-opacity-70">
            <a href="/">Return to Homepage</a>
          </Button>
        </div>
      </div>
    </div>
  );
}
