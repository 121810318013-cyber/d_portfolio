const BREVO_API_URL = "https://api.brevo.com/v3";

export async function subscribeToNewsletter(email: string, name?: string) {
    const apiKey = process.env.BREVO_API_KEY;
    const listId = parseInt(process.env.BREVO_NEWSLETTER_LIST_ID || "0");

    if (!apiKey || !listId) {
        console.error("Brevo API key or List ID missing");
        throw new Error("Newsletter configuration error");
    }

    const response = await fetch(`${BREVO_API_URL}/contacts`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "api-key": apiKey,
        },
        body: JSON.stringify({
            email,
            attributes: name ? { FNAME: name.split(" ")[0], LNAME: name.split(" ").slice(1).join(" ") } : {},
            listIds: [listId],
            updateEnabled: true,
        }),
    });

    if (!response.ok) {
        const error = await response.json();
        console.error("Brevo API error:", error);
        throw new Error(error.message || "Failed to subscribe");
    }

    return await response.json();
}
