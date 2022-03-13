import './footer.scss';
import { ReactComponent as LogoIcon } from '../../../assets/logo.svg';
import { ReactComponent as FacebookIcon } from '../../../assets/icon-facebook.svg';
import { ReactComponent as TwitterIcon } from '../../../assets/icon-twitter.svg';
import { ReactComponent as PinterestIcon } from '../../../assets/icon-pinterest.svg';
import { ReactComponent as InstagramIcon } from '../../../assets/icon-instagram.svg';
import { Link } from 'react-router-dom';

export default function Footer() {
  const footerSections = [
    {
      title: 'Features',
      links: ['Link Shortening', 'Branded Links', 'Analytics'],
    },
    { title: 'Resources', links: ['Blog', 'Developers', 'Support'] },
    {
      title: 'Company',
      links: ['About', 'Our Team', 'Careers', 'Contact'],
    },
  ];

  const socialIcons = [<FacebookIcon />, <TwitterIcon />, <PinterestIcon />, <InstagramIcon />];

  return (
    <footer className="footer">
      <section className="footer__pre">
        <h3 className="footer__pre__heading">Boost your links today</h3>

        <button className="button__cta">Get Started</button>
      </section>

      <div className="container">
        <LogoIcon className="footer__logo" />

        {footerSections.map((section, index) => {
          return (
            <section className="footer__section" key={index}>
              <h4 className="footer__section__heading">{section.title}</h4>
              {section.links.map((link, index) => {
                return (
                  <ul className="footer__section__list" key={index}>
                    <li>
                      {link === 'About' ? (
                        <Link to="/about" className="active-link">
                          {link}
                        </Link>
                      ) : (
                        <Link to="/">{link}</Link>
                      )}
                    </li>
                  </ul>
                );
              })}
            </section>
          );
        })}

        <ul className="footer__social">
          {socialIcons.map((icon, index) => {
            return (
              <li className="footer__social__icon" key={index}>
                <Link to="/" aria-label="social icon">
                  {icon}
                </Link>
              </li>
            );
          })}
        </ul>

        <p className="footer__copy">Made with ❤️ by Mahmoud Kamal © 2022</p>
      </div>
    </footer>
  );
}
