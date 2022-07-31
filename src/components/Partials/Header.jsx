import { useRef } from "react";
import { MdSearch, MdHighlightOff } from "react-icons/md";

const Header = () => {
  const inputRef = useRef();
  const clearInput = () => {
    inputRef.current.value = "";
  };

  return (
    <nav className="h-full w-full relative border-b border-gray-200">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="navbar flex items-center justify-between">
          <div className="flex items-center justify-start">
            <h1 className="text-2xl font-bold flex items-center lg:ml-2.5">
              <span className="self-center whitespace-nowrap">Data Table</span>
            </h1>
          </div>
          <form className="flex items-center justify-end">
            <div
              className="mt-1 relative lg:w-96 border rounded-lg"
              style={{
                borderColor: "#5B6AD0",
              }}
            >
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MdSearch className="w-5 h-5 text-gray-500" />
              </div>
              <input
                ref={inputRef}
                type="text"
                name="email"
                id="topbar-search"
                className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full px-10 p-2.5"
              />
              <div className="absolute inset-y-0 right-0 px-3 flex items-center pointer-events-none">
                <MdHighlightOff
                  className="w-5 h-5 text-gray-500"
                  onClick={clearInput}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;
