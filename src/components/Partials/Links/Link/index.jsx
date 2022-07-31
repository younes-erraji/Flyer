import { MdTableRows } from "react-icons/md";

const Link = ({ content, Icon, bar }) => {
  return (
    <li>
      <a
        href="#"
        className="text-base text-gray-900 font-normal rounded-lg flex justify-between items-center p-2 hover:bg-white group"
      >
        <div className="flex">
          <Icon className="w-6 h-6 text-gray-500 group-hover:text-gray-900 transition duration-75" />
          <span className="mx-3">{content}</span>
        </div>
        {bar && (
          <MdTableRows className="justify-self-end w-6 h-6 text-gray-500 group-hover:text-gray-900 transition duration-75" />
        )}
      </a>
    </li>
  );
};

export default Link;
