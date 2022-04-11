import { Header } from "../components/sections";

import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Shortly - The only URL Shortener you will ever need</title>
      </Helmet>

      <Header />
    </div>
  );
};

export default Home;
