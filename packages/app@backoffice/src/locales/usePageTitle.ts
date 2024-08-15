import { usePathname } from 'next/navigation';
import { useMemo } from 'react';

export default function usePageTitle() {
    const pathname = usePathname();
    return useMemo(
        () =>
            ({
                '/': 'Dashboard',
                '/views': 'Views',
            })[pathname],
        [pathname],
    );
}
