import { useState, useEffect, useContext } from "react";
import styles from "./styles/Login.module.scss";
import axios from "axios";
import { MyContext } from "../../Container";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { AlignedContainer } from "../../components/ui/AlignedContainer";
import { LoginButtons } from "./LoginButtons";

export default function Login(props) {
  const { isLogin, setIsLogin, setUser, user, authCheckHandler } =
    useContext(MyContext);
  let history = useHistory();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (isLogin && user) {
      user.role === "Manager"
        ? history.push({ pathname: "/mpage" })
        : history.push({ pathname: "/tpage" });
    }
  }, [isLogin]);

  const submitForm = (e) => {
    e.preventDefault();
    axios({
      method: "POST",
      withCredentials: true,
      url: `${process.env.REACT_APP_BASE_URL}/users/login`,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: formData,
    })
      .then((response) => {
        if (response.data.success) {
          setUser(response.data.user);
          setIsLogin(true);
          localStorage.setItem("user", JSON.stringify(response.data.user));
        } else {
          console.log(response);
        }
      })
      .catch((err) => {
        authCheckHandler(err);
      });
  };

  return (
    <AlignedContainer>
      <div className={styles.fcontainer}>
        <form className={styles.loginContainer} onSubmit={submitForm}>
          <div className="reg">Login to Account!</div>

          <div className={styles.loginBox}>
            <div className="inputBox">
              <label className="details">E-mail</label>
              <br />
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div className="inputBox">
              <label className="details">Password</label>
              <br />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
            </div>
            <br />
            <LoginButtons setFormData={setFormData} />
          </div>
        </form>
      </div>
    </AlignedContainer>
  );
}
