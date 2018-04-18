import Layout from 'components/layout';
import Banners from 'components/banners';
import Hand from 'components/hand';

import bangladeshBW from 'static/hands/bangladesh/BANGLADESH_BW.gif';
import bangladesh from 'static/hands/bangladesh/BANGLADESH.gif';
import centralEuropeBW from 'static/hands/central-europe/C_EUROPE_BW.gif';
import centralEurope from 'static/hands/central-europe/C_EUROPE.gif';
import chinaBW from 'static/hands/china/CHINA_BW.gif';
import china from 'static/hands/china/CHINA.gif';
import japanBW from 'static/hands/japan/JAPAN_BW.gif';
import japan from 'static/hands/japan/JAPAN.gif';
import northAmericaBW from 'static/hands/north-america/NA_BW.gif';
import northAmerica from 'static/hands/north-america/NA.gif';
import taiwanBW from 'static/hands/taiwan/TAIWAN_BW.gif';
import taiwan from 'static/hands/taiwan/TAIWAN.gif';
import otherBW from 'static/hands/other/Other_BW.gif';
import other from 'static/hands/other/Other.gif';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      regions: [
        {
          order: 0,
          name: 'bangladesh',
          color: '#ffc74f',
          colorHand: bangladesh,
          bwHand: bangladeshBW,
        },
        {
          order: 1,
          name: 'central europe',
          color: '#d09afc',
          colorHand: centralEurope,
          bwHand: centralEuropeBW,
        },
        {
          order: 2,
          name: 'china',
          color: '#475aeb',
          colorHand: china,
          bwHand: chinaBW,
        },
        {
          order: 3,
          name: 'japan',
          color: '#6ad4fc',
          colorHand: japan,
          bwHand: japanBW,
        },
        {
          order: 4,
          name: 'north america',
          color: '#fc92e7',
          colorHand: northAmerica,
          bwHand: northAmericaBW,
        },
        {
          order: 5,
          name: 'taiwan',
          color: '#5ae079',
          colorHand: taiwan,
          bwHand: taiwanBW,
        },
        {
          order: 6,
          name: 'other',
          color: '#f21c1c',
          colorHand: other,
          bwHand: otherBW,
        },
      ],
      xPos: '',
      yPos: '',
      scroll: '',
      cursorText: 'select the hand you count like',
    };
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.handleHandClick = this.handleHandClick.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleMouseMove(e) {
    this.setState({
      xPos: e.clientX,
      yPos: e.clientY,
    });
  }

  handleScroll() {
    this.setState({ scroll: document.documentElement.scrollTop });
  }

  handleHandClick(formActive) {
    // change the cursorText when a hand is clicked
    this.setState({ cursorText: formActive ? 'selected' : 'select the hand you count like' });
  }

  render() {
    return (
      <Layout>
        <div
          className="testing"
          aria-label={this.state.cursorText}
          onMouseMove={this.handleMouseMove}
        >
          <Banners />
          <section className="introduction">
            <p>
              Hey guys (・_・)ノ real quick, count to 10 on your fingers! (I’ll wait.) Which finger
              did you start with? Have you ever even thought about that?
            </p>
            <p>Well, I have.</p>
            <p>
              I’m asking people around the world to tell me how they count on their fingers (aka
              dactylonomy). Because everyone does it differently. And until now, there’s no real
              information on it.
            </p>
            <p>
              So, lend me a hand by selecting from the below gifs the way you count. If you don’t
              see the hand that represents how you count, please select the mystery hand &amp; give
              me the details of how you do it! I’ll really appreciate it, thank you!!
            </p>
          </section>
          <section className="hands">
            {this.state.regions.map(hand => (
              <Hand
                key={hand.order}
                name={hand.name}
                color={hand.color}
                colorHand={hand.colorHand}
                bwHand={hand.bwHand}
                onHandClick={this.handleHandClick}
              />
            ))}
          </section>
          <style jsx>
            {`
              @import './styles/variables.css';

              .introduction {
                font-family: 'ACaslonPro';
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: center;
                margin: 0 auto;
                padding: 6.5rem 2.8rem 0 2.8rem;
                color: black;
                text-align: center;
                font-size: 1.8rem;
                line-height: 1.11;
                max-width: 109.7rem;
              }

              .introduction p {
                margin: 1rem 0;
              }

              .hands {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                margin: 0 auto;
                padding: 0 2.8rem;
                max-width: 1098px;
              }
              .testing::before {
                position: absolute;
                top: ${this.state.yPos + this.state.scroll - 10}px;
                left: ${this.state.xPos + 20}px;
                color: #000;
                content: attr(aria-label);
                padding: 1rem;
                font-size: 2rem;
                z-index: 10;
                -webkit-animation: upAndDown 4s ease;
                -webkit-animation-iteration-count: infinite;
                animation: upAndDown 4s ease;
                animation-iteration-count: infinite;
              }
              @-webkit-keyframes upAndDown {
                0% {
                  top: ${this.state.yPos + this.state.scroll + 5}px;
                  transform: rotate(30deg);
                }
                50% {
                  top: ${this.state.yPos + this.state.scroll - 25}px;
                }
                100% {
                  top: ${this.state.yPos + this.state.scroll + 5}px;
                }
              }
              @keyframes upAndDown {
                0% {
                  top: ${this.state.yPos + this.state.scroll + 5}px;
                  transform: rotate(-30deg);
                  transform-origin: left center;
                }
                50% {
                  top: ${this.state.yPos + this.state.scroll - 25}px;
                  transform: rotate(30deg);
                  transform-origin: left center;
                }
                100% {
                  top: ${this.state.yPos + this.state.scroll + 5}px;
                  transform: rotate(-30deg);
                  transform-origin: left center;
                }
              }
            `}
          </style>
        </div>
      </Layout>
    );
  }
}

export default Index;
