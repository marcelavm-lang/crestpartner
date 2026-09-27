import Script from 'next/script'

/** LinkedIn Insight Tag — renders only when NEXT_PUBLIC_LINKEDIN_PARTNER_ID is set. */
export default function LinkedInInsight() {
  const partnerId = process.env.NEXT_PUBLIC_LINKEDIN_PARTNER_ID
  if (!partnerId || !/^\d+$/.test(partnerId)) return null

  return (
    <>
      <Script id="linkedin-insight" strategy="afterInteractive">
        {`
          window._linkedin_partner_id = "${partnerId}";
          window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
          window._linkedin_data_partner_ids.push(window._linkedin_partner_id);
          (function(l) {
            if (!l) { window.lintrk = function(a,b){ window.lintrk.q.push([a,b]) }; window.lintrk.q = []; }
            var s = document.getElementsByTagName("script")[0];
            var b = document.createElement("script");
            b.type = "text/javascript"; b.async = true;
            b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
            s.parentNode.insertBefore(b, s);
          })(window.lintrk);
        `}
      </Script>
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          alt=""
          src={`https://px.ads.linkedin.com/collect/?pid=${partnerId}&fmt=gif`}
        />
      </noscript>
    </>
  )
}
