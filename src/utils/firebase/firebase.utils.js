import { initializeApp } from 'firebase/app';
import { 
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDCWnyKdEp7JAsdsnb42uA_J4LMFxhouUw',
  authDomain: 'protoshop-db.firebaseapp.com',
  projectId: 'protoshop-db',
  storageBucket: 'protoshop-db.appspot.com',
  messagingSenderId: '463220118795',
  appId: '1:463220118795:web:475a647690a60d8b39be0e'
};
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const addCollectionAndDocuments = async (collectionKey, objectstoAdd, field) => {
  const collectionRef = collection(db, collectionKey);
  //a db transaction has several steps (objectsToAdd)
  //if the batch fails somewhere every data returns back to the default values
  const batch = writeBatch(db);

  objectstoAdd.forEach((object) => {
    const docRef = doc(collectionRef, object[field].toLowerCase()); //cRef points to the object, and object field is the key
    batch.set(docRef, object);
  });
  await batch.commit(); //fires off batch
  console.log('done')
}

//helper functions minimize the impact that 3rd party libraries (ex: firebase) have on the codebase
export const getCategoriesAndDocuments = async() => {
  const collectionRef = collection(db, 'categories');
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc
  }, {});

  return categoryMap;
}

export const createUserDocumentFromAuth = async(
  userAuth, 
  additionalInformation = {}
) => { //create user for db by authorization process
  if (!userAuth) return; //exit if userAuth not present
  
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef); //snapshot accesses the data if it exists in firebase
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

//sign up
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password)
}
//sign in
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password)
}
//sign out
export const signOutUser = async () => await signOut(auth);
//ongoing listener needs to be cleaned up after usage
export const onAuthStateChangedListener = (callback) => 
  onAuthStateChanged(auth, callback);
