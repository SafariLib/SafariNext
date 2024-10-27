/* eslint prefer-rest-params: 0 */
/* eslint no-inner-declarations: 0 */

// Should only accept analytics_storage
export const consent = (accept: boolean) => {
    function gtag() {
        // @ts-expect-error
        dataLayer.push(arguments);
    }

    if (accept) {
        localStorage.setItem('ga_consent', 'true');
        // @ts-expect-error
        gtag('consent', 'update', {
            ad_user_data: 'denied',
            ad_personalization: 'denied',
            ad_storage: 'denied',
            analytics_storage: 'granted',
            functionality_storage: 'denied',
            personalization_storage: 'denied',
            security_storage: 'denied',
        });
    } else {
        localStorage.setItem('ga_consent', 'false');
        // @ts-expect-error
        gtag('consent', 'update', {
            ad_user_data: 'denied',
            ad_personalization: 'denied',
            ad_storage: 'denied',
            analytics_storage: 'denied',
            functionality_storage: 'denied',
            personalization_storage: 'denied',
            security_storage: 'denied',
        });
    }
};
