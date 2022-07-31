import { useContext } from "react";
import ProviderContext from "../../context/ProviderContext";

const Modal = () => {
  const { modalRef } = useContext(ProviderContext);

  return (
    <div
      ref={modalRef}
      className="hidden lg:w-96 flex flex-col bg-gray-100 absolute top-20 right-0 rounded-lg p-6 border"
    >
      <input
        type="text"
        name="email"
        placeholder="Name"
        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5 mb-2"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5 mb-2"
      />
      <label className="mt-2.5 mb-2">Status</label>
      <div className="flex justify-between align-center px-2.5 my-2.5">
        <input type="checkbox" />
        <label>Free</label>
        <input type="checkbox" />
        <label>On vacation</label>
        <input type="checkbox" />
        <label>Working</label>
        <input type="checkbox" />
        <label>Busy</label>
      </div>
      <select
        name="role"
        placeholder="Role"
        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5 mb-2"
      >
        <option disabled>Role</option>
        <option>Bot Analyst</option>
        <option>Sales Manager</option>
        <option>Broadcaster</option>
        <option>Marketer</option>
        <option>Analytics Admin</option>
        <option>Bot Editor</option>
        <option>Team Editor</option>
        <option>PPC Expert</option>
        <option>Team Owner</option>
      </select>
      <button
        className="flex w-auto self-end px-10 py-2.5 rounded-md mt-4 text-white"
        style={{
          backgroundColor: "#5B6AD0",
        }}
      >
        Filter
      </button>
    </div>
  );
};

export default Modal;
