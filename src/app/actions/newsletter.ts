"use server";

import { subscribeToNewsletter } from "@/lib/brevo";
import { db } from "@/lib/firebase"; // Using client-side db for now, or could use admin
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export async function newsletterAction(formData: FormData) {
    const email = formData.get("email") as string;

    if (!email) {
        return { success: false, error: "Email is required" };
    }

    try {
        // 1. Subscribe to Brevo
        await subscribeToNewsletter(email);

        // 2. Log in Firestore (Optional, but good for local record)
        // Note: In server actions, use firebase-admin if needed, but for simple logs client-side db works if initialized correctly
        // However, usually it's better to use Admin SDK in server actions. 
        // For this prototype, we'll focus on the Brevo integration.

        return { success: true };
    } catch (error: any) {
        return { success: false, error: error.message };
    }
}
