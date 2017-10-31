import Head from 'next/head';

export default ({ children, title = 'Dactylonomy' }) => (
  <div>
    <Head>
      <meta charSet='utf-8' />
      <meta httpEquiv='x-ua-compatible' content='id=edge' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width, shrink-to-fit=no' />
      <title>{ title }</title>
    </Head>
    { children }
    <style jsx global>{`
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
    `}</style>
  </div>
)
