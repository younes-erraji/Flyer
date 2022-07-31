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
      .then((response) => setUsers(response.hits));
  }, []);

  const filterTable = (column) => {
    const sortedUsers = users.sort((firstUser, secondUser) => {
      let first, second;
      if (column === "name") {
        first = `${firstUser.name.firstname.toLowerCase()} ${firstUser.name.lastname.toLowerCase()}`;
        second = `${secondUser.name.firstname.toLowerCase()} ${secondUser.name.lastname.toLowerCase()}`;
      } else {
        first = firstUser[column].toLowerCase();
        second = secondUser[column].toLowerCase();
      }

      if (first < second) {
        return -1;
      } else if (first > second) {
        return 1;
      } else {
        return 0;
      }
    });

    setUsers([...sortedUsers]);
  };

  return (
    <ProviderContext.Provider
      value={{ users, setUsers, modalRef, filterTable }}
    >
      <Home />
    </ProviderContext.Provider>
  );
};

export default App;
