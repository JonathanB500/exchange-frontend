import * as React from 'react';
import './StockList.css'
import BasicImage from '../basic-image/BasicImage';
import { Avatar } from '@mui/material';
type MarketData = {
    alt: string,
    src: string,
    symbol_id: string,
    price: number,
    volume: number,
    coin_market_cap:number
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

                <tr key={prop.symbol_id}> 

                  <td  id='basicImage'>
                    <Avatar alt={prop.alt} src={prop.src} className='Avatars'/>
                  </td>
                  <td >
                    <a href={"/details/"+ prop.symbol_id}>
                      {prop.symbol_id}
                    </a>
                  </td>
                  <td>
                      ${prop.price}
                  </td>
                  <td>
                      ${prop.volume}
                  </td>
                  <td>
                      ${prop.coin_market_cap}
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

