import PropTypes from 'prop-types';
import Form from 'components/form';

class Hand extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { resetFormState, name } = this.props;
    resetFormState(name);
  }

  render() {
    const { colorHand, bwHand, name, color, formActive } = this.props;
    const isActive = formActive ? 'active' : '';

    return (
      <div className="region-wrapper">
        <div
          className={`hands-wrapper ${isActive}`}
          tabIndex="0"
          role="button"
          onClick={this.handleClick}
          onKeyDown={this.handleClick}
        >
          <div className={`hands ${isActive}`}>
            <img src={colorHand} className={`color ${isActive}`} alt={name} />
            <img src={bwHand} className="black-white" alt={name} />
          </div>
        </div>
        <Form name={name} active={formActive} color={color} />
        <style jsx>
          {`
            @import './styles/variables.css';

            .region-wrapper {
              display: flex;
              flex-direction: column;
              flex-wrap: no-wrap;
              padding: 2rem 0;

              @media (--large-up) {
                flex-direction: row;
              }
            }

            .hands-wrapper {
              z-index: 5;
              width: 100%;
              max-width: 680px;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              padding: 2rem 1rem;
              box-sizing: border-box;
              outline-color: ${color};
              background-color: white;

              @media (--large-up) {
                transition: transform 0.5s ease-in;
                flex-direction: row;
                max-width: 1098px;
                position: relative;
                left: 50%;
                transform: translateX(-50%);
              }

              &.active {
                @media (--large-up) {
                  transform: translateX(-100%);
                }
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
  formActive: false,
};

Hand.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  colorHand: PropTypes.string,
  bwHand: PropTypes.string,
  formActive: PropTypes.bool,
  resetFormState: PropTypes.func.isRequired,
};

export default Hand;
