import { motion } from "framer-motion";
import { getPressMentions } from "@/lib/firestore";
import PressClientWrapper from "@/components/press/PressClientWrapper";
import PressHeader from "@/components/press/PressHeader";

export const revalidate = 3600;

export default async function PressPage() {
    const mentions = await getPressMentions();

    return (
        <div className="pb-24">
            {/* Header spans edge-to-edge */}
            <PressHeader />

            {/* Content below header is constrained to normal max width */}
            <div className="max-w-7xl mx-auto px-6 mt-12">
                <PressClientWrapper mentions={mentions} />

                {/* Media Kit CTA */}
                <div className="mt-24 p-12 glass-card text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/5 rounded-full blur-[80px] -z-10" />
                    <h2 className="text-3xl md:text-4xl font-display mb-6">Need Media Assets?</h2>
                    <p className="text-text-secondary mb-10 max-w-xl mx-auto text-lg">
                        Access hi-res photos, official bios, and brand assets for speaking
                        engagements and press coverage.
                    </p>
                    <button className="btn-premium px-12">Download Media Kit</button>
                </div>
            </div>
        </div>
    );
}

