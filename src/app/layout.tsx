import "./globals.css";
import Topbar from "@/components/layout/Topbar";

export const metadata = {
    title: "Léna G.-B. — Portfolio",
    description: "Vitrine personnelle.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="fr">
        <body>
        <main className="">{children}</main>
        </body>
        </html>
    );
}
