export default ({ active, color }) => {
  const isActive = active ? 'active' : '';

  return (
    <form className={`form ${isActive}`}>
      <label className="label" htmlFor="origin">
        Where are you from?
      </label>
      <input className="input" type="text" name="origin" id="origin" />
      <label className="label" htmlFor="email">
        What is your email?
      </label>
      <input className="input" type="email" name="email" id="email" />
      <label className="label" htmlFor="comments">
        Comments?
      </label>
      <input className="input" type="text" name="comments" id="comments" />
      <input className="submit" type="submit" value="Submit" />
      <style jsx>
        {`
          @import './styles/variables.css';

          .form {
            display: none;
            flex-direction: column;
            width: 100%;
            max-width: 549px;
            position: relative;
            opacity: 1;
            transition: all 0.5s ease-out;
            height: 100%;

            &.active {
              display: flex;
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
          }

          .input {
            font-family: 'ACaslonPro';
            font-size: 1.6rem;
            text-align: justify;
            color: black;
            border: none;
            outline: 0;
            border-bottom: solid 0.3rem ${color};
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
};
