import Link from "./Link";

import { MdSearch, MdTableChart, MdDateRange, MdContactSupport, MdMapsUgc, MdLogout, MdCalendarViewMonth, MdAnalytics } from "react-icons/md";

const Links = () => {
  return (
    <ul className="space-y-2 pb-2">
      <Link content="Search" Icon={MdSearch} bar={true} />
      <Link content="Data Table" Icon={MdTableChart} bar={true} />
      <Link content="Product" Icon={MdCalendarViewMonth} bar={true} />
      <Link content="Analytics" Icon={MdAnalytics} bar={true} />
      <Link content="Calendar" Icon={MdDateRange} bar={true} />
      <Link content="Messanger" Icon={MdMapsUgc} bar={true} />
      <Link content="Crypto" Icon={MdContactSupport} bar={true} />
      <Link content="Sign Out" Icon={MdLogout} bar={false} />
    </ul>
  );
};

export default Links;
