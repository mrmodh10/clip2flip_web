import Image from "next/image";
import Link from "next/link";
import { publicAsset } from "@/lib/public-assets";
import styles from "./site-header.module.css";

type SiteHeaderProps = {
  active?: "home" | "terms" | "privacy";
};

export function SiteHeader({ active = "home" }: SiteHeaderProps) {
  return (
    <header className={styles.headerWrap}>
      <div className={styles.headerInner}>
        <Link href="/" className={styles.brand} aria-label="Clip2Flip home">
          <Image
            src={publicAsset("/images/brand/logo.svg")}
            alt="Clip2Flip"
            width={120}
            height={30}
            priority
          />
        </Link>

        <nav className={styles.nav} aria-label="Main navigation">
          <Link className={active === "home" ? styles.active : ""} href="/">
            Home
          </Link>
          <Link
            className={active === "terms" ? styles.active : ""}
            href="/terms-of-service"
          >
            Terms of Service
          </Link>
          <Link
            className={active === "privacy" ? styles.active : ""}
            href="/privacy-policy"
          >
            Privacy Policy
          </Link>
        </nav>

        <a className={styles.contactBtn} href="mailto:hello@clip2flip.com">
          Contact Us
        </a>
      </div>
    </header>
  );
}