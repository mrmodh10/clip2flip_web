import Image from "next/image";
import { publicAsset } from "@/lib/public-assets";
import { CtaBanner } from "@/components/cta-banner";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StoreBadges } from "@/components/store-badges";
import styles from "./home.module.css";

const howItWorks = [
  {
    id: "01",
    title: "Sell With Video In Seconds",
    description: "Record a quick video add a price and details, and post instantly",
    points: ["Fast & Easy", "Real & Details", "Instantly Live"],
    image: publicAsset("/images/home/how-it-works-1.svg"),
  },
  {
    id: "02",
    title: "Discover Deals Near You",
    description: "Browse Real Video Listing From People In Your Aera. Find What You Need, Faster.",
    points: ["Local Deals", "Smart Filter", "Save Your Favorites"],
    image: publicAsset("/images/home/how-it-works-2.svg"),
  },
  {
    id: "03",
    title: "Text Sellers Instantly",
    description: "Connect Via Text With Buyers Or Sellers. Negaotive,Agree, And Make Ot Happen -- All In One Place.",
    points: ["Real Conversations", "Connect Via Text", "Buy Or Sell With Confidence"],
    image: publicAsset("/images/home/how-it-works-3.svg"),
  },
];

const services = [
  {
    title: "Video-First Marketplace",
    subtitle: "See Items In Action",
    points: ["Real Condition", "Better Trust"],
    image: publicAsset("/images/home/service-1.png"),
    icon: <VideoFirstIcon />,
  },
  {
    title: "Instant Listings",
    subtitle: "Post In Seconds.",
    points: ["Record - Post", "No Long Forms", "Live In Seconds"],
    image: publicAsset("/images/home/service-2.png"),
    icon: <InstantListingsIcon />,
  },
  {
    title: "Local Discovery",
    subtitle: "Find Deals Nearby",
    points: ["No Shipping Haslle", "Meet, Locally"],
    image: publicAsset("/images/home/service-3.png"),
    icon: <LocalDiscoveryIcon />,
  },
  {
    title: "Connect Via Text",
    subtitle: "Connect Instantly.",
    points: ["Talk Directly", "Negotiate Fast", "Close Deals Quicker"],
    image: publicAsset("/images/home/service-4.png"),
    icon: <ConnectTextIcon />,
  },
];

function VideoFirstIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M4 12C4 10.3431 5.34315 9 7 9H24C25.6569 9 27 10.3431 27 12V28C27 29.6569 25.6569 31 24 31H7C5.34315 31 4 29.6569 4 28V12Z" fill="#FF3B30"/>
      <path d="M27 15.5L36 11V29L27 24.5V15.5Z" fill="#FF3B30"/>
      <rect x="8" y="14" width="12" height="2.5" rx="1.25" fill="#FFD8D6"/>
      <rect x="8" y="19.5" width="8" height="2.5" rx="1.25" fill="#FFD8D6"/>
    </svg>
  );
}

function InstantListingsIcon() {
  return (
    <Image
      src={publicAsset("/images/icons/Mask%20group.svg")}
      alt=""
      width={40}
      height={40}
      aria-hidden="true"
    />
  );
}

function LocalDiscoveryIcon() {
  return (
    <Image
      src={publicAsset("/images/icons/map_icon.svg")}
      alt=""
      width={40}
      height={40}
      aria-hidden="true"
    />
  );
}

function ConnectTextIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M23.6183 34.8176C30.59 34.3542 36.1433 28.7221 36.6003 21.6516C36.6896 20.2679 36.6896 18.8349 36.6003 17.4512C36.1433 10.3807 30.59 4.74863 23.6183 4.2852C21.2398 4.1271 18.7566 4.12743 16.383 4.2852C9.4113 4.74863 3.858 10.3807 3.40105 17.4512C3.31163 18.8349 3.31163 20.2679 3.40105 21.6516C3.56748 24.2267 4.70636 26.6111 6.04716 28.6244C6.82566 30.0339 6.31188 31.7931 5.501 33.3297C4.91633 34.4377 4.624 34.9917 4.85871 35.3919C5.09345 35.7921 5.61775 35.8049 6.66636 35.8304C8.7401 35.8809 10.1384 35.2929 11.2484 34.4744C11.878 34.0102 12.1928 33.7781 12.4097 33.7514C12.6266 33.7247 13.0536 33.9006 13.9073 34.2522C14.6746 34.5682 15.5656 34.7632 16.383 34.8176C18.7566 34.9754 21.2398 34.9757 23.6183 34.8176Z" fill="#FF3B30" stroke="#FF3B30" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14.166 24.1666H25.8327M14.166 15.8333H19.9993" stroke="#FFD8D6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M14.999 1.34008C19.166 3.74608 21.029 8.77908 19.432 13.3181C17.835 17.8571 13.232 20.6151 8.476 19.8821C3.72 19.1491 0.161 15.1331 0.005 10.3231L0 9.99908L0.005 9.67508C0.119 6.16308 2.069 2.96708 5.141 1.26008C8.213 -0.447923 11.955 -0.417923 14.999 1.34008ZM14.058 7.22608C13.693 6.86108 13.113 6.82408 12.705 7.14108L12.608 7.22608L9.231 10.6021L7.905 9.27708L7.808 9.19208C7.4 8.87608 6.82 8.91208 6.455 9.27808C6.089 9.64308 6.053 10.2231 6.369 10.6311L6.454 10.7281L8.506 12.7791L8.602 12.8641C8.972 13.1511 9.489 13.1511 9.859 12.8641L9.956 12.7791L14.058 8.67608L14.144 8.58008C14.46 8.17208 14.424 7.59108 14.058 7.22608Z"
        fill="#FF3B30"
      />
      <path
        d="M6.875 10.1875L8.78125 12.0938L13.125 7.75"
        stroke="white"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function InfoIcon() {
  return (
    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M10.5 9.167V13.333M18 10C18 11.9891 17.2098 13.8968 15.8033 15.3033C14.3968 16.7098 12.4891 17.5 10.5 17.5C8.51088 17.5 6.60322 16.7098 5.1967 15.3033C3.79018 13.8968 3 11.9891 3 10C3 8.01088 3.79018 6.10322 5.1967 4.6967C6.60322 3.29018 8.51088 2.5 10.5 2.5C12.4891 2.5 14.3968 3.29018 15.8033 4.6967C17.2098 6.10322 18 8.01088 18 10Z"
        stroke="#666666"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.501 7.083C10.7219 7.083 10.9338 6.995 11.09 6.839C11.2462 6.683 11.334 6.471 11.334 6.25C11.334 6.029 11.2462 5.817 11.09 5.661C10.9338 5.505 10.7219 5.417 10.501 5.417C10.28 5.417 10.0682 5.505 9.91195 5.661C9.75573 5.817 9.66797 6.029 9.66797 6.25C9.66797 6.471 9.75573 6.683 9.91195 6.839C10.0682 6.995 10.28 7.083 10.501 7.083Z"
        fill="#666666"
      />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M19.4839 7.50367C19.3889 7.21259 19.2105 6.95583 18.9709 6.76525C18.7313 6.57467 18.4409 6.45868 18.1359 6.43167L13.6829 6.04667L11.9409 1.89467C11.8213 1.61203 11.6211 1.37089 11.3653 1.20135C11.1094 1.03182 10.8093 0.941406 10.5024 0.941406C10.1955 0.941406 9.89542 1.03182 9.63959 1.20135C9.38376 1.37089 9.18354 1.61203 9.06393 1.89467L7.31993 6.04667L2.86593 6.43167C2.55906 6.45684 2.26647 6.57215 2.02493 6.7631C1.78339 6.95405 1.60368 7.21213 1.50836 7.50491C1.41305 7.79769 1.40639 8.11211 1.48923 8.40866C1.57206 8.70521 1.74069 8.97066 1.97393 9.17167L5.35893 12.1247L4.34293 16.5187C4.27356 16.8178 4.29384 17.1308 4.40125 17.4184C4.50865 17.7061 4.69842 17.9558 4.94686 18.1363C5.1953 18.3168 5.4914 18.4201 5.79819 18.4333C6.10498 18.4465 6.40888 18.3691 6.67193 18.2107L10.4999 15.8857L14.3279 18.2107C14.5909 18.3693 14.8948 18.4469 15.2016 18.4337C15.5085 18.4205 15.8046 18.3172 16.053 18.1367C16.3014 17.9561 16.4911 17.7063 16.5984 17.4185C16.7056 17.1308 16.7256 16.8178 16.6559 16.5187L15.6409 12.1247L19.0249 9.17167C19.2573 8.96983 19.425 8.70386 19.5068 8.40713C19.5886 8.11039 19.581 7.7961 19.4849 7.50367H19.4839Z"
        stroke="#333333"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <div className={styles.pageBg}>
      <main className={styles.page}>
        {/* ── Hero ── */}
        <section
          className={styles.hero}
          style={{
            "--hero-bg": `url(${publicAsset("/images/home/hero-bg.png")})`,
          } as React.CSSProperties}
        >
          <SiteHeader active="home" />
          <div className={styles.heroContent}>
            <div className={styles.heroCopy}>
              <h1>Sell anything. Fast.</h1>
              <p className={styles.subTitle}>Sell Faster With Video.</p>
              <p className={styles.highlight}>See It In Action. Buy With Confidence.</p>
              <p className={styles.micro}>
                <span className={styles.microIcon} aria-hidden="true">
                  <InfoIcon />
                </span>
                See it. Trust it. Buy it.
              </p>
              <StoreBadges />
            </div>

            <div className={styles.heroPhones}>
              <Image
                src={publicAsset("/images/home/hero-phone-left.svg")}
                alt="Clip2Flip app browse view"
                width={280}
                height={494}
              />
              <Image
                src={publicAsset("/images/home/hero-phone-center.svg")}
                alt="Clip2Flip listing detail"
                width={308}
                height={540}
              />
              <Image
                src={publicAsset("/images/home/hero-phone-right.svg")}
                alt="Clip2Flip profile view"
                width={280}
                height={494}
              />
            </div>
          </div>
        </section>

        {/* ── How It Works ── */}
        <section className={styles.block}>
          <span className={styles.kicker}>
            <span className={styles.kickerIcon}><StarIcon /></span>
            How it Works
          </span>
          <h2>Sell in Seconds. it&apos;s That Easy.</h2>
          <p className={styles.sectionLead}>
            Clip it. Post it. Connect . Selling has never been this simple
          </p>

          <div className={styles.howGrid}>
            {howItWorks.map((item) => (
              <article key={item.id} className={styles.howCard}>
                <div className={styles.cardTop}>
                  <div className={styles.cardHeading}>
                    <span className={styles.cardNumber}>{item.id}</span>
                    <h3 className={styles.cardTitle}>{item.title}</h3>
                  </div>
                  <p className={styles.cardDesc}>{item.description}</p>
                  <ul className={styles.featureList}>
                    {item.points.map((point) => (
                      <li key={point} className={styles.featureItem}>
                        <span className={styles.featureDot}><CheckIcon /></span>
                        <span className={styles.featureLabel}>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={styles.phoneImageWrap}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={410}
                    height={829}
                    className={styles.phoneImage}
                  />
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ── Why Video Selling Wins ── */}
        <section className={styles.block}>
          <span className={`${styles.kicker} ${styles.servicesKicker}`}>
            <span className={styles.kickerIcon}><StarIcon /></span>
            Our Services
          </span>
          <h2>Why Video Selling Wins</h2>
          <p className={styles.sectionLead}>
            Everything you need to list, connect, and close deals quickly — all in one simple platform.
          </p>

          <div className={styles.servicesGrid}>
            {services.map((service) => (
              <article key={service.title} className={styles.serviceCard}>
                <div className={styles.serviceCardText}>
                  <div className={styles.serviceCardHeading}>
                    <div className={styles.serviceIconWrap}>
                      {service.icon}
                    </div>
                    <h3 className={styles.serviceTitle}>{service.title}</h3>
                  </div>
                  <div className={styles.serviceCardContent}>
                    <p className={styles.serviceSubtitle}>{service.subtitle}</p>
                    <ul className={styles.featureList}>
                      {service.points.map((point) => (
                        <li key={point} className={styles.featureItem}>
                          <span className={styles.featureDot}><CheckIcon /></span>
                          <span className={styles.featureLabel}>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className={styles.servicePhoneWrap}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={265}
                    height={566}
                    className={styles.serviceImage}
                    unoptimized
                  />
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ── Start Selling CTA ── */}
        <section className={styles.sellCta}>
          <h2>Start Selling In Seconds</h2>
          <StoreBadges centered dark />
        </section>

        <CtaBanner />
        <SiteFooter />
      </main>
    </div>
  );
}
