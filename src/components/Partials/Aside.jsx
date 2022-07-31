import Links from "./Links";

import Child from "../../assets/images/Child.jpg";

const Aside = () => {
  return (
    <aside
      className="sidebar bg-gray-200 fixed z-20 h-full top-0 left-0 flex flex-shrink-0 flex-col w-64"
      style={{ backgroundColor: "F1F2F6" }}
    >
      <div className="heading p-4 max-w-sm flex items-center space-x-4">
        <div className="shrink-0">
          <img
            className="h-12 w-12 rounded-full object-cover object-center"
            src={Child}
            alt="Logo"
          />
        </div>
        <div>
          <p className="text-slate-500">Welcome back</p>
          <div className="text-xl font-medium text-black">Drax</div>
        </div>
      </div>
      <div className="links relative flex-1 flex flex-col min-h-0 pt-0">
        <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
          <div className="flex-1 px-3 divide-y space-y-1">
            <Links />
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Aside;
