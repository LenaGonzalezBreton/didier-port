export default function Section({
                                    id, title, children, bleed = false,
                                }: {
    id?: string; title?: string; children: React.ReactNode; bleed?: boolean;
}) {
    return (
        <section id={id} className={bleed ? "py-0" : "py-16"}>
            {title && <h2 className="mb-6 text-2xl font-semibold tracking-tight">{title}</h2>}
            {children}
        </section>
    );
}
