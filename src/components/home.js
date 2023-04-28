import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCoins } from '../redux/coinslice';

const Home = () => {
  const [filterText, setFilterText] = useState('');
  const coins = useSelector(
    (state) => state.coins && state.coins.filter(
      (coin) => coin.name.toLowerCase().includes(filterText.toLowerCase()),
    ),
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCoins());
  }, [dispatch]);

  const handleChange = (event) => {
    setFilterText(event.target.value);
  };

  return (
    <div className="home_container">
      <div>
        <div className="input_container">
          <div className="input">
            <input type="text" placeholder="Filter by name" className="filter-input" value={filterText} onChange={handleChange} />
          </div>
        </div>

        <div className="coins_container flex">
          {coins && coins.map((coin) => (
            <NavLink to={`/details/${coin.id}`} key={coin.id}>
              <div className="coins flex">
                <div>
                  <img src={coin.image} alt={coin.name} className="coinimg" />
                </div>
                <div>
                  <p>{coin.name}</p>
                  <p>{coin.currentPrice}</p>

                  <p>{coin.current_price}</p>
                  {coin.price_change_percentage_24h > 0 ? (
                    <p className="coin-up">{coin.price_change_percentage_24h}</p>
                  ) : (<p className="coin-down">{coin.price_change_percentage_24h}</p>)}

                  <p><FontAwesomeIcon icon={faArrowRight} className="arrow-right" /></p>

                </div>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
