import { useEffect, useState } from 'react';
import './App.scss';
import Logo from './assets/LOGO.svg';
import { CloseMenuIcon, MenuIcon } from './burger-menu.component';
import { CartLogo } from './cart-logo.component';
import { RocketLogo } from './rocket.component';

const tilesInfo = [
  {
    title: 'Move the borders of reality!',
    subtitle: "Go on a space adventure - it's possible with us!",
  },
  {
    title: 'Space is not just stars and planets',
    subtitle: 'Go on a space adventure',
  },
  {
    title: 'For those who dream of stars',
    subtitle: 'Our offer: make your dream come true',
  },
  {
    title: 'Fulfill your fantastic dreams',
    subtitle: 'Space has never been so close',
  },
] satisfies {
  title: string;
  subtitle: string;
}[];

const App = () => {
  return (
    <div className="app">
      <header className="header">
        <nav className="header_nav">
          <div className="header_nav_content">
            <a className="header_logo" href="#">
              <img alt="Home" src={Logo} />
            </a>
            <BurgerMenu />
            <HeaderMenu />
          </div>
        </nav>
        <section className="header_banner">
          <div className="header_banner_content tile_content">
            <h1 className="header_banner_title title">
              Discover the vast expanses of <span className="pink">space</span>
            </h1>
            <p className="header_banner_subtitle subtitle">
              Where the possibilities are{' '}
              <span className="yellow">endless!</span>
            </p>
            <LearnMoreButton filled />
          </div>
        </section>
      </header>
      <main className="main">
        <h2>Offers</h2>
        <section className="main_tiles">
          {tilesInfo.map(({ subtitle, title }, i) => (
            <Tile id={i} key={'tile' + i} title={title} subtitle={subtitle} />
          ))}
        </section>
        <section className="main_description">
          <h2>Embark on a space journey</h2>
          <p>
            Travelling into space is one of the most exciting and unforgettable
            adventures that can change your life forever. And if you have ever
            dreamed of exploring stars, planets and galaxies, then our company
            is ready to help you realize this dream. We offer a unique
            experience that will allow you to go on a space journey and see all
            the secrets of the universe. We guarantee that every moment in space
            will be filled with incredible impressions, excitement and new
            discoveries. Our team of professionals takes care of your safety and
            comfort so that you can fully enjoy your adventure in space. We
            offer various options for space excursions.
          </p>
          <p className="hidden_content">Well that's unfortunate</p>
          <input className="secret_agent" id="read_more" type="checkbox" />
          <label htmlFor="read_more" className="yellow read_more_button ">
            Read more
          </label>
        </section>
      </main>
      <footer className="footer">
        <RocketLogo />
        <span className="yellow">Exciting space adventure!</span>
      </footer>
    </div>
  );
};

type LearnMoreButtonProps = {
  filled?: boolean;
};

const LearnMoreButton = (
  { filled }: LearnMoreButtonProps = { filled: false },
) => {
  return (
    <button className={`learn_more_button ${filled && 'filled'}`}>
      Learn more
    </button>
  );
};

type TileProps = {
  id: number;
  title: string;
  subtitle: string;
};

const Tile = ({ id, subtitle, title }: TileProps) => {
  return (
    <div className={`tile tile-${id}`}>
      <div className="tile_content">
        <h3 className="title">{title}</h3>
        <p className="subtitle">{subtitle}</p>
        <LearnMoreButton />
      </div>
    </div>
  );
};

const HeaderMenu = () => {
  return (
    <ul className="header_menu">
      <li>
        <a className="nav_link" href="#">
          Home
        </a>
      </li>
      <li>
        <a className="nav_link" href="#">
          Products
        </a>
      </li>
      <a className="cart_logo" href="#">
        <CartLogo className="cart_logo_svg" />
      </a>
    </ul>
  );
};

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOnClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 360) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="burger_menu">
      <button className="burger_menu_button" onClick={handleOnClick}>
        {isOpen ? <CloseMenuIcon /> : <MenuIcon />}
      </button>
      {isOpen && (
        <div className="burger_menu_content">
          <HeaderMenu />
        </div>
      )}
    </div>
  );
};

export default App;
