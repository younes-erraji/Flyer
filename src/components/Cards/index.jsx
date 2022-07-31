import { useContext } from "react";
import ProviderContext from "../../context/ProviderContext";

import Card from "./Card";
import Modal from "../Modal";

import { MdHighlightOff, MdOutlineFilterAlt } from "react-icons/md";

const Cards = () => {
  const budgets = [
      {
        name: "Total Budget",
        price: "$85 125.00",
        theme: "gray",
        direction: "bottom",
      },
      {
        name: "Monthly Budget",
        price: "$85 125.00",
        theme: "blue",
        direction: "bottom",
      },
      {
        name: "Weekly Budget",
        price: "$85 125.00",
        theme: "gray",
        direction: "top",
      },
      {
        name: "Daily Budget",
        price: "$85 125.00",
        theme: "blue",
        direction: "top",
      },
    ],
    cards = budgets.map((budget, index) => (
      <Card key={index} budget={budget} />
    ));

  const { modalRef } = useContext(ProviderContext),
    toggleModal = () => {
      modalRef.current.classList.toggle("hidden");
    };

  return (
    <div className="w-full flex flex-col">
      <div className="w-full p-4 mb-2 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">Employee</h2>
          <span className="text-base font-normal text-gray-500">
            38 Results found
          </span>
        </div>
        <div className="flex flex-shrink-0 relative">
          <button className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full m-2 px-4 p-2.5 flex whitespace-nowrap items-center">
            Name: &nbsp; <span className="text-blue-500">Younes</span>
            <MdHighlightOff className="w-6 h-6 ml-2" />
          </button>
          <button
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full m-2 px-4"
            onClick={toggleModal}
          >
            <MdOutlineFilterAlt className="w-6 h-6" />
          </button>

          <Modal />
        </div>
      </div>
      <div className="p-4 w-full grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        {cards}
      </div>
    </div>
  );
};

export default Cards;
