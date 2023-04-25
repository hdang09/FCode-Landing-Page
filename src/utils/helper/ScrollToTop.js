import { useEffect } from 'react';

import { useRouter } from 'next/router';

export default function ScrollToTop() {
    const { pathname } = useRouter();

    useEffect(() => {
        // "document.documentElement.scrollTo" is the magic for React Router Dom v6
        document.documentElement.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant', // Optional if you want to skip the scrolling animation
        });
    }, [pathname]);

    return null;
}
