import Form from 'components/form';

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

export default class Hands extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      bangladeshForm: false,
      bangladeshColor: '#ffc74f',
      cEuropeForm: false,
      cEuropeColor: '#d09afc',
      chinaForm: false,
      chinaColor: '#475aeb',
      japanForm: false,
      japanColor: '#6ad4fc',
      nAmericaForm: false,
      nAmericaColor: '#fc92e7',
      taiwanForm: false,
      taiwanColor: '#5ae079',
      otherForm: false,
      otherColor: '#f21c1c',
    };
    this.handleClick = this.handleClick.bind(this);
    this.closeForms = this.closeForms.bind(this);
  };

  closeForms() {
    this.setState({
      bangladeshForm: false,
      cEuropeForm: false,
      chinaForm: false,
      japanForm: false,
      nAmericaForm: false,
      taiwanForm: false,
      otherForm: false,
    });
  };

  handleClick(country) {
    this.closeForms();
    switch (country) {
      case 'bangladesh':
        this.setState({
          bangladeshForm: !this.state.bangladeshForm,
        });
        break;
      case 'cEurope':
        this.setState({
          cEuropeForm: !this.state.cEuropeForm,
        });
        break;
      case 'china':
        this.setState({
          chinaForm: !this.state.chinaForm,
        });
        break;
      case 'japan':
        this.setState({
          japanForm: !this.state.japanForm,
        });
        break;
      case 'nAmerica':
        this.setState({
          nAmericaForm: !this.state.nAmericaForm,
        });
        break;
      case 'taiwan':
        this.setState({
          taiwanForm: !this.state.taiwanForm,
        });
        break;
      case 'other':
        this.setState({
          otherForm: !this.state.otherForm,
        });
        break;
    };
  };

  render () {
   const bangladeshActive = this.state.bangladeshForm ? "active" : "";
   const cEuropeActive = this.state.cEuropeForm ? "active" : "";
   const chinaActive = this.state.chinaForm ? "active" : "";
   const japanActive = this.state.japanForm ? "active" : "";
   const nAmericaActive = this.state.nAmericaForm ? "active" : "";
   const taiwanActive = this.state.taiwanForm ? "active" : "";
   const otherActive = this.state.otherForm ? "active" : "";
    return (
      <section className="hands">
        <div className="region-wrapper">
          <figure className="hand-wrapper" onClick={this.handleClick.bind(this, 'bangladesh')}>
            <img src={bangladesh} className={`color ${bangladeshActive}`} alt="bangladesh" />
            <img src={bangladeshBW} className="black-white" alt="bangladesh" />
          </figure>
          <Form active={this.state.bangladeshForm} color={this.state.bangladeshColor} />
        </div>
        <div className="region-wrapper">
          <figure className="hand-wrapper" onClick={this.handleClick.bind(this, 'cEurope')}>
            <img src={centralEurope} className={`color ${cEuropeActive}`} alt="central europe" />
            <img src={centralEuropeBW} className="black-white" alt="central europe"/>
          </figure>
          <Form active={this.state.cEuropeForm} color={this.state.cEuropeColor} />
        </div>
        <div className="region-wrapper">
          <figure className="hand-wrapper" onClick={this.handleClick.bind(this, 'china')}>
            <img src={china} className={`color ${chinaActive}`} alt="china" />
            <img src={chinaBW} className="black-white" alt="china"/>
          </figure>
          <Form active={this.state.chinaForm} color={this.state.chinaColor} />
        </div>
        <div className="region-wrapper">
          <figure className="hand-wrapper" onClick={this.handleClick.bind(this, 'japan')}>
            <img src={japan} className={`color ${japanActive}`} alt="japan" />
            <img src={japanBW} className="black-white" alt="japan"/>
          </figure>
          <Form active={this.state.japanForm} color={this.state.japanColor} />
        </div>
        <div className="region-wrapper">
          <figure className="hand-wrapper" onClick={this.handleClick.bind(this, 'nAmerica')}>
            <img src={northAmerica} className={`color ${nAmericaActive}`} alt="north america" />
            <img src={northAmericaBW} className="black-white" alt="north america"/>
          </figure>
          <Form active={this.state.nAmericaForm} color={this.state.nAmericaColor} />
        </div>
        <div className="region-wrapper">
          <figure className="hand-wrapper" onClick={this.handleClick.bind(this, 'taiwan')}>
            <img src={taiwan} className={`color ${taiwanActive}`} alt="taiwan" />
            <img src={taiwanBW} className="black-white" alt="taiwan"/>
          </figure>
          <Form active={this.state.taiwanForm} color={this.state.taiwanColor} />
        </div>
        <div className="region-wrapper">
          <figure className="hand-wrapper" onClick={this.handleClick.bind(this, 'other')}>
            <img src={other} className={`color ${otherActive}`} alt="other" />
            <img src={otherBW} className="black-white" alt="other"/>
          </figure>
          <Form active={this.state.otherForm} color={this.state.otherColor} />
        </div>
        <style jsx>{`
          @import './styles/variables.css';

          .hands {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            margin: 0 2.8rem;
          }

          .region-wrapper {
            width: 100%;
            max-width: 680px;
            display: flex;
            flex-direction: column;
            align-items: center;

            @media (--large-up) {
              flex-direction: row;
            }
          }

          .hand-wrapper {
            cursor: pointer;
            position: relative;
            width: 100%;

            &:hover > .color {
              display: block;
            }
          }

          .color, .black-white {
            width: 100%;
          }

          .color {
            display: none;
            position: absolute;
            top: 0;
            left: 0;

            &.active {
              display: block;
            }
          }
        `}</style>
      </section>
    );
  }
}
