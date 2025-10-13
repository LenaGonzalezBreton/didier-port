import Topbar from "@/components/layout/Topbar";

export default function Home() {
    return (
        <main className="min-h-dvh grid place-items-center p-6">
            <div className="w-full max-w-2xl rounded-[28px] bg-white/70 backdrop-blur p-8 md:p-12 ring-1 ring-black/5 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)]">
                {/* Badge */}
                <span className="inline-flex items-center gap-2 rounded-full bg-accent/15 px-3 py-1 text-xs font-medium text-accent">
          <span className="h-2 w-2 rounded-full bg-current animate-pulse" />
          En chantier
        </span>

                {/* Titre */}
                <h1 className="mt-6 text-4xl md:text-5xl font-semibold tracking-tight">
                    Développement en cours
                </h1>

                {/* Signature / Nom & prénom */}
                <div className="mt-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary font-semibold ring-1 ring-black/5">
                        LG
                    </div>
                    <div>
                        <p className="font-medium">Léna Gonzalez-Breton</p>
                        <p className="text-xs text-ink/60">Développeuse & UI/UX Designer</p>
                    </div>
                </div>
                {/* Sous-texte */}
                <p className="mt-3 text-ink/70">
                    La vitrine arrive très vite. En attendant, on se connecte et je fais tout ça proprement.
                </p>

                {/* Barre de progression stylée */}
                <div className="mt-8">
                    <div className="h-2 w-full rounded-full bg-muted/60 overflow-hidden ring-1 ring-black/5">
                        <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-accent to-primary animate-pulse" />
                    </div>
                    <p className="mt-2 text-xs text-ink/60">70% — On est sur la fin ! </p>
                </div>

                {/* CTA neutre */}
                <div className="mt-8 flex flex-wrap gap-3">
                    <a
                        href="mailto:lena.gonzalezbreton@proton.me"
                        className="inline-flex items-center rounded-2xl bg-ink text-white px-5 py-2.5 text-sm shadow-lg shadow-black/5 transition-all hover:-translate-y-0.5 hover:shadow-black/10"
                    >
                        Me contacter
                    </a>
                    <a
                        href="https://www.linkedin.com/in/lenagonzalezbreton/"
                        className="inline-flex items-center rounded-2xl border border-primary text-primary px-5 py-2.5 text-sm transition-all hover:bg-primary/5"
                    >
                        LinkedIn
                    </a>
                </div>
            </div>
        </main>
    );
}
