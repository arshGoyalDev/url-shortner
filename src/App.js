import { Header, Hero } from "./components/sections";

const App = () => {
  return (
    <main className="bg-neutral-grayTwo">
      <div className="bg-white pb-36">
        <Header />
        <Hero />
      </div>
    </main>
  );
};

export default App;
