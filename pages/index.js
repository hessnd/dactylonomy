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
      regions: {
        bangladesh: {
          order: 0,
          name: 'bangladesh',
          color: '#ffc74f',
          colorHand: bangladesh,
          bwHand: bangladeshBW,
          formActive: false,
        },
        centralEurope: {
          order: 1,
          name: 'central europe',
          color: '#d09afc',
          colorHand: centralEurope,
          bwHand: centralEuropeBW,
          formActive: false,
        },
        china: {
          order: 2,
          name: 'china',
          color: '#475aeb',
          colorHand: china,
          bwHand: chinaBW,
          formactive: false,
        },
        japan: {
          order: 3,
          name: 'japan',
          color: '#6ad4fc',
          colorHand: japan,
          bwHand: japanBW,
          formActive: false,
        },
        northAmerica: {
          order: 4,
          name: 'north america',
          color: '#fc92e7',
          colorHand: northAmerica,
          bwHand: northAmericaBW,
          formActive: false,
        },
        taiwan: {
          order: 5,
          name: 'taiwan',
          color: '#5ae079',
          colorHand: taiwan,
          bwHand: taiwanBW,
          formActive: false,
        },
        other: {
          order: 6,
          name: 'other',
          color: '#f21c1c',
          colorHand: other,
          bwHand: otherBW,
          formActive: false,
        },
      },
    };
    this.resetFormState = this.resetFormState.bind(this);
  }

  resetFormState(activeFormName) {
    const { regions } = this.state;
    // we want to update the formActive state for all hands except activeFormName
    const newRegions = Object.keys(regions).map(hand => ({
      order: regions[hand].order,
      name: regions[hand].name,
      color: regions[hand].color,
      colorHand: regions[hand].colorHand,
      bwHand: regions[hand].bwHand,
      formActive:
        regions[hand].name === activeFormName
          ? !regions[hand].formActive
          : regions[hand].formActive,
    }));

    this.setState({ regions: newRegions });
  }

  render() {
    const { regions } = this.state;
    return (
      <Layout>
        <Banners />
        <section className="introduction">
          <p>
            Hey guys (・_・)ノ real quick, count to 10 on your fingers! (I’ll wait.) Which finger
            did you start with? Have you ever even thought about that?
            <br />
            <br />
            Well, I have.
          </p>
          <p>
            I’m asking people around the world to tell me how they count on their fingers (aka
            dactylonomy). Because everyone does it differently. And until now, there’s no real
            information on it.
          </p>
          <p>
            So, lend me a hand by selecting from the below gifs the way you count. If you don’t see
            the hand that represents how you count, please select the mystery hand &amp; give me the
            details of how you do it! I’ll really appreciate it, thank you!!
          </p>
        </section>
        <section className="hands">
          {Object.keys(regions).map(hand => (
            <Hand
              key={regions[hand].order}
              name={regions[hand].name}
              color={regions[hand].color}
              colorHand={regions[hand].colorHand}
              bwHand={regions[hand].bwHand}
              formActive={regions[hand].formActive}
              resetFormState={this.resetFormState}
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
              z-index: 5;
              display: flex;
              justify-content: center;
              align-items: center;
              flex-direction: column;
              margin: 0 auto;
              padding: 0 2.8rem;
              max-width: 1098px;
            }
          `}
        </style>
      </Layout>
    );
  }
}

export default Index;
