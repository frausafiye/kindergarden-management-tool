import { Link } from "react-router-dom";

export const LoginButton = ({ type, setFormData }) => {
  return (
    <>
      {type === "submit" ? (
        <button type="submit" value="Login" className="next btn">
          Login
        </button>
      ) : type === "cancel" ? (
        <Link to="/">
          <button className="cancel btn">Cancel</button>
        </Link>
      ) : type === "explore" ? (
        <button
          type="submit"
          value="Try it"
          className="submit btn explore"
          id="explore"
          onClick={() => {
            console.log(process.env.REACT_APP_EXPLORE_ACCOUNT_EMAIL);
            setFormData({
              email: process.env.REACT_APP_EXPLORE_ACCOUNT_EMAIL,
              password: process.env.REACT_APP_EXPLORE_ACCOUNT_PASSWORD,
            });
          }}
        >
          Just explore it
        </button>
      ) : null}
    </>
  );
};
