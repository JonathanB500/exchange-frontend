import React from "react";
import StockList from "../../components/stock-list/StockList";
import './landing-page.css'
import Footer from "../../components/footer/Footer";

type Props = {
    img: string,
    title: string,
    author: string
};
const LandingPage = () => {
  return (
  <div className="landingPage-Container">
    <div id="Center">
      <div className="landingPage-Elements">

        <h1 className="Titles">Live Data Market</h1>
        <p className="Paragraphs">Analyze currencies and stocks in real time, staying updated with the latest market trends</p>
        <h2>Crypto</h2>
        <StockList props={itemDataCoins}/>
        <h2>Stocks</h2>
        <StockList props={itemDataStock}/>
      </div>
      
    </div>
    <Footer/>
  </div>

)
};

export default LandingPage;


const itemDataCoins = [
    {
      src: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      alt: 'Breakfast',
      symbol: 'BITCOIN',
      price: 10000290239,
      volume: 1089238932893,
      coinMarketCap: 13298498438923
    },
    {
      src: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      alt: 'Breakfast',
      symbol: 'DOGCOIN',
      price: 10000290239,
      volume: 1089238932893,
      coinMarketCap: 13298498438923
    },
    {
      src: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      alt: 'Breakfast',
      symbol: 'JEVCOIN',
      price: 10000290239,
      volume: 1089238932893,
      coinMarketCap: 13298498438923
    },
  ];

  const itemDataStock = [
    {
      src: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      alt: 'Breakfast',
      symbol: 'TSL',
      price: 10000290239,
      volume: 1089238932893,
      coinMarketCap: 13298498438923
    },
    {
      src: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      alt: 'Breakfast',
      symbol: 'AMZ',
      price: 10000290239,
      volume: 1089238932893,
      coinMarketCap: 13298498438923
    },
    {
      src: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      alt: 'Breakfast',
      symbol: 'GOOL',
      price: 10000290239,
      volume: 1089238932893,
      coinMarketCap: 13298498438923
    },
  ];