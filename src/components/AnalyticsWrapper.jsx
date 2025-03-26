import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView } from '../lib/analytics';

export default function AnalyticsProvider({ children }) {
    const location = useLocation();

    useEffect(() => {
        // Track initial page view
        trackPageView(location.pathname);

        // Track page views on location changes
        const handleLocationChange = () => {
            trackPageView(location.pathname);
        };

        handleLocationChange();
    }, [location]);

    return <>{children}</>;
}
