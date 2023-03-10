import { createContext, useState, useEffect } from 'react';
import { createUserDocumentFromAuth, onAuthStateChangedListener } from '../utils/firebase/firebase.utils';

//value to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null
})

//actual component
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => { //on mount
    const unsubscribe = onAuthStateChangedListener((user) => {
      if(user) {
        createUserDocumentFromAuth(user)
      }   
      setCurrentUser(user);
    });

    return unsubscribe
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
