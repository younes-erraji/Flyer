import { useState, useEffect, useRef } from "react";
import ProviderContext from "./context/ProviderContext";
import axios from "axios";

import Home from "./Pages/Home";

const App = () => {
  const [users, setUsers] = useState([]),
    modalRef = useRef();

  useEffect(() => {
    axios
      .get("https://yfl-api.free.beeceptor.com/users")
      .then((response) => response.data)
      .then((response) => {
        setUsers(response.hits);
      });
  }, []);

  // useEffect(() => {
  //   document.addEventListener("click", function (e) {
  //     if (!e.target.classList.contains("modal-azer")) {
  //       if (!modalRef.current.classList.contains("hidden")) {
  //         modalRef.current.classList.add("hidden");
  //       }
  //     }
  //   });
  // }, []);

  return (
    <ProviderContext.Provider value={{ users, setUsers, modalRef }}>
      <Home />
    </ProviderContext.Provider>
  );
};

export default App;
