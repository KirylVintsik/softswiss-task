import './App.scss';
import Logo from './assets/LOGO.svg';
import { CartLogo } from './cart-logo.component';

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
          <div className="header_banner_content">
            <h1 className="header_banner_title">
              Discover the vast expanses of <span className="pink">space</span>
            </h1>
            <p className="header_banner_subtitle">
              Where the possibilities are{' '}
              <span className="yellow">endless!</span>
            </p>
            <button className="filled_button">Learn more</button>
          </div>
        </section>
      </header>
      <main className="main"></main>
      <footer className="footer"></footer>
    </div>
  );
};

export default App;
