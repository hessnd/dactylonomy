import PropTypes from 'prop-types';
import Head from 'next/head';

const Layout = ({ children }) => (
  <div className="layout">
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="id=edge" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width, shrink-to-fit=no" />
      <title>Dactylonomy</title>
    </Head>
    {children}
    <style jsx global>
      {`
        @import './styles/typography.css';

        html,
        body {
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
          cursor: url(../static/pointer/pointer.png), auto;
        }

        .layout {
          overflow-x: hidden;
          padding-bottom: 6.5rem;
        }
      `}
    </style>
  </div>
);

Layout.defaultProps = {
  children: '',
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
