import React, { useEffect, useState} from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged} from 'firebase/auth';
import { auth } from '../Firebase/config';
export const UserContext = React.createContext()

export const UserContextProvider = ({children}) => {
    const [user, setUser] = useState();

    const signup = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          alert("Usuario generado correctamente!");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert (errorMessage);
          // ..
        });    }

    const login = () => {
        console.log("login!");
    }

    const logout = () => {
        
    }

    useEffect (
        () => {
            onAuthStateChanged(auth, (user) => {
                if (user) {
                  // User is signed in, see docs for a list of available properties
                  // https://firebase.google.com/docs/reference/js/firebase.User
                  const uid = user.uid;
                  setUser(user);
                  alert("User logged: ", uid)
                  // ...
                } else {
                  // User is signed out
                  // ...
                  alert("No user logged");
                }
              });
        },
        []
    )

    return (
        <UserContext.Provider value={{
            user, login, logout, signup
        }}>
            {children}
        </UserContext.Provider>
    )
}