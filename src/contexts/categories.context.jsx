import { createContext, useState, useEffect } from 'react';
import SHOP_DATA from '../shop-data.js';
import { addCollectionAndDocuments, getCategoriesAndDocuments } from '../utils/firebase/firebase.utils.js';

//value to access
export const CategoriesContext = createContext({
  categoriesMap: {},
})

//actual component
export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});
  //addCollectionAndDocuments only needs to run once to set up the db in firestore from shop-data.js
  //typically this is not a frontend task
  // useEffect(() => {
  //   addCollectionAndDocuments('categories', SHOP_DATA, 'title');
  // }, [])

  useEffect(() => {
    const getCategoriesMap = async() => { //function needs to be wrapped in async if accessing db and in useEffect
      const categoryMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoryMap);
    }

    getCategoriesMap();
  }, []);
  
  const value = { categoriesMap };
  return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
}
