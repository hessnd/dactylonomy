import { Component } from 'react';
import PropTypes from 'prop-types';
import firebase from 'lib/firebase';

class Form extends Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      hand: nextProps.name !== prevState.hand ? nextProps.name : prevState.hand,
      origin: '',
      email: '',
      comments: '',
    };
  }

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      hand: '',
      origin: '',
      email: '',
      comments: '',
    };
  }

  componentDidMount() {
    this.submissionsRef = firebase.database().ref('submissions');
  }

  handleChange(e) {
    const { value, name } = e.target;
    this.setState(() => ({
      [name]: value,
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    this.submissionsRef.push(this.state);
    this.props.resetFormState(this.props.name, true);
  }

  render() {
    const isActive = this.props.active ? 'active' : 'not-active';
    const { name } = this.props;
    return (
      <form className={`form ${this.props.handActive || this.props.active ? isActive : ''}`}>
        <label className="label" htmlFor="origin">
          Where are you from?
          <input
            className="input"
            id="origin"
            type="text"
            name="origin"
            value={this.state.origin}
            onChange={this.handleChange}
          />
        </label>
        <label className="label" htmlFor="email">
          What is your email?
          <input
            className="input"
            id="email"
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </label>
        {name === 'other' ? (
          <label className="label" htmlFor="comments">
            Can you describe in detail how you count on your fingers?
            <input
              className="input"
              id="comments"
              type="text"
              name="comments"
              value={this.state.comments}
              onChange={this.handleChange}
            />
          </label>
        ) : (
          <label className="label" htmlFor="comments">
            Comments?
            <input
              className="input"
              id="comments"
              type="text"
              name="comments"
              value={this.state.comments}
              onChange={this.handleChange}
            />
          </label>
        )}
        <input className="submit" type="submit" value="Submit" onClick={this.handleSubmit} />
        <style jsx>
          {`
            @import './styles/variables.css';

            .form {
              display: flex;
              flex-direction: column;
              max-width: 549px;
              position: relative;
              height: 100%;
              left: -15rem;
              margin: 0 2rem;
              width: 0;
              opacity: 0;
              overflow: hidden;

              &.active {
                animation: slideIn 1.5s forwards;
              }
              &.not-active {
                animation: slideOut 1.5s forwards;
              }
            }
            @keyframes slideIn {
              0% {
                width: 0;
                opacity: 0;
              }
              40% {
                opacity: 0;
                left: -6rem;
              }
              60% {
                opacity: 0;
                left: -4rem;
                width: 95%;
              }
              80% {
                opacity: 0.4;
              }
              100% {
                width: 100%;
                left: 2rem;
                opacity: 1;
              }
            }
            @keyframes slideOut {
              0% {
                opacity: 1;
                left: 2rem;
                width: 100%;
              }
              60% {
                opacity: 0;
                left: -15rem;
                width: 95%;
              }
              100% {
                opacity: 0;
                left: -15rem;
                width: 0;
              }
            }

            .label {
              font-family: 'ACaslonPro';
              font-size: 1.6rem;
              font-weight: bold;
              font-style: italic;
              text-align: justify;
              color: black;
              padding: 2.5rem 0 1.3rem 0;
              position: relative;
              height: 5rem;
            }

            .input {
              font-family: 'ACaslonPro';
              font-size: 1.6rem;
              text-align: justify;
              color: black;
              border: none;
              outline: 0;
              border-bottom: solid 0.3rem ${this.props.color};
              position: absolute;
              left: 0;
              top: 5rem;
              width: 100%;
            }

            .submit {
              font-family: 'ACaslonPro';
              font-size: 1.6rem;
              font-weight: bold;
              font-style: italic;
              text-align: justify;
              color: black;
              border: none;
              background: white;
              align-self: flex-start;
              box-sizing: border-box;
              margin-top: 2.5rem;
              cursor: pointer;
            }
          `}
        </style>
      </form>
    );
  }
}

Form.defaultProps = {
  active: false,
  color: '#000000',
  name: '',
  handActive: false,
};

Form.propTypes = {
  active: PropTypes.bool,
  color: PropTypes.string,
  name: PropTypes.string,
  handActive: PropTypes.bool,
  resetFormState: PropTypes.func.isRequired,
};

export default Form;
