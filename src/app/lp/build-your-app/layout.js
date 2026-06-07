export const metadata = {
    title: "Build Your App - Appsters",
    description: "Get a custom, production-ready app built by experts. Engineered to scale, designed to convert, and shipped on time.",
    openGraph: {
        title: 'Build Your App - Appsters',
        description: 'Get a custom, production-ready app built by experts. Engineered to scale, designed to convert, and shipped on time.',
        url: '/lp/build-your-app',
        siteName: 'Appsters',
        locale: 'en_US',
        type: 'website',
    },
    alternates: { canonical: '/lp/build-your-app' },
    robots: {
        index: true,
        follow: true,
        nocache: true,
    },
}

export default function BuildYourAppLayout({ children }) {
    return (
        <>
            {children}
        </>
    );
}
