import { Header, Hero, Features } from "./components/sections";
import UrlShortener from "./components/UrlShortener";

const App = () => {
  return (
    <main className="bg-neutral-grayTwo min-h-[500vh]">
      <div className="bg-white pb-36">
        <Header />
        <Hero />
      </div>

      <UrlShortener />
      <Features />
    </main>
  );
};

export default App;
