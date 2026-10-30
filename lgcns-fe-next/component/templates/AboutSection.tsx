import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function AboutSection() {
    return (
    <section>
        {/* Description Items */}
        <section className="flex flex-col gap-4 px-4 py-20">
            <Button
            className={cn("py-8 color-white text-2xl font-bold")}
            variant="default" size="lg">Click me</Button>
        </section>
        {/* Description Controls */}
    </section>
    );
}