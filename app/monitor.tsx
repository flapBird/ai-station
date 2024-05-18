"use client";
import { useEffect } from 'react';
import Script from 'next/script';

declare global {
    interface Window {
        dataLayer: any[];
        gtag: (...args: any[]) => void;
    }
}
export function GoogleAnalytics() {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.dataLayer = window.dataLayer || [];
            window.gtag = function gtag() {
                window.dataLayer.push(arguments);
            };
            window.gtag('js', new Date());
            window.gtag('config', 'G-167B4LNRZX');
        }
    }, []);

    return (
        <div style={{ display: "none" }}>
            <Script
                strategy="afterInteractive"
                src="https://www.googletagmanager.com/gtag/js?id=G-167B4LNRZX"
            />
        </div>
    );
}

export default GoogleAnalytics;