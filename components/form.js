import { Component } from 'react';
import PropTypes from 'prop-types';
import firebase from 'lib/firebase';

class Form extends Component {
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
  }

  render() {
    const { name, active, color } = this.props;
    const { origin, email, comments } = this.state;
    const isActive = active ? 'active' : '';
    return (
      <form className={`form ${isActive}`}>
        <label className="label" htmlFor="origin">
          Where are you from?
          <input
            className="input"
            id="origin"
            type="text"
            name="origin"
            value={origin}
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
            value={email}
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
              value={comments}
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
              value={comments}
              onChange={this.handleChange}
            />
          </label>
        )}
        <input className="submit" type="submit" value="Submit" onClick={this.handleSubmit} />
        <style jsx>
          {`
            @import './styles/variables.css';

            .form {
              z-index: 2;
              display: flex;
              flex-direction: column;
              opacity: 0;
              visibility: hidden;
              overflow: hidden;
              width: 100%;
              max-width: 549px;
              position: relative;
              height: 0;
              padding: 0 1rem;
              box-sizing: border-box;
              transition: transform 0.5s ease-in;

              @media (--large-up) {
                height: 100%;
                position: relative;
                right: 50%;
                transform: translateX(50%);
              }

              &.active {
                height: 100%;
                opacity: 1;
                visibility: visible;
                @media (--large-up) {
                  transform: translateX(100%);
                }
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
              border-bottom: solid 0.3rem ${color};
              position: absolute;
              left: 0;
              top: 7rem;
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
};

Form.propTypes = {
  active: PropTypes.bool,
  color: PropTypes.string,
  name: PropTypes.string,
};

export default Form;
