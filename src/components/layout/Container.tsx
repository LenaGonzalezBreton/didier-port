export default function Container({ children, size = "lg" }: {
    children: React.ReactNode; size?: "sm" | "lg" | "xl";
}) {
    const width =
        size === "sm" ? "max-w-3xl" :
            size === "xl" ? "max-w-7xl" : "max-w-6xl";
    return <div className={`mx-auto ${width} px-6`}>{children}</div>;
}
