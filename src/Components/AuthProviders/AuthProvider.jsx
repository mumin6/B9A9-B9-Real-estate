import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../Firebase/Firebase.config";

export const AuthContext = createContext(null);
// social auth provider
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  console.log(user)
  // create user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sign in user
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  // login with google
  const googleLogIn = () => {
    return signInWithPopup(auth, googleProvider);
  };
  // login with GitHub
  const githubLogin = () => {
    return signInWithPopup(auth, githubProvider);
  };
  //  LogOut
  const logOut = () => {
    return signOut(auth)
  }

  // observer
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  },[]);

  const allValues = { createUser, signInUser, googleLogIn, githubLogin,logOut,user };
  return (
    <AuthContext.Provider value={allValues}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
