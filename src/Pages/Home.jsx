import Aside from "../components/Partials/Aside";
import Header from "../components/Partials/Header";

import Cards from "../components/Cards";
import Table from "../components/Table";

const Home = () => {
  return (
    <>
      <Aside />
      <div className="bg-gray-50 relative overflow-y-auto lg:ml-64 flex flex-wrap overflow-hidden bg-white">
        <Header />
        {/* <div className="w-full mt-16 grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4"> */}
        <Cards />

        <Table />
        {/* </div> */}
      </div>
    </>
  );
};

export default Home;
