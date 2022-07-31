import { useContext } from "react";
import Rows from "./Rows";
import ProviderContext from "../../context/ProviderContext";

import { MdArrowDropDown } from "react-icons/md";

const Table = () => {
  const { filterTable } = useContext(ProviderContext);

  return (
    <div className="w-full bg-white my-4">
      <div className="flex flex-col mt-8">
        <div className="overflow-x-auto">
          <div className="align-middle inline-block min-w-full">
            <div className="shadow overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                      onClick={() => filterTable("name")}
                    >
                      Name &nbsp; <MdArrowDropDown className="inline" />
                    </th>
                    <th
                      scope="col"
                      className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                      onClick={() => filterTable("email")}
                    >
                      Email &nbsp; <MdArrowDropDown className="inline" />
                    </th>
                    <th
                      scope="col"
                      className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                      onClick={() => filterTable("status")}
                    >
                      Status &nbsp; <MdArrowDropDown className="inline" />
                    </th>
                    <th
                      scope="col"
                      className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                      onClick={() => filterTable("role")}
                    >
                      Role &nbsp; <MdArrowDropDown className="inline" />
                    </th>
                  </tr>
                </thead>

                <Rows />
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
