import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "XXVI Private Selection | Timepiece",
  description:
    "Diamond-set XXVI timepiece selected for presence, rarity, and private acquisition.",
};

const details = [
  "Private Sourcing",
  "Appointment Viewing",
  "Authenticated Selection",
  "Available By Inquiry",
];

export default function TimepiecePage() {
  return (
    <main className="detailPage">
      <nav className="detailTopbar" aria-label="Collection navigation">
        <Link className="brandMark" href="/">
          XXVI
        </Link>
        <a
          className="topbarLink"
          href="mailto:etutu22@yahoo.com?subject=XXVI%20Timepiece%20Inquiry"
        >
          Private Inquiry
        </a>
      </nav>

      <section className="detailHero" aria-labelledby="timepiece-title">
        <div className="detailImageBlock">
          <Image
            src="/watches/photo_14_2026-06-05_00-31-29.jpg"
            alt="Two diamond-set timepieces presented on a black glove in the XXVI showroom."
            fill
            priority
            sizes="(max-width: 1080px) 100vw, 58vw"
            className="detailHeroImage"
          />
          <div className="detailImageShade" />
          <span className="lightGlint detailGlint" />
        </div>

        <div className="detailCopy">
          <p className="eyebrow">Timepiece</p>
          <h1 id="timepiece-title">XXVI Private Selection</h1>
          <p>
            Diamond-set timepiece selected for presence, rarity, and private
            acquisition.
          </p>

          <div className="detailList" aria-label="Selection details">
            {details.map((detail) => (
              <span key={detail}>{detail}</span>
            ))}
          </div>

          <a
            className="buttonPrimary"
            href="mailto:etutu22@yahoo.com?subject=XXVI%20Timepiece%20Inquiry"
          >
            Request This Piece
          </a>
        </div>
      </section>
    </main>
  );
}
