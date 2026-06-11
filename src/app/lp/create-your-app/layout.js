export const metadata = {
    title: "Create Your App - Appsters",
    description: "Want to create an app? Get a custom, production-ready app built by experts. Engineered to scale, designed to convert, and shipped on time.",
    openGraph: {
        title: 'Create Your App - Appsters',
        description: 'Want to create an app? Get a custom, production-ready app built by experts. Engineered to scale, designed to convert, and shipped on time.',
        url: '/lp/create-your-app',
        siteName: 'Appsters',
        locale: 'en_US',
        type: 'website',
    },
    alternates: { canonical: '/lp/create-your-app' },
    robots: {
        index: true,
        follow: true,
        nocache: true,
    },
}

export default function CreateYourAppLayout({ children }) {
    return (
        <>
            {children}
        </>
    );
}
