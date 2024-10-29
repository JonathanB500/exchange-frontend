import * as React from 'react';
import './StockList.css'
import BasicImage from '../basic-image/BasicImage';
type MarketData = {
    alt: string,
    src: string,
    symbol: string,
    price: number,
    volume: number,
    coinMarketCap:number
};

type Props = {
  props: MarketData[]
}


export default function StockList({props}: Props) {
  return (
    <div className='container'>
      <div className='elements'>
        <table>
          <tbody>
            <tr>
              <th></th>
              <th>Symbol</th>
              <th>Price</th>
              <th>Volume</th>
              <th>Coin Market Cap</th>
            </tr>
            {props.map(prop => {
              return(

                <tr key={prop.symbol}> 

                  <td  id='basicImage'>
                    <BasicImage alt={prop.alt} src={prop.src} />
                  </td>
                  <td >
                    <a href="/home">
                      {prop.symbol}
                    </a>
                  </td>
                  <td>
                      ${prop.price}
                  </td>
                  <td>
                      ${prop.volume}
                  </td>
                  <td>
                      ${prop.coinMarketCap}
                  </td>
 
                </tr>
              )
            })}
          </tbody>

        </table>
      </div>
    </div>

  );
}

