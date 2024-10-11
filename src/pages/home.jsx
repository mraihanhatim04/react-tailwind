import MyNavbar from "../components/Fragments/MyNavbar";

const HomePage = () => {
  return (
    <>
      <div className="">
        <MyNavbar />
        <div>
          <h1 className="text-3xl font-semibold text-slate-500 flex justify-center mt-52">
            Home Page
          </h1>
        </div>
      </div>
    </>
  );
};

export default HomePage;
