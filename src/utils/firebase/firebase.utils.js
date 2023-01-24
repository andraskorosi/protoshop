import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  signInWithRedirect, 
  signInWithPopup, 
  GoogleAuthProvider
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDCWnyKdEp7JAsdsnb42uA_J4LMFxhouUw",
  authDomain: "protoshop-db.firebaseapp.com",
  projectId: "protoshop-db",
  storageBucket: "protoshop-db.appspot.com",
  messagingSenderId: "463220118795",
  appId: "1:463220118795:web:475a647690a60d8b39be0e"
};
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);