// import { initializeApp } from "firebase/app";
// import { createUserWithEmailAndPassword, 
//     getAuth, 
//     signInWithEmailAndPassword, 
//     signOut} from "firebase/auth";
// // import { EmailAuthProvider } from "firebase/auth/web-extension";
// import { addDoc, 
//     collection, 
//     getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyDQiMngqFqCcFIU7rzhRnVgLFgfSdP7lbE",
//   authDomain: "netflix-cd060.firebaseapp.com",
//   projectId: "netflix-cd060",
//   storageBucket: "netflix-cd060.firebasestorage.app",
//   messagingSenderId: "85639650986",
//   appId: "1:85639650986:web:cb31d3ac032838af0d3ad3",
//   measurementId: "G-GWN9DDKGNT"
// };


// const app = initializeApp(firebaseConfig);
// const auth=getAuth(app);
// const db=getFirestore(app);
// const signUp=async(name,email,password)=>{
//     try{
//       const res =   await createUserWithEmailAndPassword(auth,email,password);
//       const user= res.user;
//       await addDoc(collection(db,"user",{
//         uid:user.uid,
//         name,
//         EmailAuthProvider:"local",
//         email,
//       }))
//     }catch(error){
//         console.log(error);
//         alert(error);

//     }
// }
// const login= async(email,password)=>{
//     try{
//        await  signInWithEmailAndPassword(auth,email,password)
//     }catch(error){
//         console.log(error);
//         alert(error);
//     }
// }

// const logout=()=>{
//     signOut(auth);
// }


// export {auth,db,login,signUp,logout};



// New
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyCD1V4TjcWH4n01DT6-UoJOw12Abvjy5Dk",
  authDomain: "netflix-6e4ad.firebaseapp.com",
  projectId: "netflix-6e4ad",
  storageBucket: "netflix-6e4ad.firebasestorage.app",
  messagingSenderId: "487517869735",
  appId: "1:487517869735:web:628ff3d517c89853136d82",
  measurementId: "G-S2RPYVVGTS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth=getAuth(app);
const db=getFirestore(app);

const signup=async(name,email,password)=>{
    try{
      const res =   await createUserWithEmailAndPassword(auth,email,password);
      const user= res.user;
      await addDoc(collection(db,"user"),{
        uid:user.uid,
        name,
        authProvider:"local",
        email,
      })
    }catch(error){
      console.log(error);
      toast.error(error.code.split('/')[1].split('-').join(""));

    }
}
const login= async(email,password)=>{
    try{
       await  signInWithEmailAndPassword(auth,email,password)
    }catch(error){
      console.log(error);
      toast.error(error.code.split('/')[1].split('-').join(""));
    }
}

const logout=()=>{
    signOut(auth);
}


export {auth,db,login,signup,logout};
