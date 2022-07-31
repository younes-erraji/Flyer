import { useState, useContext, useRef } from "react";
import ProviderContext from "../../context/ProviderContext";

const Modal = () => {
  const { users, setUsers, modalRef } = useContext(ProviderContext);

  const errorRef = useRef();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState([]);
  const [role, setRole] = useState("");

  const filterUsers = () => {
    errorRef.current.textContent = "";

    if (name && email && status && role) {
      const filteredUsers = users.filter((user) => {
        const fullname = `${user.name.firstname} ${user.name.laststname}`;
        return (
          fullname.includes(name) &&
          user.email.includes(email) &&
          status.indexOf(user.status) !== -1 &&
          user.role === role
        );
      });

      setUsers([...filteredUsers]);
    } else {
      errorRef.current.textContent = "Please Fill All The Fields";
    }
  };

  const onCheck = (e) => {
    if (e.target.checked) {
      setStatus([...status, e.target.value]);
    } else {
      setStatus(status.filter((item) => item !== e.target.value));
    }
  };

  return (
    <div
      ref={modalRef}
      className="hidden lg:w-96 flex flex-col bg-gray-100 absolute top-20 right-0 rounded-lg p-6 z-10 border"
      style={{
        borderColor: "#5B6AD0",
      }}
    >
      <span ref={errorRef} className="text-red-500 font-normal"></span>
      <input
        type="text"
        name="email"
        placeholder="Name"
        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5 mb-2"
        value={name}
        onInput={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5 mb-2"
        value={email}
        onInput={(e) => setEmail(e.target.value)}
      />
      <label className="mt-2.5 mb-2">Status</label>
      <div className="flex justify-between align-center px-2.5 my-2.5">
        <input id="checkFree" type="checkbox" value="Free" onChange={onCheck} />
        <label htmlFor="checkFree">Free</label>
        <input
          id="checkOnVacation"
          type="checkbox"
          value="On Vacation"
          onChange={onCheck}
        />
        <label htmlFor="checkOnVacation">On Vacation</label>
        <input
          id="checkWorking"
          type="checkbox"
          value="Working"
          onChange={onCheck}
        />
        <label htmlFor="checkWorking">Working</label>
        <input id="checkBusy" type="checkbox" value="Busy" onChange={onCheck} />
        <label htmlFor="checkBusy">Busy</label>
      </div>
      <select
        name="role"
        placeholder="Role"
        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5 mb-2"
        value={role}
        onInput={(e) => setRole(e.target.value)}
      >
        <option hidden value="">
          Role
        </option>
        <option value="Bot Analyst">Bot Analyst</option>
        <option value="Sales Manager">Sales Manager</option>
        <option value="Broadcaster">Broadcaster</option>
        <option value="Marketer">Marketer</option>
        <option value="Analytics Admin">Analytics Admin</option>
        <option value="Bot Editor">Bot Editor</option>
        <option value="Team Editor">Team Editor</option>
        <option value="PPC Expert">PPC Expert</option>
        <option value="Team Owner">Team Owner</option>
      </select>
      <button
        className="flex w-auto self-end px-10 py-2.5 rounded-md mt-4 text-white"
        style={{
          backgroundColor: "#5B6AD0",
        }}
        onClick={filterUsers}
      >
        Filter
      </button>
    </div>
  );
};

export default Modal;
