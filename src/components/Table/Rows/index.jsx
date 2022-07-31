import { useContext } from "react";
import ProviderContext from "../../../context/ProviderContext";

import Row from "./Row";

const Rows = () => {
  const { users } = useContext(ProviderContext);

  return (
    <tbody className="bg-white">
      {users.map((user, index) => (
        <Row key={user.id} index={index} content={user} />
      ))}
    </tbody>
  );
};

export default Rows;
