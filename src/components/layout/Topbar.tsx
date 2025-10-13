import Link from "next/link";
import Container from "./Container";

export default function Topbar() {
    return (
        <div className="pt-6">
            <Container>
                {/* 👇 Ajoute w-full ici */}
                <div className="w-full flex items-center justify-between rounded-full bg-white/70 backdrop-blur px-4 py-2 ring-1 ring-black/5 shadow-sm">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full ring-1 ring-black/10 font-semibold">
                            L
                        </div>
                        <span className="text-sm font-medium tracking-wide">Léna Gonzalez-Breton</span>
                    </Link>

                    <a
                        href="mailto:lena.gonzalezbreton@proton.me"
                        className="inline-flex items-center rounded-full bg-ink text-white px-4 py-2 text-sm shadow-md hover:shadow-lg transition"
                    >
                        On se connecte ?
                    </a>
                </div>
            </Container>
        </div>
    );
}
