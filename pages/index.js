// import firebase from '../firebase'
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// import NavBar from '../components/navbar'
// import Brand from './../components/branding'

// export default function Home() {
//   const auth = getAuth();
// signInWithEmailAndPassword(auth, "test@home.com", "123456")
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     console.log(user.email)
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   }); 
//   return (
//      <div>
//        <NavBar/>
//        <Brand title="Home Page" tagline="directory app start"/>
//      </div>  
//   )
// }


// import Button from "./../components/ui/button"
// import GoogleProvider from "../components/auth/provider/google"

// import {GoogleProvider} from "components/auth/provider/google"

// export default function Home() {  
//   return (
//     <div>
//       <GoogleProvider/>
//     </div>
     
//   )
// }



// /*
//     REACT EVENT
//     REACT STATE
//     useState ---
//     use---- hook ---- function()
// */
// import {useState} from 'react'
// function Counter(props){

//   const [count, setCount] = useState(0)

//   function handleClick (e){
//     setCount(count+1)
//   }
//   return(
//     <div>
//       <div>{count}</div>
//       <button onClick={handleClick}>increment</button>
//     </div>
//   )
// }

// export default Counter

import {GoogleProvider} from "components/auth/provider/google"

function index () {
  return(
    <div>
        <GoogleProvider/>
    </div>
  )
}

export default index