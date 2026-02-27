"use server";

import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export async function contactAction(formData: FormData) {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;
    const type = formData.get("type") as string || "general";

    if (!name || !email || !message) {
        return { success: false, error: "Name, email, and message are required" };
    }

    try {
        await addDoc(collection(db, "contact_messages"), {
            name,
            email,
            subject,
            message,
            type,
            createdAt: serverTimestamp()
        });

        return { success: true };
    } catch (error: any) {
        console.error("Contact form error:", error);
        return { success: false, error: "Failed to send message. Please try again later." };
    }
}
