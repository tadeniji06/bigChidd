"use client";

import Script from "next/script";

const Adsense = () => {
	return (
		<>
			<Script
				id='google-adsense-script'
				async
				strategy='afterInteractive'
				src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6862633558772585'
				crossOrigin='anonymous'
			/>
		</>
	);
};

export default Adsense;
