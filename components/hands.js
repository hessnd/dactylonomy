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
      bangladeshHover: false,
      bangladeshForm: false,
      bangladeshColor: '#ffc74f',
      cEuropeHover: false,
      cEuropeForm: false,
      cEuropeColor: '#d09afc',
      chinaHover: false,
      chinaForm: false,
      chinaColor: '#475aeb',
      japanHover: false,
      japanForm: false,
      japanColor: '#6ad4fc',
      nAmericaHover: false,
      nAmericaForm: false,
      nAmericaColor: '#fc92e7',
      taiwanHover: false,
      taiwanForm: false,
      taiwanColor: '#5ae079',
      otherHover: false,
      otherForm: false,
      otherColor: '#f21c1c',
    };
    this.handleHover = this.handleHover.bind(this);
    this.handleClick = this.handleClick.bind(this);
  };

  handleHover(country) {
    switch (country) {
      case 'bangladesh':
        this.setState({
          bangladeshHover: !this.state.bangladeshHover,
        });
        break;
      case 'cEurope':
        this.setState({
          cEuropeHover: !this.state.cEuropeHover,
        });
        break;
      case 'china':
        this.setState({
          chinaHover: !this.state.chinaHover,
        });
        break;
      case 'japan':
        this.setState({
          japanHover: !this.state.japanHover,
        });
        break;
      case 'nAmerica':
        this.setState({
          nAmericaHover: !this.state.nAmericaHover,
        });
        break;
      case 'taiwan':
        this.setState({
          taiwanHover: !this.state.taiwanHover,
        });
        break;
      case 'other':
        this.setState({
          otherHover: !this.state.otherHover,
        });
    };
  };

  handleClick(country) {
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
   const bangladeshActive = this.state.bangladeshHover ? "active" : "";
   const cEuropeActive = this.state.cEuropeHover ? "active" : "";
   const chinaActive = this.state.chinaHover ? "active" : "";
   const japanActive = this.state.japanHover ? "active" : "";
   const nAmericaActive = this.state.nAmericaHover ? "active" : "";
   const taiwanActive = this.state.taiwanHover ? "active" : "";
   const otherActive = this.state.otherHover ? "active" : "";
    return (
      <section className="hands">
        <div className="region-wrapper">
          <figure className="hand-wrapper" onMouseEnter={this.handleHover.bind(this, 'bangladesh')} onMouseLeave={this.handleHover.bind(this, 'bangladesh')} onClick={this.handleClick.bind(this, 'bangladesh')}>
            <img src={bangladesh} className={`color ${bangladeshActive}`} alt="bangladesh" />
            <img src={bangladeshBW} className="black-white" alt="bangladesh" />
          </figure>
          <Form active={this.state.bangladeshForm} color={this.state.bangladeshColor} />
        </div>
        <div className="region-wrapper">
          <figure className="hand-wrapper" onMouseEnter={this.handleHover.bind(this, 'cEurope')} onMouseLeave={this.handleHover.bind(this, 'cEurope')} onClick={this.handleClick.bind(this, 'cEurope')}>
            <img src={centralEurope} className={`color ${cEuropeActive}`} alt="central europe" />
            <img src={centralEuropeBW} className="black-white" alt="central europe"/>
          </figure>
          <Form active={this.state.cEuropeForm} color={this.state.cEuropeColor} />
        </div>
        <div className="region-wrapper">
          <figure className="hand-wrapper" onMouseEnter={this.handleHover.bind(this, 'china')} onMouseLeave={this.handleHover.bind(this, 'china')} onClick={this.handleClick.bind(this, 'china')}>
            <img src={china} className={`color ${chinaActive}`} alt="china" />
            <img src={chinaBW} className="black-white" alt="china"/>
          </figure>
          <Form active={this.state.chinaForm} color={this.state.chinaColor} />
        </div>
        <div className="region-wrapper">
          <figure className="hand-wrapper" onMouseEnter={this.handleHover.bind(this, 'japan')} onMouseLeave={this.handleHover.bind(this, 'japan')} onClick={this.handleClick.bind(this, 'japan')}>
            <img src={japan} className={`color ${japanActive}`} alt="japan" />
            <img src={japanBW} className="black-white" alt="japan"/>
          </figure>
          <Form active={this.state.japanForm} color={this.state.japanColor} />
        </div>
        <div className="region-wrapper">
          <figure className="hand-wrapper" onMouseEnter={this.handleHover.bind(this, 'nAmerica')} onMouseLeave={this.handleHover.bind(this, 'nAmerica')} onClick={this.handleClick.bind(this, 'nAmerica')}>
            <img src={northAmerica} className={`color ${nAmericaActive}`} alt="north america" />
            <img src={northAmericaBW} className="black-white" alt="north america"/>
          </figure>
          <Form active={this.state.nAmericaForm} color={this.state.nAmericaColor} />
        </div>
        <div className="region-wrapper">
          <figure className="hand-wrapper" onMouseEnter={this.handleHover.bind(this, 'taiwan')} onMouseLeave={this.handleHover.bind(this, 'taiwan')} onClick={this.handleClick.bind(this, 'taiwan')}>
            <img src={taiwan} className={`color ${taiwanActive}`} alt="taiwan" />
            <img src={taiwanBW} className="black-white" alt="taiwan"/>
          </figure>
          <Form active={this.state.taiwanForm} color={this.state.taiwanColor} />
        </div>
        <div className="region-wrapper">
          <figure className="hand-wrapper" onMouseEnter={this.handleHover.bind(this, 'other')} onMouseLeave={this.handleHover.bind(this, 'other')} onClick={this.handleClick.bind(this, 'other')}>
            <img src={other} className={`color ${otherActive}`} alt="other" />
            <img src={otherBW} className="black-white" alt="other"/>
          </figure>
          <Form active={this.state.otherForm} color={this.state.otherColor} />
        </div>
        <style jsx>{`
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
          }

          .hand-wrapper {
            cursor: pointer;
            position: relative;
            width: 100%;
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
