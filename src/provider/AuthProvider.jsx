import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../firebase/firebase.config';
export const AuthContext = createContext(null)

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()
const gitProvider = new GithubAuthProvider()

const AuthProvider = ({children}) => {
  const [user, setUser] = useState({})
  
  const googleSignUp = () => {
    return signInWithPopup(auth, googleProvider)
  }

  const emailPasswordSignUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const emailPasswordSignIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  // TODO: add git hub sign up system
  // const githubSignUP = () => {
  //   return signInWithPopup(auth, gitProvider)
  // }

  const updateUser = userInfo => {
    return updateProfile(auth.currentUser, userInfo)
  }

  const logOut = () => {
    return signOut(auth)
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth,
        (loggedInUser) => {
          setUser(loggedInUser)
        }
      )
      return () => {
        unSubscribe()
      }
  }, [])

  const info = {
    googleSignUp,
    updateUser,
    user,
    setUser,
    logOut,
    emailPasswordSignUp,
    emailPasswordSignIn

  }
  
  return (
    <AuthContext.Provider value={info}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;