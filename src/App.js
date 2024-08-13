
import React, { useContext, useEffect } from "react";
import { DataContext } from "./Components/DataProvider/DataProvider.js";
import { Type } from "./Utility/action.type.jsx";
import { auth } from "./Utility/firebase.jsx";
import Router from "./Router.js";

function App() {
  const [{ user }, dispatch] = useContext(DataContext);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: Type.SET_USER,
          user: authUser,
        });
      } else {
        dispatch({
          type: Type.SET_USER,
          user: null,
        });
      }
    });

    // Clean up subscription
    return () => unsubscribe();
  }, [dispatch]);

  return <Router/>;
}

export default App;
