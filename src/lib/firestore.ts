import {
    collection,
    getDocs,
    getDoc,
    doc,
    query,
    where,
    orderBy,
    limit,
    QueryConstraint
} from "firebase/firestore";
import { db } from "./firebase";

export interface BlogPost {
    id: string;
    title: string;
    slug: string;
    content: string;
    excerpt: string;
    featuredImage: string;
    tags: string[];
    publishDate: any;
    authorId: string;
    seoTitle?: string;
    seoDescription?: string;
}

export interface PressMention {
    id: string;
    title: string;
    outlet: string;
    logo: string;
    url: string;
    date: any;
    description: string;
    featured: boolean;
}

export interface ManifestoSection {
    heading: string;
    body: string;
    quote?: string;
}

export interface Manifesto {
    title: string;
    subtitle: string;
    sections?: ManifestoSection[];
    blocks?: any[];
}

// Dummy Data fallbacks
const DUMMY_BLOG_POSTS: BlogPost[] = [
    {
        id: "1",
        title: "The Future of Venture Building in the AI Era",
        slug: "future-of-venture-building",
        content: "Drafting the blueprint for the next generation of startups...",
        excerpt: "How artificial intelligence is reshaping the way we build, scale, and exit companies in the modern landscape.",
        featuredImage: "/images/blog_1.png",
        tags: ["Venture", "AI", "Startup"],
        publishDate: Date.now() - 86400 * 2 * 1000,
        authorId: "dinesh"
    },
    {
        id: "2",
        title: "Lessons from Scaling FourSix46",
        slug: "lessons-from-scaling",
        content: "The journey of building a global venture studio...",
        excerpt: "A deep dive into the operational challenges and wins from building a focused venture machine from the ground up.",
        featuredImage: "/images/blog_2.png",
        tags: ["Leadership", "Scale", "Operations"],
        publishDate: Date.now() - 86400 * 5 * 1000,
        authorId: "dinesh"
    },
    {
        id: "3",
        title: "Why Conviction is the New Currency",
        slug: "conviction-is-currency",
        content: "In a world of noise, focus is the ultimate competitive advantage...",
        excerpt: "Exploring why the most successful founders are those who double down on their core beliefs when the market says otherwise.",
        featuredImage: "/images/blog_3.png",
        tags: ["Mindset", "Philosophy", "Entrepreneurship"],
        publishDate: Date.now() - 86400 * 10 * 1000,
        authorId: "dinesh"
    }
];

const DUMMY_PRESS: PressMention[] = [
    {
        id: "p1",
        title: "Dinesh Koyyalamudi: Redefining the Venture Studio Model",
        outlet: "Business Insider",
        logo: "/logos/business-insider.svg",
        url: "#",
        date: Date.now() - 86400 * 30 * 1000,
        description: "An interview on the philosophy behind FourSix46 and the future of impact-driven entrepreneurship.",
        featured: true
    },
    {
        id: "p2",
        title: "The Next Big Thing: TechVision's AI Roadmap",
        outlet: "TechCrunch",
        logo: "/logos/techcrunch.svg",
        url: "#",
        date: Date.now() - 86400 * 60 * 1000,
        description: "How TechVision is bridging the gap between raw AI research and commercial viability.",
        featured: true
    }
];

// Blog Helpers
export async function getBlogPosts(limitCount?: number) {
    if (!db) {
        console.warn("Firestore db not initialized, using dummy data");
        return limitCount ? DUMMY_BLOG_POSTS.slice(0, limitCount) : DUMMY_BLOG_POSTS;
    }
    try {
        const constraints: QueryConstraint[] = [orderBy("publishDate", "desc")];
        if (limitCount) constraints.push(limit(limitCount));

        const q = query(collection(db, "blog_posts"), ...constraints);
        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) {
            return limitCount ? DUMMY_BLOG_POSTS.slice(0, limitCount) : DUMMY_BLOG_POSTS;
        }

        return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as BlogPost));
    } catch (error) {
        console.error("Error fetching blog posts, using dummy data:", error);
        return limitCount ? DUMMY_BLOG_POSTS.slice(0, limitCount) : DUMMY_BLOG_POSTS;
    }
}

export async function getBlogPostBySlug(slug: string) {
    if (!db) return DUMMY_BLOG_POSTS.find(p => p.slug === slug) || null;
    try {
        const q = query(collection(db, "blog_posts"), where("slug", "==", slug), limit(1));
        const querySnapshot = await getDocs(q);
        if (querySnapshot.empty) {
            return DUMMY_BLOG_POSTS.find(p => p.slug === slug) || null;
        }
        const docData = querySnapshot.docs[0];
        return { id: docData.id, ...docData.data() } as BlogPost;
    } catch (error) {
        return DUMMY_BLOG_POSTS.find(p => p.slug === slug) || null;
    }
}

// Press Helpers
export async function getPressMentions() {
    if (!db) return DUMMY_PRESS;
    try {
        const q = query(collection(db, "press_mentions"), orderBy("date", "desc"));
        const querySnapshot = await getDocs(q);
        if (querySnapshot.empty) return DUMMY_PRESS;
        return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as PressMention));
    } catch (error) {
        return DUMMY_PRESS;
    }
}

// Manifesto Helpers
export async function getManifesto() {
    if (!db) return null;
    try {
        const docRef = doc(db, "settings", "manifesto");
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            return docSnap.data() as Manifesto;
        }
        return null;
    } catch (error) {
        return null;
    }
}
