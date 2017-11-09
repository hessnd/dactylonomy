export default () => (
  <div className="banners">
    <span className="banner left-to-right">Dactylonomy Around The World</span>
    <span className="banner top-to-bottom">Dactylonomy Around The World</span>
    <span className="banner bottom-to-top">Dactylonomy Around The World</span>
    <span className="banner right-to-left">Dactylonomy Around The World</span>
    <style jsx>{`
      @keyframes leftToRight {
        0% {
          left: -486px;
        }
        100% {
          left: 100%;
        }
      }

      @keyframes rightToLeft {
        0% {
          left: 100%;
        }
        100% {
          left: -486px;
        }
      }

      @keyframes topToBottom {
        0% {
          top: calc(100% + 486px);
        }
        100% {
          top: 0;
        }
      }

      @keyframes bottomToTop {
        0% {
          top: 0;
        }
        100% {
          top: calc(100% + 486px);
        }
      }

      .banner {
        font-family: 'ACaslonPro';
        font-size: 2.4rem;
        font-weight: 500;
        text-align: justify;
        text-transform: uppercase;
        color: black;
        position: fixed;
        transform: translate3d(0,0,0);
        width: 486px;
        z-index: 10;

        &.left-to-right {
          top: 0;
          animation: leftToRight 10s infinite linear;
        }

        &.right-to-left {
          bottom: 0;
          animation: rightToLeft 10s infinite linear;
          transform: rotate(180deg) translate3d(0,0,0);
        }

        &.top-to-bottom {
          right: 0;
          transform: rotate(90deg);
          transform-origin: right top;
          animation: topToBottom 10s infinite linear;
        }

        &.bottom-to-top {
          left: 0;
          transform: rotate(-90deg) translate3d(0,0,0);
          transform-origin: left top;
          animation: bottomToTop 10s infinite linear;
        }
      }
    `}</style>
  </div>
)