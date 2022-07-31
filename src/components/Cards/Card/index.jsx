import { MdArrowDropDown } from "react-icons/md";

const Card = ({ budget: { name, price, theme, direction } }) => {
  return (
    <div
      className={`${
        theme === "blue" ? "" : "bg-gray-100"
      } shadow rounded-lg p-4 sm:p-6 xl:p-8`}
      style={{
        backgroundColor: `${theme === "blue" ? "#5B6AD0" : ""}`,
      }}
    >
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <span
            className={`${
              theme === "blue" ? "text-white" : "text-gray-500"
            } text-base font-normal pb-3 flex items-center`}
          >
            {name} &nbsp;
            <MdArrowDropDown
              className={`w-10 h-10 ${
                theme === "blue"
                  ? "text-white"
                  : direction === "bottom"
                  ? "text-red-600"
                  : "text-cyan-500 rotate-180"
              }`}
            />
          </span>
          <h3
            className={`${
              theme === "blue" ? "text-white" : "text-gray-900"
            } text-2xl sm:text-3xl leading-none font-bold text-gray-900`}
          >
            {price}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Card;
