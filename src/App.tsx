import './App.scss';
import Logo from './assets/LOGO.svg';
import { CartLogo } from './cart-logo.component';

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
            <Button filled />
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
        <section className="main_description"></section>
      </main>
      <footer className="footer"></footer>
    </div>
  );
};

type ButtonProps = {
  filled?: boolean;
};

const Button = ({ filled }: ButtonProps = { filled: false }) => {
  return <button className={`button ${filled && 'filled'}`}>Learn more</button>;
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
        <Button />
      </div>
    </div>
  );
};

export default App;
