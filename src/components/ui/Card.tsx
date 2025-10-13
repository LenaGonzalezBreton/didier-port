import { cn } from "@/lib/cn";
export default function Card({ className, children }: { className?: string; children: React.ReactNode }) {
    return (
        <div className={cn("rounded-2xl bg-white ring-1 ring-black/5 p-5 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-hover)] transition-shadow", className)}>
            {children}
        </div>
    );
}
