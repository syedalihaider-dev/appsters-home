// Shared Framer Motion presets for the Create Your App landing page.
// Premium, restrained motion — meaningful reveals, no distraction.
// All reveals are scroll-triggered with `whileInView` + `viewport={{ once: true }}`.

const EASE = [0.16, 1, 0.3, 1]; // soft, expensive-feeling ease-out

// Generic directional reveal. Use: <motion.div {...reveal('up')} />
export const reveal = (dir = 'up', delay = 0, distance = 46) => {
    const offset = {
        up: { y: distance },
        down: { y: -distance },
        left: { x: -distance },
        right: { x: distance },
        none: {},
    }[dir] || { y: distance };

    return {
        initial: { opacity: 0, ...offset },
        whileInView: { opacity: 1, x: 0, y: 0 },
        viewport: { once: true, amount: 0.25 },
        transition: { duration: 0.7, ease: EASE, delay },
    };
};

// Scale-in reveal (cards, form, media).
export const scaleIn = (delay = 0) => ({
    initial: { opacity: 0, scale: 0.92 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true, amount: 0.25 },
    transition: { duration: 0.7, ease: EASE, delay },
});

// Stagger container — children use `staggerItem`.
export const staggerContainer = (stagger = 0.12, delayChildren = 0.05) => ({
    initial: 'hidden',
    whileInView: 'show',
    viewport: { once: true, amount: 0.2 },
    variants: {
        hidden: {},
        show: { transition: { staggerChildren: stagger, delayChildren } },
    },
});

export const staggerItem = (dir = 'up', distance = 40) => {
    const offset = {
        up: { y: distance },
        down: { y: -distance },
        left: { x: -distance },
        right: { x: distance },
        scale: { scale: 0.92 },
    }[dir] || { y: distance };

    return {
        hidden: { opacity: 0, ...offset },
        show: {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            transition: { duration: 0.6, ease: EASE },
        },
    };
};

export const EASE_OUT = EASE;

/* ---------------------------------------------------------------------------
 * Mount-triggered variants — for ABOVE-THE-FOLD content (hero, lead form).
 * These use initial -> animate (fire on mount), so the critical lead-capture
 * UI can NEVER get stuck invisible waiting on a scroll/intersection callback.
 * ------------------------------------------------------------------------- */
export const mountReveal = (dir = 'up', delay = 0, distance = 46) => {
    const offset = {
        up: { y: distance }, down: { y: -distance },
        left: { x: -distance }, right: { x: distance }, none: {},
    }[dir] || { y: distance };
    return {
        initial: { opacity: 0, ...offset },
        animate: { opacity: 1, x: 0, y: 0 },
        transition: { duration: 0.7, ease: EASE, delay },
    };
};

export const mountScaleIn = (delay = 0) => ({
    initial: { opacity: 0, scale: 0.92 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.7, ease: EASE, delay },
});

export const mountStaggerContainer = (stagger = 0.12, delayChildren = 0.05) => ({
    initial: 'hidden',
    animate: 'show',
    variants: {
        hidden: {},
        show: { transition: { staggerChildren: stagger, delayChildren } },
    },
});
