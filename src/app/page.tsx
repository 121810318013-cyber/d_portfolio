import HomeHero from "@/components/sections/HomeHero";
import PersonalIntro from "@/components/sections/PersonalIntro";
import AdvancedVentures from "@/components/sections/AdvancedVentures";
import EthosSection from "@/components/sections/EthosSection";
import HorizontalNewsroom from "@/components/sections/HorizontalNewsroom";
import PressLogos from "@/components/sections/PressLogos";
import ManifestoTeaser from "@/components/sections/ManifestoTeaser";
import Newsletter from "@/components/sections/Newsletter";
import { getBlogPosts } from "@/lib/firestore";

export default async function Home() {
  const recentPosts = await getBlogPosts(6); // Increased to 6 for a better horizontal scroll experience

  return (
    <div className="flex flex-col">
      {/* Section 1: Hero */}
      <HomeHero />

      {/* Section 2: Personal Intro */}
      <PersonalIntro />

      {/* Section 3: The Ethos (Advanced Reveal) */}
      <EthosSection />

      {/* Section 4: Advanced Ventures (Split-screen) */}
      <AdvancedVentures />

      {/* Section 5: Horizontal Newsroom */}
      <HorizontalNewsroom posts={recentPosts} />

      {/* Section 6: Press Logos */}
      <PressLogos />

      {/* Section 6: Manifesto Teaser */}
      <ManifestoTeaser />

      {/* Section 7: Newsletter */}
      <Newsletter />
    </div>
  );
}

