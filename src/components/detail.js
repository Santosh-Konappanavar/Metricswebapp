import React, { useEffect, useState } from 'react';
import DOMPurify from 'dompurify';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Mydetails = () => {
  const [coin, setCoin] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();
  const { id } = params;

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const res = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`);
      setCoin(res.data);
      setIsLoading(false);
    };
    fetchData();
  }, [id]);

  return (
    <div className="detail_container">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div key={coin.id} className="home_container flex">
          <div>
            <div>
              <img src={coin.image.large} alt={coin.name} className="detailimg" />
              <h2>{coin.name}</h2>
            </div>
            <div className="alllist">
              <ul className="list">
                <li className="flex item">
                  <h3>Symbol:</h3>
                  <p>{`${coin.symbol.toUpperCase()}`}</p>
                </li>
                {coin.market_data.market_cap_rank ? (
                  <li className="flex item">
                    <h3>Market Cap Rank:</h3>
                    <p>{`${coin.market_data.market_cap_rank}`}</p>
                  </li>
                ) : null}
                {coin.genesis_date ? (
                  <li className="flex item">
                    <h3>Creation Date:</h3>
                    <p>{coin.genesis_date.toLocaleString()}</p>
                  </li>
                ) : null}
                <li className="flex item">
                  <h3>Current Price:</h3>
                  <p>{`$ ${coin.market_data.current_price.usd.toLocaleString()}`}</p>
                </li>
                <li className="flex item">
                  <h3>Market Cap:</h3>
                  <p>{`$ ${coin.market_data.market_cap.usd.toLocaleString()}`}</p>
                </li>
              </ul>
            </div>
            {coin.description && (
              <p className="descr">
                {React.createElement('div', { dangerouslySetInnerHTML: { __html: DOMPurify.sanitize(coin.description.en) } })}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Mydetails;
