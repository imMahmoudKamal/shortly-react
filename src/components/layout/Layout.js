import Nav from './nav/Nav';
import Header from './header/Header';
import Footer from './footer/Footer';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Layout({ children }) {
  const location = useLocation();

  // scroll to top smoothly
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, [location]);

  return (
    <>
      <Nav />
      <Header />
      <main className="main">{children}</main>
      <Footer />
    </>
  );
}
