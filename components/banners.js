export default () => (
  <div className="banners">
    <span className="banner left-to-right">Dactylonomy Around The World</span>
    <span className="banner top-to-bottom">Dactylonomy Around The World</span>
    <span className="banner bottom-to-top">Dactylonomy Around The World</span>
    <span className="banner right-to-left">Dactylonomy Around The World</span>
    <style jsx>
      {`
        @import './styles/variables.css';

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

        @keyframes leftToRightMedium {
          0% {
            left: -810px;
          }
          100% {
            left: 100%;
          }
        }

        @keyframes rightToLeftMedium {
          0% {
            left: 100%;
          }
          100% {
            left: -810px;
          }
        }

        @keyframes topToBottomMedium {
          0% {
            top: calc(100% + 810px);
          }
          100% {
            top: 0;
          }
        }

        @keyframes bottomToTopMedium {
          0% {
            top: 0;
          }
          100% {
            top: calc(100% + 810px);
          }
        }

        @keyframes leftToRightLarge {
          0% {
            left: -1012px;
          }
          100% {
            left: 100%;
          }
        }

        @keyframes rightToLeftLarge {
          0% {
            left: 100%;
          }
          100% {
            left: -1012px;
          }
        }

        @keyframes topToBottomLarge {
          0% {
            top: calc(100% + 1012px);
          }
          100% {
            top: 0;
          }
        }

        @keyframes bottomToTopLarge {
          0% {
            top: 0;
          }
          100% {
            top: calc(100% + 1012px);
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
          transform: translate3d(0, 0, 0);
          width: 486px;
          z-index: 10;

          @media (--medium-up) {
            font-size: 4rem;
            width: 810px;
          }

          @media (--large-up) {
            font-size: 5rem;
            width: 1012px;
          }

          &.left-to-right {
            top: 0;
            animation: leftToRight 10s infinite linear;

            @media (--medium-up) {
              animation: leftToRightMedium 10s infinite linear;
            }
            @media (--large-up) {
              animation: leftToRightLarge 10s infinite linear;
            }
          }

          &.right-to-left {
            bottom: 0;
            animation: rightToLeft 10s infinite linear 1s;
            transform: rotate(180deg) translate3d(0, 0, 0);

            @media (--medium-up) {
              animation: rightToLeftMedium 10s infinite linear 1s;
            }
            @media (--large-up) {
              animation: rightToLeftLarge 10s infinite linear 1s;
            }
          }

          &.top-to-bottom {
            right: 0;
            transform: rotate(90deg);
            transform-origin: right top;
            animation: topToBottom 10s infinite linear 1.5s;

            @media (--medium-up) {
              animation: topToBottomMedium 10s infinite linear 1.5s;
            }
            @media (--large-up) {
              animation: topToBottomLarge 10s infinite linear 1.5s;
            }
          }

          &.bottom-to-top {
            left: 0;
            transform: rotate(-90deg) translate3d(0, 0, 0);
            transform-origin: left top;
            animation: bottomToTop 10s infinite linear 2s;

            @media (--medium-up) {
              animation: bottomToTopMedium 10s infinite linear 2s;
            }
            @media (--large-up) {
              animation: bottomToTopLarge 10s infinite linear 2s;
            }
          }
        }
      `}
    </style>
  </div>
);
