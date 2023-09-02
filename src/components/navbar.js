import { CiSettings } from 'react-icons/ci';
import { IoChevronBackSharp } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  return (
    <header className="header">
      <nav className="flex navbar">
        <div
          onClick={() => navigate('/')}
          aria-hidden="true"
          className="flex navtouch"
        >
          <IoChevronBackSharp />
          <span>2023</span>
        </div>
        <div>
          <p className="flex">
            <img src="http://cryptoicons.co/images/coin_icon@2x.png" className="applogo" />
            <span>CRYPTOIST</span>
          </p>
        </div>
        <div>
          <p>
            <CiSettings />
          </p>
        </div>
      </nav>
    </header>
  );
}

export default Header;
