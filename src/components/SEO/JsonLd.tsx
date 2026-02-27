export default function JsonLd() {
    const personSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Dinesh Koyyalamudi",
        "url": "https://dineshkoyyalamudi.com",
        "jobTitle": "Founder & CEO",
        "affiliation": {
            "@type": "Organization",
            "name": "FourSix46"
        },
        "description": "Founder, thinker, and leader focused on building resilient systems and visionary companies.",
        "sameAs": [
            "https://linkedin.com/in/dineshkoyyalamudi",
            "https://twitter.com/dineshkoyyalamudi",
            "https://instagram.com/dineshkoyyalamudi"
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
    );
}
