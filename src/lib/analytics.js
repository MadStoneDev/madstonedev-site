import Analytics from '@analytics/google-analytics';

const analytics = Analytics({
    app: 'your-app-name',
    plugins: [
        {
            name: 'google-analytics',
            measurementIds: ['G-941WTWYYVW'], // Replace with your GA4 measurement ID
            init: ({ config }) => {
                // Load Google Analytics script
                if (typeof window !== 'undefined') {
                    const script = document.createElement('script');
                    script.src = `https://www.googletagmanager.com/gtag/js?id=${config.measurementIds[0]}`;
                    script.async = true;
                    document.head.appendChild(script);

                    window.dataLayer = window.dataLayer || [];
                    function gtag() {
                        dataLayer.push(arguments);
                    }
                    window.gtag = gtag;
                    gtag('js', new Date());
                    gtag('config', config.measurementIds[0], {
                        send_page_view: false // We'll handle this manually
                    });
                }
            },
            page: ({ payload }) => {
                if (typeof window !== 'undefined') {
                    window.gtag('event', 'page_view', {
                        page_title: payload.title,
                        page_location: payload.url,
                        page_path: payload.path
                    });
                }
            },
            track: ({ payload }) => {
                if (typeof window !== 'undefined') {
                    window.gtag('event', payload.event, payload.properties);
                }
            }
        }
    ]
});

export const trackPageView = (url) => {
    analytics.page({
        url,
        path: url,
        title: document.title
    });
};

export const trackEvent = (eventName, properties = {}) => {
    analytics.track(eventName, properties);
};

export default analytics;