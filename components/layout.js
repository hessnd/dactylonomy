import Head from 'next/head';

export default ({ children }) => (
  <div className="layout">
    <Head>
      <script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-WQCBJ43');`,}}></script>
      <meta charSet='utf-8' />
      <meta httpEquiv='x-ua-compatible' content='id=edge' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width, shrink-to-fit=no' />
      <title>Dactylonomy</title>
    </Head>
    <noscript dangerouslySetInnerHTML={{__html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WQCBJ43"
    height="0" width="0" style="display:none;visibility:hidden"></iframe>`}} />
    { children }
    <style jsx global>{`
      @import './styles/typography.css';

      html, body {
        height: 100%;
        width: 100%;
      }

      html {
        font-size: 62.5%;
      }

      body {
        font-size: 1.6em;
        background: white;
        margin: 0;
        -webkit-font-smoothing: antialiased;
      }

      .layout {
        overflow-x: hidden;
      }
    `}</style>
  </div>
)
