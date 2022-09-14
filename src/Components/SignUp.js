import "./SignUp.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../FirebaseConfig";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = () => {
    createUserWithEmailAndPassword(auth, email, password).then(
      (userCredential) => {
        const user = userCredential.user;

        updateProfile(user, {
          displayName: username,
        }).then(() => {
          console.log(user.displayName);
          setUsername("");
          setEmail("");
          setPassword("");
        });
      }
    );
  };

  return (
    <div className="sign-up">
      <div className="sign-up-wrap">
        <Link to="/" className="back">
          Back
        </Link>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button onClick={() => signUp()}>Sign Up</button>
      </div>
    </div>
  );
};

export default SignUp;
