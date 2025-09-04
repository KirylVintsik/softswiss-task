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
        <section className="header_banner"></section>
      </header>
      <main className="main"></main>
      <footer className="footer"></footer>
    </div>
  );
};

export default App;
