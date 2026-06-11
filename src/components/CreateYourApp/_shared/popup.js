// Tiny decoupled bus so any CTA button can open the global estimate popup
// without prop-drilling through Header / Banner / CTA sections.

export const OPEN_ESTIMATE_EVENT = 'appsters:openEstimate';

export const openEstimatePopup = () => {
    if (typeof window !== 'undefined') {
        window.dispatchEvent(new Event(OPEN_ESTIMATE_EVENT));
    }
};
