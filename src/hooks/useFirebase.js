import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut} from "firebase/auth";
import intializeAuthentication from "../Firebase/Firebase.init";


intializeAuthentication();

const useFirebase = () =>{
    const [user, setUser] = useState({});

    //firebase auth
    const auth = getAuth();
    //firebase provider 
    const googleProvider = new GoogleAuthProvider();

    // new function 
    const googleUsingSignIn = () =>{
       return signInWithPopup(auth, googleProvider)
       
    }

    //firebase objavbar
    useEffect( () =>{
        const upsuscript = onAuthStateChanged(auth, (user)=>{
            if(user){
                setUser(user)
            }
        });
        return upsuscript;
    }, [])

    // logout system 

    const logOut = () =>{

        signOut(auth)
        .then(() => {
            setUser({})
         });
    }

    return {
        user,
        googleUsingSignIn,
        logOut,

    }
};

export default useFirebase;
