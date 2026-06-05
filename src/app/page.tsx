"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

const luxuryEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

type CollectionItem = {
  name: string;
  image: string;
  alt: string;
  href?: string;
};

const collectionItems: CollectionItem[] = [
  {
    name: "TIMEPIECES",
    image: "/watches/photo_14_2026-06-05_00-31-29.jpg",
    alt: "Two diamond timepieces presented on a black glove.",
    href: "/collection/timepiece",
  },
  {
    name: "CHAINS",
    image: "/chains/photo_74_2026-06-05_00-31-30.jpg",
    alt: "A diamond chain displayed against a black XXVI presentation form.",
  },
  {
    name: "PENDANTS",
    image: "/pendants/pendant%20c.jpg",
    alt: "A diamond XXVI pendant held with jeweler's tweezers.",
  },
  {
    name: "EARRINGS",
    image: "/earrings/photo_56_2026-06-05_00-31-30.jpg",
    alt: "Diamond earrings arranged on a black presentation glove.",
  },
  {
    name: "RINGS",
    image: "/rings/photo_51_2026-06-05_00-31-30.jpg",
    alt: "A diamond ring shown in close detail.",
  },
];

const editorialImages = [
  {
    label: "Private Handling",
    image: "/pendants/pendant%20best.jpg",
    alt: "A custom pendant resting on a white glove in a private jewelry presentation.",
    copy: "Custom work is reviewed close, slowly, and under controlled light.",
  },
  {
    label: "Showroom Evidence",
    image: "/chains/photo_32_2026-06-05_00-31-30.jpg",
    alt: "Diamond chains and a ring arranged inside black-lined presentation cases.",
    copy: "Pieces are introduced by appointment, then refined through private sourcing.",
  },
  {
    label: "Diamond Setting",
    image: "/rings/photo_52_2026-06-05_00-31-30.jpg",
    alt: "A diamond ring examined with tweezers in a private showroom setting.",
    copy: "Scale, surface, and setting quality drive every commission discussion.",
  },
];

const privateRoomObjects = [
  "/watches/photo_10_2026-06-05_00-31-29.jpg",
  "/pendants/pendant.jpg",
  "/rings/photo_84_2026-06-05_00-31-30.jpg",
  "/earrings/photo_48_2026-06-05_00-31-30.jpg",
];

const reveal = {
  initial: { opacity: 0, y: 34 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.24 },
  transition: { duration: 0.8, ease: luxuryEase },
};

