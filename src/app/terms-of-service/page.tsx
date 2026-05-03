import Image from "next/image";
import { CtaBanner } from "@/components/cta-banner";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import styles from "../policy.module.css";

export default function TermsOfServicePage() {
  return (
    <div className={styles.pageBg}>
      <SiteHeader active="terms" />

      <main className={styles.page}>
        <article className={styles.paper}>
          <span className={styles.badge}>
            <Image src="/images/policy/hero-badge.svg" alt="" width={16} height={16} />
            Terms of Service
          </span>

          <h1 className={styles.title}>Clip2Flip Terms of Service</h1>
          <p className={styles.subtitle}>
            Our terms explain how we collect, use, and protect your personal
            information, and how to use the platform responsibly.
          </p>

          <p className={styles.updated}>Last Updated: March 2026</p>

          <div className={styles.content}>
            <p>
              Welcome to Clip2Flip. By using the Clip2Flip app and website (the
              &quot;Platform&quot;), you agree to these Terms of Service.
            </p>

            <section>
              <h2>1. Use of the Platform</h2>
              <p>
                Clip2Flip provides a platform for users to buy and sell items through
                video listings. You agree to use the Platform lawfully and responsibly.
              </p>
            </section>

            <section>
              <h2>2. User Accounts</h2>
              <p>You are responsible for:</p>
              <ul>
                <li>Maintaining account security</li>
                <li>All activity under your account</li>
                <li>Providing accurate information</li>
              </ul>
            </section>

            <section>
              <h2>3. User Content</h2>
              <p>
                You are responsible for content you post, including listings, videos, and
                messages.
              </p>
              <p>You agree NOT to post:</p>
              <ul>
                <li>Illegal items</li>
                <li>Fraudulent listings</li>
                <li>Offensive or harmful content</li>
              </ul>
            </section>

            <section>
              <h2>4. Transactions</h2>
              <p>
                Clip2Flip is not a party to transactions between users. We do not
                guarantee item quality, payment completion, or delivery.
              </p>
              <p>All transactions are between users.</p>
            </section>

            <section>
              <h2>5. Prohibited Conduct</h2>
              <p>You agree not to:</p>
              <ul>
                <li>Scam or defraud users</li>
                <li>Use fake accounts</li>
                <li>Abuse messaging</li>
                <li>Attempt to hack or disrupt the platform</li>
              </ul>
            </section>

            <section>
              <h2>6. Account Termination</h2>
              <p>
                We may suspend or terminate accounts that violate these terms.
              </p>
            </section>

            <section>
              <h2>7. Limitation of Liability</h2>
              <p>
                Clip2Flip is not liable for user disputes, losses from transactions, or
                content posted by users. Use the Platform at your own risk.
              </p>
            </section>

            <section>
              <h2>8. Changes to Terms</h2>
              <p>
                We may update these Terms at any time. Continued use means acceptance of
                those updates.
              </p>
            </section>

            <section>
              <h2>9. Contact Us</h2>
              <p>
                If you have questions about these terms, contact us at
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
