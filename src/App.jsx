import Button from "./components/Button";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";

function App() {
  return (
    <>
      <Navbar />

      <Jumbotron
        title="I'm built using React Tailwind!"
        subtitle="Explore modern UI components with beautiful animations and responsive design"
        accent="blue"
      >
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap">
          <Button variant="primary">Explore</Button>
          <Button variant="secondary">Secondary</Button>
        </div>
      </Jumbotron>
    </>
  );
}

export default App;
