import { Header, Hero } from "./components/sections";

import UrlShortener from "./components/UrlShortener";

const App = () => {
  return (
    <main className="bg-neutral-grayTwo min-h-[300vh]">
      <div className="bg-white pb-36">
        <Header />
        <Hero />
      </div>

      <UrlShortener />
    </main>
  );
};

export default App;
