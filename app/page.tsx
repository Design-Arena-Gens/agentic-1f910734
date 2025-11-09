import Link from "next/link";
import Image from "next/image";
import Logo from "@/components/Logo";

export default function Page() {
  return (
    <main>
      <div className="container">
        <div className="brand" aria-label="PostuLink logo et nom">
          <Logo size={104} />
          <span className="wordmark">PostuLink</span>
        </div>

        <p className="tagline">
          PostuLink connecte les candidats aux bonnes opportunit?s. Notre agent analyse la compatibilit? de
          votre profil avec chaque offre et g?n?re automatiquement un CV et une lettre de motivation sur mesure.
        </p>

        <div className="ctaRow">
          <a className="button" href="/logo.svg" download>
            T?l?charger le logo (SVG)
          </a>
          <Link className="secondary" href="https://agentic-1f910734.vercel.app" target="_blank">
            Ouvrir en production
          </Link>
        </div>

        <div className="footer">Marque: d?grad? bleu ? vert, symbole du lien et de l?ad?quation.</div>
      </div>
    </main>
  );
}
