export default () => (
  <div>
    <div className="banner-wrapper">
      <span className="banner left-to-right">Dactylonomy Around The World</span>
      <span className="banner top-to-bottom">Dactylonomy Around The World</span>
      <span className="banner bottom-to-top">Dactylonomy Around The World</span>
      <span className="banner right-to-left">Dactylonomy Around The World</span>
    </div>
    <style jsx>{`
      @keyframes leftToRight {
        0% {
          left: -329px;
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
          left: -329px;
        }
      }

      @keyframes topToBottom {
        0% {
          top: calc(100% + 329px);
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
          top: calc(100% + 329px);
        }
      }

      .banner-wrapper {
        position: fixed;
        height: 100vh;
        width: 100vw;
      }

      .banner {
        font-family: 'ACaslonPro';
        font-size: 2.4rem;
        font-weight: 500;
        text-align: justify;
        color: black;
        position: absolute;
        width: 329px;
      }

      .left-to-right {
        top: 0;
        animation: leftToRight 10s infinite linear;
      }

      .right-to-left {
        bottom: 0;
        animation: rightToLeft 10s infinite linear;
        transform: rotate(180deg);
      }

      .top-to-bottom {
        right: 0;
        transform: rotate(90deg);
        transform-origin: right top;
        animation: topToBottom 10s infinite linear;
      }

      .bottom-to-top {
        left: 0;
        transform: rotate(-90deg);
        transform-origin: left top;
        animation: bottomToTop 10s infinite linear;
      }
    `}</style>
  </div>
)