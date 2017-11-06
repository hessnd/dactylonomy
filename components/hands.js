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
      cEuropeHover: false,
      chinaHover: false,
      japanHover: false,
      nAmericaHover: false,
      taiwanHover: false,
      otherHover: false,
    };
    this.handleHover = this.handleHover.bind(this);
  }

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

  render () {
   const bangladeshActive = this.state.bangladeshHover ? "active" : "";
   const cEuropeActive = this.state.cEuropeHover ? "active" : "";
   const chinaActive = this.state.chinaHover ? "active" : "";
   const japanActive = this.state.japanHover ? "active" : "";
   const nAmericaActive = this.state.nAmericaHover ? "active" : "";
   const taiwanActive = this.state.taiwanHover ? "active" : "";
   const otherActive = this.state.otherHover ? "active" : "";
    return (
      <div className="hands">
        <figure className="hand-wrapper" onMouseEnter={this.handleHover.bind(this, 'bangladesh')} onMouseLeave={this.handleHover.bind(this, 'bangladesh')}>
          <img src={bangladesh} className={`color ${bangladeshActive}`} alt="bangladesh" />
          <img src={bangladeshBW} className="black-white" alt="bangladesh" />
        </figure>
        <figure className="hand-wrapper" onMouseEnter={this.handleHover.bind(this, 'cEurope')} onMouseLeave={this.handleHover.bind(this, 'cEurope')}>
          <img src={centralEurope} className={`color ${cEuropeActive}`} alt="central europe" />
          <img src={centralEuropeBW} className="black-white" alt="central europe"/>
        </figure>
        <figure className="hand-wrapper" onMouseEnter={this.handleHover.bind(this, 'china')} onMouseLeave={this.handleHover.bind(this, 'china')}>
          <img src={china} className={`color ${chinaActive}`} alt="china" />
          <img src={chinaBW} className="black-white" alt="china"/>
        </figure>
        <figure className="hand-wrapper" onMouseEnter={this.handleHover.bind(this, 'japan')} onMouseLeave={this.handleHover.bind(this, 'japan')}>
          <img src={japan} className={`color ${japanActive}`} alt="japan" />
          <img src={japanBW} className="black-white" alt="japan"/>
        </figure>
        <figure className="hand-wrapper" onMouseEnter={this.handleHover.bind(this, 'nAmerica')} onMouseLeave={this.handleHover.bind(this, 'nAmerica')}>
          <img src={northAmerica} className={`color ${nAmericaActive}`} alt="north america" />
          <img src={northAmericaBW} className="black-white" alt="north america"/>
        </figure>
        <figure className="hand-wrapper" onMouseEnter={this.handleHover.bind(this, 'taiwan')} onMouseLeave={this.handleHover.bind(this, 'taiwan')}>
          <img src={taiwan} className={`color ${taiwanActive}`} alt="taiwan" />
          <img src={taiwanBW} className="black-white" alt="taiwan"/>
        </figure>
        <figure className="hand-wrapper" onMouseEnter={this.handleHover.bind(this, 'other')} onMouseLeave={this.handleHover.bind(this, 'other')}>
          <img src={other} className={`color ${otherActive}`} alt="other" />
          <img src={otherBW} className="black-white" alt="other"/>
        </figure>
        <style jsx>{`
          .hands {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
          }

          .hand-wrapper {
            cursor: pointer;
            position: relative;
            width: 100%;
            max-width: 760px;
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
      </div>
    );
  }
}
