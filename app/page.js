import link from "next/link";
const HomePage = () => {
  return (
    <div>
      <h1 className="text-7xl" >
        HomePage
      </h1>
      <link href='/about' className="text-2xl">
        about Page
        </link>
    </div>
  );
};

export default HomePage;
