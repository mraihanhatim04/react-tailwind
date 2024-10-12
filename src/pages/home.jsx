import MyNavbar from "../components/Fragments/MyNavbar";

const HomePage = () => {
  return (
    <>
      <MyNavbar />

      <section className="bg-center bg-no-repeat bg-[url('public/images/jumbotron.jpeg')]">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-36 lg:py-64">
          <h1 className="mb-4 font-extrabold tracking-tight leading-none text-white "></h1>
        </div>
      </section>
    </>
  );
};

export default HomePage;
