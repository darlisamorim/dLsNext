// Style Import

// Construct Page
function Metas() {

    return (
        <>
            {/* <!--
            Schema Microdata
            https://schema.org or https://schema.org/WebSite
            --> */}
            <meta itemprop="name" content=" | XXXXX" />
            <meta itemprop="description" content="XXXXX" />
            <meta itemprop="url" content="XXXXX" />
            <meta itemprop="image" content="XXXXX" />

            {/* <!--
            Facebook Open Graph
            https://ogp.me/
            --> */}
            <meta property="og:title" content="XXXXX" />
            <meta property="og:description" content="XXXXX" />
            <meta property="og:url" content="XXXXX" />
            <meta property="og:image" content="XXXXX" />
            <meta property="og:type" content="article" />
            <meta property="og:image:alt" content="XXXXX" />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="628" />
            <meta property="og:site_name" content="XXXXX" />
            <meta property="og:locale" content="pt_BR" />
            {/* <!-- Pay attention to these items below, because they are similar but each goal has its own attribute --> */}
            <meta property="fb:pages" content="XXXXX" />
            <meta property="og:app_id" content="XXXXX" />
            <meta property="article:author" content="XXXXX" /> {/*<!-- {FACEBOOK_PAGE_AUTHOR} -->*/}
            <meta property="article:publisher" content="XXXXX" /> {/*<!-- {FACEBOOK_PAGE} -->*/}

            {/* <!--
            Twitter Microdata
            https://developer.twitter.com/en/docs/twitter-for-websites/cards/guides/getting-started
            --> */}
            <meta property="twitter:title" content="XXXXX" />
            <meta property="twitter:description" content="XXXXX" />
            <meta property="twitter:url" content="XXXXX" />
            <meta property="twitter:image" content="XXXXX" />
            <meta property="twitter:domain" content="XXXXX" />
            <meta property="twitter:card" content="summary_large_image" />
            {/* <!-- Options Metas --> */}
            <meta name="twitter:site" content="XXXXX" />
            <meta name="twitter:creator" content="XXXXX" />

        </>
    )
}


// Export Page
export default Metas