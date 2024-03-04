import { useState } from "react";
import { createContext } from "react";
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth"
import app from "../firebase/firebase.config";
import { useEffect } from "react";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    // sometime when you restart automatic private route will be active
    // this problem we solution we get
    const[loading, setLoading] = useState(true);
    

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const LogOut = () => {
        setLoading(true)
        return signOut(auth)
    }


    //store or record data automatic
    useEffect(()=>{
        const unSubscribe =  onAuthStateChanged(auth, currentUser => {
            console.log('user in the auth state change', currentUser)
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            unSubscribe()
        }
    }, [])

    
    const authInfo = {
        user,
        createUser,
        signIn,
        loading,
        LogOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;