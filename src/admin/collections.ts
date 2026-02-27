import { buildCollection, buildProperty } from "@firecms/core";

export const blogCollection = buildCollection({
    id: "blog_posts",
    name: "Blog Posts",
    path: "blog_posts",
    properties: {
        title: buildProperty({
            name: "Title",
            dataType: "string",
            validation: { required: true }
        }),
        slug: buildProperty({
            name: "Slug",
            dataType: "string",
            validation: { required: true }
        }),
        publishDate: buildProperty({
            name: "Publish Date",
            dataType: "date",
            mode: "date_time"
        }),
        authorId: buildProperty({
            name: "Author ID",
            dataType: "string"
        }),
        featuredImage: buildProperty({
            name: "Featured Image",
            dataType: "string",
            storage: {
                storagePath: "blog_images",
                acceptedFiles: ["image/*"]
            }
        }),
        excerpt: buildProperty({
            name: "Excerpt",
            dataType: "string",
            multiline: true
        }),
        content: buildProperty({
            name: "Content",
            dataType: "string",
            markdown: true
        }),
        tags: buildProperty({
            name: "Tags",
            dataType: "array",
            of: {
                dataType: "string"
            }
        }),
        seoTitle: buildProperty({
            name: "SEO Title",
            dataType: "string"
        }),
        seoDescription: buildProperty({
            name: "SEO Description",
            dataType: "string",
            multiline: true
        })
    }
});

export const pressCollection = buildCollection({
    id: "press_mentions",
    name: "Press Mentions",
    path: "press_mentions",
    properties: {
        title: buildProperty({
            name: "Title",
            dataType: "string",
            validation: { required: true }
        }),
        outlet: buildProperty({
            name: "Outlet",
            dataType: "string"
        }),
        date: buildProperty({
            name: "Date",
            dataType: "date"
        }),
        url: buildProperty({
            name: "URL",
            dataType: "string"
        }),
        logo: buildProperty({
            name: "Logo",
            dataType: "string",
            storage: {
                storagePath: "press_logos"
            }
        }),
        description: buildProperty({
            name: "Description",
            dataType: "string",
            multiline: true
        }),
        featured: buildProperty({
            name: "Featured",
            dataType: "boolean"
        })
    }
});

export const settingsCollection = buildCollection({
    id: "settings",
    name: "Settings",
    path: "settings",
    properties: {
        title: buildProperty({
            name: "Title",
            dataType: "string"
        }),
        subtitle: buildProperty({
            name: "Subtitle",
            dataType: "string",
            multiline: true
        }),
        sections: buildProperty({
            name: "Sections",
            dataType: "array",
            of: buildProperty({
                name: "Section",
                dataType: "map",
                properties: {
                    heading: buildProperty({
                        name: "Heading",
                        dataType: "string"
                    }),
                    body: buildProperty({
                        name: "Body",
                        dataType: "string",
                        multiline: true
                    }),
                    quote: buildProperty({
                        name: "Quote",
                        dataType: "string"
                    })
                }
            })
        })
    }
});

export const contactCollection = buildCollection({
    id: "contact_messages",
    name: "Contact Messages",
    path: "contact_messages",
    permissions: {
        edit: false,
        create: false,
        delete: false
    },
    properties: {
        name: buildProperty({ name: "Name", dataType: "string" }),
        email: buildProperty({ name: "Email", dataType: "string" }),
        subject: buildProperty({ name: "Subject", dataType: "string" }),
        message: buildProperty({ name: "Message", dataType: "string", multiline: true }),
        type: buildProperty({ name: "Type", dataType: "string" }),
        createdAt: buildProperty({ name: "Created At", dataType: "date" })
    }
});

export const newsletterCollection = buildCollection({
    id: "newsletter_subscribers",
    name: "Newsletter Subscribers",
    path: "newsletter_subscribers",
    permissions: {
        edit: false,
        create: false,
        delete: false
    },
    properties: {
        email: buildProperty({ name: "Email", dataType: "string" }),
        createdAt: buildProperty({ name: "Subscribed At", dataType: "date" })
    }
});

