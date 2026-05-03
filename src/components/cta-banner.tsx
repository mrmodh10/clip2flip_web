import Image from "next/image";
import { StoreBadges } from "./store-badges";
import styles from "./cta-banner.module.css";

export function CtaBanner() {
  return (
    <section className={styles.banner}>
      <Image
        src="/images/home/cta-bg.svg"
        alt=""
        fill
        className={styles.bgPhoto}
        sizes="(max-width: 900px) 100vw, 1138px"
        unoptimized
      />

      <div className={styles.qrColumn}>
        <div className={styles.qrWrap}>
          <span className={styles.qrLabel}>Or scan the QR code below</span>
          <Image
            src="/images/home/qr-code.png"
            alt="Clip2Flip app QR code"
            width={80}
            height={80}
            className={styles.qrCode}
            unoptimized
          />
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.header}>
          <h3 className={styles.heading}>Turn your items into cash today</h3>
          <p className={styles.subtitle}>Join Clip2Flip And Turn Your Item Into Cash Fast.</p>
        </div>
        <StoreBadges centered dark />
        <p className={styles.meta}>Takes less than 30 seconds</p>
      </div>
    </section>
  );
}
