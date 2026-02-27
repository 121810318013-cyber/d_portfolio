import { getManifesto } from "@/lib/firestore";
import ManifestoHeader from "@/components/manifesto/ManifestoHeader";
import ManifestoContent from "@/components/manifesto/ManifestoContent";
import ManifestoCTA from "@/components/manifesto/ManifestoCTA";

export const revalidate = 3600;
const manifestoBlocks = [
    {
        type: "text",
        heading: "The Architecture of Intent",
        body: "Dinesh Koyyalamudi is a visionary entrepreneur and thinker dedicated to restructuring how we approach innovation and leadership in the 21st century. As the founder of FourSix46, he has spearheaded numerous initiatives aimed at solving complex global challenges through technology and strategic design.\n\nHis journey began with a simple observation: most systems are designed for maintenance, not transformation. Dinesh pivotally shifted his focus toward building 'resilient systems'—structures that don't just survive change but thrive because of it."
    },
    {
        type: "quote",
        text: "The future is not something we wait for; it is an infrastructure we must build today.",
        author: "Dinesh Koyyalamudi"
    },
    {
        type: "text",
        heading: "Why We Build",
        body: "A manifesto page helps communicate 'why he does what he does' and can inspire and align readers (investors and collaborators) with his mission. For Dinesh, building companies is not just about commercial success; it's about defining the core values and the approach to building the next generation of resilient startups.\n\nWe believe that founder who write manifestos clearly articulate their vision of the future and how to get there—which can attract like-minded partners who are ready to engage in the infinite game of innovation."
    },
    {
        type: "principle",
        principles: [
            {
                title: "Systems Over Symbols",
                description: "We don't build brand symbols; we build functional systems. Complexity is not the enemy, but opacity is. Our goal is to make the invisible visible through structured design."
            },
            {
                title: "The Infinite Game",
                description: "Short-term gains are noise; long-term value is signal. We build for the next decade, focusing on resilience, adaptability, and generational impact."
            },
            {
                title: "Radical Empathy",
                description: "Understanding the human experience is the source of all data. We use logic to scale empathy, ensuring every venture serves a genuine human need."
            },
            {
                title: "Sovereign Scale",
                description: "True scale is achieved when systems empower individuals rather than consuming them. We prioritize architectures that distribute capability and autonomy."
            }
        ]
    },
    {
        type: "vision_grid",
        heading: "The Next Decade of Building",
        description: "Our roadmap isn't defined by iterative features, but by fundamental shifts in how we live, work, and connect. This is what we are building toward.",
        items: [
            {
                icon: "01",
                title: "Decentralized Infrastructure",
                text: "Moving away from fragile central points of failure toward distributed, sovereign nodes of computation and value exchange that cannot be taken offline."
            },
            {
                icon: "02",
                title: "Cognitive Automation",
                text: "Leveraging advanced AI not to replace human ingenuity, but to eliminate operational friction and radically amplify human strategic capability."
            },
            {
                icon: "03",
                title: "Regenerative Systems",
                text: "Designing technical and economic software models that give back more than they extract, ensuring sustainability at mathematical scale."
            }
        ]
    },
    {
        type: "quote",
        text: "Design is the conduit through which the future flows."
    }
];

export default async function ManifestoPage() {
    const manifestoData = await getManifesto();

    const title = manifestoData?.title || "My Manifesto";
    const subtitle = manifestoData?.subtitle || "A blueprint for the next century of resilient building.";
    const blocks = manifestoData?.blocks || manifestoBlocks;

    return (
        <div className="pt-20 lg:pt-12 pb-48 bg-brand-dark min-h-screen">
            <div className="max-w-7xl mx-auto px-6">
                <ManifestoHeader title={title} subtitle={subtitle} />
                <ManifestoContent blocks={blocks} />
                <ManifestoCTA />
            </div>
        </div>
    );
}
