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
          <a href="#" aria-label="LinkedIn" className={styles.socialBtn}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M3.167 5.33333H1V15H3.167V5.33333ZM2.08333 1C1.391 1 0.833333 1.55767 0.833333 2.25C0.833333 2.94233 1.391 3.5 2.08333 3.5C2.77567 3.5 3.33333 2.94233 3.33333 2.25C3.33333 1.55767 2.77567 1 2.08333 1ZM15 9.24833C15 6.93 14.5023 5.145 11.7923 5.145C10.489 5.145 9.61567 5.86067 9.25833 6.54H9.22167V5.33333H7.145V15H9.31167V10.2383C9.31167 8.98333 9.55 7.76833 11.104 7.76833C12.635 7.76833 12.6583 9.2 12.6583 10.3183V15H14.825V9.24833H15Z" fill="white"/>
            </svg>
          </a>
          <a href="#" aria-label="X" className={styles.socialBtn}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M9.52206 6.77557L15.4783 0H14.067L8.89524 5.88256L4.76537 0H0L6.24556 8.89701L0 16H1.41135L6.87198 9.79001L11.2346 16H16L9.52171 6.77557H9.52206ZM7.58734 8.97508L6.95458 8.08988L1.92015 1.04549H4.08858L8.15111 6.72978L8.78387 7.61498L14.0677 15.006H11.8993L7.58734 8.97543V8.97508Z" fill="white"/>
            </svg>
          </a>
          <a href="#" aria-label="Instagram" className={styles.socialBtn}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M11.3333 1H4.66667C2.64162 1 1 2.64162 1 4.66667V11.3333C1 13.3583 2.64162 15 4.66667 15H11.3333C13.3583 15 15 13.3583 15 11.3333V4.66667C15 2.64162 13.3583 1 11.3333 1Z" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10.6667 7.57979C10.749 8.13501 10.6541 8.70198 10.3954 9.19996C10.1366 9.69794 9.72727 10.1021 9.226 10.3544C8.72473 10.6067 8.15658 10.6942 7.6024 10.6046C7.04822 10.515 6.5368 10.2528 6.14041 9.85557C5.74401 9.4583 5.48296 8.9463 5.39463 8.39192C5.30629 7.83754 5.39511 7.26961 5.64856 6.76892C5.902 6.26823 6.3071 5.85974 6.80566 5.60214C7.30422 5.34454 7.87141 5.25098 8.42643 5.33462C8.99257 5.41998 9.51669 5.68515 9.92374 6.09145C10.3308 6.49776 10.597 7.02131 10.6833 7.58729L10.6667 7.57979Z" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M11.6667 4.33337H11.675" stroke="white" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        <Link href="/privacy-policy">Privacy Policy</Link>
      </div>
    </footer>
  );
}