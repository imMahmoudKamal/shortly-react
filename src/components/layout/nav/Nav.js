import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as LogoIcon } from '../../../assets/logo.svg';
import './nav.scss';

export default function Nav() {
  const [showClass, setShowClass] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const menu = useRef(null);

  function menuToggle(event) {
    setShowClass(!showClass);
    event.stopPropagation();
  }

  function clickOutSide(event) {
    if (!menu.current.contains(event.target)) {
      setShowClass(false);
    }
  }

  useEffect(() => {
    if (showClass) {
      window.addEventListener('click', clickOutSide);
    } else {
      window.removeEventListener('click', clickOutSide);
    }

    return () => window.removeEventListener('click', clickOutSide);
  }, [menuVisible, showClass]);

  return (
    <nav className="nav">
      <div className="container">
        <Link to="/" className="nav__heading" aria-label="logo" href="#!">
          <LogoIcon />
        </Link>

        <button className="nav__toggler" aria-label="Menu Toggler" onClick={menuToggle}></button>

        <div
          className={`nav__links${showClass ? ' show' : ''}`}
          ref={(el) => {
            menu.current = el;
            setMenuVisible(!!el);
          }}>
          <ul>
            <li>
              <Link to="/about" className="active-link">
                About
              </Link>
            </li>
            <li>
              <Link to="/">featuers</Link>
            </li>
            <li>
              <Link to="/">pricing</Link>
            </li>
            <li>
              <Link to="/">resources</Link>
            </li>
          </ul>

          <div>
            <button>login</button>
            <button>sign up</button>
          </div>
        </div>
      </div>
    </nav>
  );
}
