import PropTypes from 'prop-types';
import Form from 'components/form';

class Hand extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      handActive: false,
      form: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      handActive: !this.state.handActive,
      form: !this.state.form,
    });
  }
  render() {
    const isActive = this.state.handActive ? 'active' : '';
    return (
      <div className="region-wrapper">
        <div
          className="hands-wrapper"
          tabIndex="0"
          role="button"
          onClick={this.handleClick}
          onKeyDown={this.handleClick}
        >
          <figure className={`hands ${isActive}`}>
            <img src={this.props.colorHand} className={`color ${isActive}`} alt={this.props.name} />
            <img src={this.props.bwHand} className="black-white" alt={this.props.name} />
          </figure>
        </div>
        <Form active={this.state.form} color={this.props.color} />
        <style jsx>
          {`
            @import './styles/variables.css';

            .region-wrapper {
              width: 100%;
              max-width: 680px;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              padding: 2rem 0;

              @media (--large-up) {
                flex-direction: row;
                max-width: 1098px;
              }
            }

            .hands {
              cursor: pointer;
              position: relative;
              width: 100%;
              margin: 0;
              max-width: 549px;
              transition: all 0.5s ease-out;

              &:hover > .color {
                opacity: 1;
                z-index: 2;
              }

              @media (--large-up) {
                &.active {
                  left: 0;
                }
              }
            }

            .color,
            .black-white {
              width: 100%;
            }

            .black-white {
              z-index: 1;
            }

            .color {
              opacity: 0;
              z-index: -1;
              position: absolute;
              top: 0;
              left: 0;

              &.active {
                opacity: 1;
                z-index: 2;
              }
            }
          `}
        </style>
      </div>
    );
  }
}

Hand.defaultProps = {
  name: '',
  color: '#000000',
  colorHand: '',
  bwHand: '',
};

Hand.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  colorHand: PropTypes.string,
  bwHand: PropTypes.string,
};

export default Hand;