export default function Home() {
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [0, -88],
  );
  const editorialY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [54, -72],
  );

  return (
    <main className="xxvi-page">
      <section className="hero" aria-labelledby="hero-title">
        <div className="heroAtmosphere" aria-hidden="true">
          <span className="diamondParticle particleOne" />
          <span className="diamondParticle particleTwo" />
          <span className="diamondParticle particleThree" />
          <span className="diamondParticle particleFour" />
          <span className="lightGlint heroGlintOne" />
          <span className="lightGlint heroGlintTwo" />
        </div>

        <nav className="topbar" aria-label="Primary navigation">
          <a className="brandMark" href="#hero-title" aria-label="XXVI home">
            XXVI
          </a>

          <a className="topbarLink topbarCta" href="#private-inquiry">
            Private Inquiry
          </a>

          <details className="mobileMenu">
            <summary>Menu</summary>
            <a href="#private-inquiry">Private Inquiry</a>
          </details>
        </nav>

        <div className="heroGrid">
          <motion.div
            className="heroCopy"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: luxuryEase }}
          >
            <p className="eyebrow">Private Digital Showroom</p>
            <h1 id="hero-title">XXVI</h1>
            <p className="tagline">
              Private Jewelry. Diamond Timepieces. Custom Luxury.
            </p>
            <p className="heroText">
              A cinematic jewelry house for rare watches, diamond pieces, and
              one-of-one commissions handled by private request.
            </p>
            <div className="heroActions">
              <a className="buttonPrimary" href="mailto:etutu22@yahoo.com">
                Request Private Viewing
              </a>
              <a className="buttonGhost" href="#collection">
                Explore Collection
              </a>
            </div>
          </motion.div>

          <motion.div
            className="vaultVisual"
            aria-label="Faceted crystal vault visual"
            initial={{ opacity: 0, scale: 0.94, rotateX: 8 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ duration: 1.1, delay: 0.12, ease: luxuryEase }}
            style={{ y: heroY }}
          >
            <div className="vaultHalo" />
            <div className="crystalCluster">
              <span className="crystalShard shardOne" />
              <span className="crystalShard shardTwo" />
              <span className="crystalShard shardThree" />
              <span className="crystalShard shardFour" />
            </div>
            <div className="cutStone">
              <span className="cutStoneFacet facetNorth" />
              <span className="cutStoneFacet facetEast" />
              <span className="cutStoneFacet facetSouth" />
              <span className="cutStoneFacet facetWest" />
              <span className="stoneTable" />
            </div>
            <div className="bezelOrbit orbitOne" />
            <div className="bezelOrbit orbitTwo" />
            <div className="vaultBase">
              <span className="vaultLine" />
              <span className="vaultLine short" />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section collectionSection" id="collection">
        <motion.div className="sectionIntro collectionIntro" {...reveal}>
          <p className="eyebrow">Vault Collection</p>
          <h2>VAULT COLLECTION</h2>
          <p>Private categories by appointment.</p>
        </motion.div>

        <div className="collectionGrid">
          {collectionItems.map((item, index) => (
            <motion.a
              className={`collectionCard ${item.href ? "collectionLink" : ""}`}
              href={item.href}
              key={item.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.65,
                delay: index * 0.06,
                ease: luxuryEase,
              }}
            >
              <div className="collectionImageWrap">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 760px) 45vw, (max-width: 1080px) 20vw, 180px"
                  className="collectionImage"
                />
              </div>
              <span className="lightGlint cardGlint" />
              <span className="collectionLabel">{item.name}</span>
            </motion.a>
          ))}
        </div>
      </section>

      <section className="editorialSection" aria-labelledby="editorial-title">
        <div className="editorialShell">
          <motion.div className="sectionIntro splitIntro" {...reveal}>
            <div>
              <p className="eyebrow">Editorial Room</p>
              <h2 id="editorial-title">Campaign Scale, Private Detail</h2>
            </div>
            <p>
              The imagery is treated like a private client dossier: close,
              quiet, reflective, and held away from ordinary retail language.
            </p>
          </motion.div>

          <motion.div className="editorialGrid" style={{ y: editorialY }}>
            {editorialImages.map((item, index) => (
              <motion.article
                className={`editorialPanel editorialPanel${index + 1}`}
                key={item.label}
                initial={{ opacity: 0, y: 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.28 }}
                transition={{
                  duration: 0.75,
                  delay: index * 0.08,
                  ease: luxuryEase,
                }}
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 760px) 100vw, 42vw"
                  className="editorialImage"
                />
                <div className="editorialOverlay" />
                <span className="lightGlint editorialGlint" />
                <div className="editorialCaption">
                  <span>{item.label}</span>
                  <p>{item.copy}</p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="showroomSection" aria-labelledby="showroom-title">
        <motion.div className="showroomShell" {...reveal}>
          <div className="showroomCopy">
            <p className="eyebrow">Private Showroom</p>
            <h2 id="showroom-title">East Legon, Accra</h2>
            <p>
              Private viewings are available by appointment for watches,
              chains, pendants, earrings, rings, and commissioned pieces.
            </p>
            <a className="buttonPrimary" href="#private-inquiry">
              Request Appointment
            </a>
          </div>

          <div className="showroomImageBlock">
            <Image
              src="/photo_87_2026-06-05_00-31-30.jpg"
              alt="Diamond pendant presented on a white glove for a private XXVI viewing."
              fill
              sizes="(max-width: 1080px) 100vw, 58vw"
              className="showroomImage"
            />
            <div className="showroomShade" />
            <span className="lightGlint showroomGlint" />
          </div>
        </motion.div>
      </section>

      <section className="section signatureSection">
        <motion.div className="sectionIntro splitIntro" {...reveal}>
          <div>
            <p className="eyebrow">Signature Pieces</p>
            <h2>Objects With Weight, Light, And Restraint</h2>
          </div>
          <p>
            The first XXVI direction is cinematic and selective: pieces are
            presented as private acquisitions, not mass-market inventory.
          </p>
        </motion.div>

        <div className="signatureShowcase">
          <motion.div className="signatureVisual" {...reveal}>
            <Image
              src="/watches/photo_13_2026-06-05_00-31-29.jpg"
              alt="XXVI watches presented inside a private watch roll."
              fill
              sizes="(max-width: 1080px) 100vw, 56vw"
              className="signatureImage"
            />
            <div className="signatureShade" />
            <span className="lightGlint signatureGlint" />
            <div className="facetFrame">
              <span className="facet facetOne" />
              <span className="facet facetTwo" />
              <span className="facet facetThree" />
            </div>
          </motion.div>

          <motion.form
            className="compactInquiryForm"
            id="private-inquiry"
            action="mailto:etutu22@yahoo.com?subject=XXVI%20Private%20Inquiry"
            method="post"
            encType="text/plain"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.32 }}
            transition={{ duration: 0.7, ease: luxuryEase }}
          >
            <div className="compactInquiryHeader">
              <p className="eyebrow">Private Inquiry</p>
              <h3>Request A Viewing</h3>
            </div>

            <label>
              <span>Name</span>
              <input name="Name" type="text" required />
            </label>

            <label>
              <span>Email</span>
              <input name="Email" type="email" required />
            </label>

            <label>
              <span>Phone</span>
              <input name="Phone" type="tel" />
            </label>

            <label>
              <span>Interested In</span>
              <select name="Interested In" defaultValue="Timepiece">
                <option>Timepiece</option>
                <option>Chain</option>
                <option>Pendant</option>
                <option>Earrings</option>
                <option>Ring</option>
                <option>Custom Commission</option>
              </select>
            </label>

            <label className="compactMessageField">
              <span>Message</span>
              <textarea name="Message" rows={4} />
            </label>

            <button className="buttonPrimary" type="submit">
              Submit Inquiry
            </button>
          </motion.form>
        </div>
      </section>

      <section className="snapchatSection">
        <motion.div className="snapchatPanel" {...reveal}>
          <h2>Current Releases</h2>
          <a
            className="buttonGhost"
            href="https://snapchat.com/t/xIjFTyhU"
            target="_blank"
            rel="noreferrer"
          >
            View Snapchat
          </a>
        </motion.div>
      </section>

      <section className="finalCta">
        <div className="finalCtaShowcase" aria-hidden="true">
          {privateRoomObjects.map((image) => (
            <div className="finalCtaObject" key={image}>
              <Image
                src={image}
                alt=""
                fill
                sizes="150px"
                className="finalCtaObjectImage"
              />
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.8, ease: luxuryEase }}
        >
          <p className="eyebrow">By Appointment</p>
          <h2>Enter The Private Room</h2>
          <p>
            Request a viewing for watches, chains, pendants, earrings, rings,
            or a custom piece made to feel singular.
          </p>
          <a className="buttonPrimary" href="mailto:etutu22@yahoo.com">
            Request Private Viewing
          </a>
        </motion.div>
      </section>

      <footer className="footer">
        <p>XXVI</p>
        <a href="mailto:etutu22@yahoo.com">etutu22@yahoo.com</a>
      </footer>
    </main>
  );
}
