import {
  getAuth,
  signOut,
  signInWithPopup,
  GoogleAuthProvider
} from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnODxmR-518-jNZhGb2ZKQLj6AzTY0vbA",
  authDomain: "tasneem-sahat.firebaseapp.com",
  projectId: "tasneem-sahat",
  storageBucket: "tasneem-sahat.appspot.com",
  messagingSenderId: "844136519718",
  appId: "1:844136519718:web:5bf90465c949191b65aee7"
};

initializeApp(firebaseConfig);

export default function Login(props) {
  // let [props.singedInUser, props.setsingedInUser] = useState({
  //   isSignedIn: false,
  //   name: "",
  //   email: "",
  //   photo: ""
  // });

  function loginHandle() {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // The signed-in user info.
        const user = result.user;
        // ...
        props.setsingedInUser({
          isSignedIn: true,
          name: user.displayName,
          email: user.email,
          photo: user.photoURL
        });
        props.setIsLoggedIn(true);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
        console.log(errorMessage, email, credential);
      });
  }
  function logoutHandle() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
    props.singedInUser = {
      isSignedIn: false,
      name: "",
      email: "",
      photo: ""
    };
    props.setIsLoggedIn(false);
  }

  return (
    <div className="login">
      {props.isLoggedIn ? (
        <div>
          <div
            style={{
              backgroundColor: "lightgray",
              margin: "30px 20px",
              padding: "20px 10px",
              border: "3px solid black"
            }}
          >
            <h1>Name: {props.singedInUser.name}</h1>
            <h2>Email: {props.singedInUser.email}</h2>
            <img
              alt=""
              style={{ borderRadius: "50%" }}
              src={props.singedInUser.photo}
            ></img>
          </div>

          <button onClick={logoutHandle}>Sign Out</button>
        </div>
      ) : (
        <button onClick={loginHandle}>Sign In</button>
      )}
    </div>
  );
}
