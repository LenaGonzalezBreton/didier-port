import { cn } from "@/lib/cn";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "solid" | "outline" | "ghost";
    color?: "ink" | "primary";
    size?: "sm" | "md" | "lg";
};

export default function Button({
                                   variant = "solid",
                                   color = "primary",
                                   size = "md",
                                   className,
                                   ...props
                               }: Props) {
    const base = "rounded-2xl transition-all shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-hover)]";
    const sizes = {
        sm: "px-3 py-1.5 text-sm",
        md: "px-5 py-2.5",
        lg: "px-6 py-3 text-lg",
    }[size];

    const bg = color === "ink" ? "bg-ink text-white" : "bg-primary text-white";
    const outline = color === "ink" ? "border border-ink text-ink" : "border border-primary text-primary";
    const ghost = color === "ink" ? "text-ink hover:bg-ink/5" : "text-primary hover:bg-primary/5";

    const style =
        variant === "solid" ? bg :
            variant === "outline" ? outline : ghost;

    return <button className={cn(base, sizes, style, className)} {...props} />;
}
