"use client";

import dynamic from "next/dynamic";
import {
    blogCollection,
    pressCollection,
    settingsCollection,
    contactCollection,
    newsletterCollection
} from "@/admin/collections";

const FireCMSFirebaseApp = dynamic(
    () => import("@firecms/firebase").then(mod => mod.FireCMSFirebaseApp),
    { ssr: false }
);

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

export default function AdminPage() {
    return (
        <div className="h-screen w-full bg-white z-[100] fixed top-0 left-0 overflow-auto">
            <FireCMSFirebaseApp
                name="Dinesh Admin"
                basePath="admin"
                collections={[
                    blogCollection,
                    pressCollection,
                    settingsCollection,
                    contactCollection,
                    newsletterCollection
                ]}
                firebaseConfig={firebaseConfig}
                authenticator={async ({ user }: any) => {
                    console.log("Allowing access to", user?.email);
                    return true;
                }}
            />
        </div>
    );
}





