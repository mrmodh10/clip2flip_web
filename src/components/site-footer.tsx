import Image from "next/image";
import Link from "next/link";
import styles from "./site-footer.module.css";

const chips = [
  "Benefits",
  "Features",
  "How To Use",
  "Pricing",
  "Testimonials",
  "Waitlist",
];

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.emailRow}>
        <a href="mailto:hello@clip2flip.com" className={styles.emailPill}>
          <span className={styles.mailIcon} aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.333 5H16.667C17.127 5 17.5 5.373 17.5 5.833V14.167C17.5 14.627 17.127 15 16.667 15H3.333C2.873 15 2.5 14.627 2.5 14.167V5.833C2.5 5.373 2.873 5 3.333 5Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M17.5 6.25L10.858 10.979C10.348 11.342 9.652 11.342 9.142 10.979L2.5 6.25" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
          hello@Clip2Flip.com
        </a>
      </div>

      <div className={styles.chips}>
        {chips.map((chip) => (
          <span key={chip} className={styles.chip}>
            {chip}
          </span>
        ))}
      </div>

      <div className={styles.bottomRow}>
        <p>Built for Clip2Flip</p>

        <div className={styles.socials}>
          <a href="https://www.tiktok.com/@clip2flipapp?_r=1&_t=ZP-965Urcv1WAh" aria-label="TikTok" className={styles.socialBtn}>
            <Image src="/images/icons/Tiktok.svg" alt="" width={24} height={24} aria-hidden="true" className={styles.socialIcon} />
          </a>
          <a href="https://www.facebook.com/share/1FZY86Z1pR/" aria-label="Facebook" className={styles.socialBtn}>
            <Image src="/images/icons/Facebook.svg" alt="" width={24} height={24} aria-hidden="true" className={styles.socialIcon} />
          </a>
          <a href="https://www.instagram.com/clip2flipapp?igsh=MW1saGFoZmlvejFtOA==" aria-label="Instagram" className={styles.socialBtn}>
            <Image src="/images/icons/Instagram.svg" alt="" width={24} height={24} aria-hidden="true" className={styles.socialIcon} />
          </a>
        </div>

        <Link href="/privacy-policy">Privacy Policy</Link>
      </div>
    </footer>
  );
}