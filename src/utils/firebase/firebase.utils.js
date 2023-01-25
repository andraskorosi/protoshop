import { initializeApp } from 'firebase/app';
import { 
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore'

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

export const db = getFirestore();

export const createUserDocumentFromAuth = async(
  userAuth, 
  additionalInformation = {}
) => { //create user for db by authorization process
  if (!userAuth) return; //exit if userAuth not present
  
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef); //snapshot accesses the data if it exists in firebase
  console.log(userSnapshot)
  //if user data not exists
  //create / set the data from userAuth in my collection
  if(!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password)
}

