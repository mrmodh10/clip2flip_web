import Image from "next/image";
import { CtaBanner } from "@/components/cta-banner";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import styles from "../policy.module.css";

export default function PrivacyPolicyPage() {
  return (
    <div className={styles.pageBg}>
      <div className={styles.topNavArea}>
        <SiteHeader active="privacy" />
      </div>

      <main className={styles.page}>
        <article className={styles.paper}>
          <span className={styles.badge}>
            <Image src="/images/policy/hero-badge.svg" alt="" width={16} height={16} />
            Privacy Policy
          </span>

          <h1 className={styles.title}>Clip2Flip Privacy Policy</h1>
          <p className={styles.subtitle}>
            Our Privacy Policy outlines how we collect, use, and protect your personal
            information. Your privacy and security are our priorities.
          </p>

          <p className={styles.updated}>Last Updated: March 2026</p>

          <div className={styles.content}>
            <p>
              Clip2Flip (&quot;Clip2Flip&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) respects your
              privacy and is committed to protecting your information. This Privacy Policy
              explains what we collect, use, disclose, and safeguard when you use the
              Clip2Flip mobile application and website (the &quot;Platform&quot;).
            </p>

            <p>By using Clip2Flip, you agree to the terms of this Privacy Policy.</p>

            <section>
              <h2>1. Information We Collect</h2>
              <p>We may collect the following types of information:</p>
              <ul>
                <li>Personal information (name, username, email address)</li>
                <li>Phone number (if provided)</li>
                <li>Profile information</li>
                <li>Videos, images, listings, and descriptions</li>
                <li>Messages and communications between users</li>
                <li>Device and usage data (IP address, activity)</li>
              </ul>
            </section>

            <section>
              <h2>2. How We Use Your Information</h2>
              <ul>
                <li>Provide and operate the Platform</li>
                <li>Enable buying and selling between users</li>
                <li>Improve app performance and user experience</li>
                <li>Communicate with users (support, updates, notifications)</li>
                <li>Detect and prevent fraud, abuse, or illegal activity</li>
              </ul>
            </section>

            <section>
              <h2>3. Sharing of Information</h2>
              <p>We do not sell your personal information.</p>
              <p>We may share information:</p>
              <ul>
                <li>With service providers that help operate the Platform</li>
                <li>If required by law, legal process, or government request</li>
                <li>To protect rights, safety, or property of Clip2Flip and users</li>
              </ul>
            </section>

            <section>
              <h2>4. User-Generated Content</h2>
              <p>
                Content you post (videos, listings, profile info) may be visible to other
                users and the public. You are responsible for what you choose to share.
              </p>
            </section>

            <section>
              <h2>5. Data Security</h2>
              <p>
                We implement reasonable security measures to protect your information.
                However, no system is completely secure, and we cannot guarantee absolute
                security.
              </p>
            </section>

            <section>
              <h2>6. Your Rights</h2>
              <ul>
                <li>Access or update your account information</li>
                <li>Request deletion of your account</li>
                <li>Contact us regarding your data</li>
              </ul>
            </section>

            <section>
              <h2>7. Children&apos;s Privacy</h2>
              <p>
                Clip2Flip is not intended for users under 13. We do not knowingly collect
                personal information from children.
              </p>
            </section>

            <section>
              <h2>8. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Continued use of the
                Platform means you accept those updates.
              </p>
            </section>

            <section>
              <h2>9. Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy, contact us at
                <a href="mailto:founder@clip2flip.com"> founder@clip2flip.com</a>.
              </p>
            </section>
          </div>
        </article>

        <div className={styles.bannerWrap}>
          <CtaBanner />
        </div>

        <div className={styles.footerWrap}>
          <SiteFooter />
        </div>
      </main>
    </div>
  );
}
