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
    this.state = {bangladeshHover: false}
    this.handleMouseOver = this.handleMouseOver.bind(this);
    // this.handleMouseOut = this.handleMouseOut.bind(this);
  }

  handleMouseOver() {
    this.setState({
      bangladeshHover: true
    });
  }

  render () {
    return (
      <div className="hands">
        <figure className="hand-wrapper">
          {this.state.bangladeshHover ? (
            <img src={bangladesh} className="color" alt="bangladesh"/>
          ): (
            <img src={bangladeshBW} className="black-white" alt="bangladesh"/>
          )}
        </figure>
        <figure className="hand-wrapper">
          <img src={centralEuropeBW} alt="central europe"/>
        </figure>
        <figure className="hand-wrapper">
          <img src={chinaBW} alt="china"/>
        </figure>
        <figure className="hand-wrapper">
          <img src={japanBW} alt="japan"/>
        </figure>
        <figure className="hand-wrapper">
          <img src={northAmericaBW} alt="north america"/>
        </figure>
        <figure className="hand-wrapper">
          <img src={taiwanBW} alt="taiwan"/>
        </figure>
        <figure className="hand-wrapper">
          <img src={otherBW} alt="other"/>
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
          }
        `}</style>
      </div>
    );
  }
}
