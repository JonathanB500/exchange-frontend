import StockList from "../../components/stock-list/StockList";
import "./landing-page.css";
import Footer from "../../components/footer/Footer";
import Carousel from "../../components/carousel/Carousel";
import { useEffect, useState } from "react";
import Market from "../../services/Market";

const LandingPage = () => {
  const [market, setMarket] = useState({
    latest_stocks: [],
    latest_cryptos: [],
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const market = await Market.getAllMarket();
        setMarket(market);
      } catch (exception) {
        console.log(exception);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="landingPage-Container">
      <div className="Carousel">
        <div id="Carousel">
          <Carousel></Carousel>
        </div>
      </div>

      <div id="Center">
        <div className="landingPage-Elements">
          <h1 className="Titles">Live Data Market</h1>
          <p className="Paragraphs">
            Analyze currencies and stocks in real time, staying updated with the
            latest market trends
          </p>
          <h2>Stocks</h2>
          <StockList props={market.latest_stocks} type={"stock"} />
          <h2>Crypto</h2>
          <StockList props={market.latest_cryptos} type={"crypto"} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
