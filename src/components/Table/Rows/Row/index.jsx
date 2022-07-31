const Row = ({
  content: {
    name: { firstname, lastname },
    email,
    status,
    role,
  },
  index,
}) => {
  return (
    <tr className={index % 2 ? "bg-gray-50" : ""}>
      <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
        <img
          src="./assets/images/avatar.svg"
          alt="Avatar"
          className="mr-2 inline-block h-6 w-6 rounded-full object-cover object-center"
        />
        {firstname} {lastname}
      </td>
      <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
        {email}
      </td>
      <td
        className={`p-4 whitespace-nowrap text-sm font-normal  ${
          status === "Free"
            ? "text-blue-500"
            : status === "Busy"
            ? "text-red-500"
            : status === "On Vacation"
            ? "text-orange-500"
            : "text-gray-900"
        }`}
      >
        {status}
      </td>
      <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
        {role}
      </td>
    </tr>
  );
};

export default Row;
