import { getBlogPosts } from "@/lib/firestore";
import BlogClientWrapper from "@/components/blog/BlogClientWrapper";

export const revalidate = 3600; // Revalidate every hour

export default async function BlogListingPage() {
    const posts = await getBlogPosts();
    const featuredPost = posts.find(p => p.id) || null; // Just take the first one as featured for now, or use a "featured" flag

    return (
        <div className="pt-20 lg:pt-12 pb-24 px-6">
            <div className="max-w-7xl mx-auto">
                <BlogClientWrapper initialPosts={posts} initialFeaturedPost={featuredPost} />
            </div>
        </div>
    );
}

