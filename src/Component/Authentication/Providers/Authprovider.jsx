import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../Firebase/Firebase.confiq";
import { GoogleAuthProvider } from "firebase/auth";
export const AuthContext =createContext(null)
const auth = getAuth(app);
const Authprovider = ({children}) => {

    const provider = new GoogleAuthProvider();
    const [user,setUser] =useState(null)
    const [loading,setLoading]=useState()

    const CreatUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)

    }

    const LoginUser =(email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }

    const Logout =() =>{
        setLoading(true)
        return signOut(auth)
    }

    const GoogleSignin = () => {
        setLoading(true)
        return signInWithPopup(auth,provider)
    }

    const UpdateuserProfile =(name,image) =>{
    
    return  updateProfile(auth.currentUser,{
        displayName :name,
        photoURL :image
    })  
    

    
    }

    useEffect(()=>{
      const unsubScribe =  onAuthStateChanged(auth,currentuse =>{
            setUser(currentuse)
            console.log("current user", currentuse);
            setLoading(false)
        })
        return () => {
            return unsubScribe();
        }
    })

 

    const Authinfo ={
        user,
        loading,
        CreatUser,
        LoginUser,
        Logout,
        UpdateuserProfile,
        GoogleSignin
    }

    return (
        <AuthContext.Provider value={Authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;