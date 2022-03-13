import './about.scss';
import { ReactComponent as GitIcon } from '../../assets/icon-github.svg';
import { ReactComponent as LinkedinIcon } from '../../assets/icon-linkedin.svg';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <section aria-label="About" className="about">
      <div className="container">
        <h2 className="about__heading">About Me!</h2>
        <p className="about__text">Created by Mahmoud Kamal you can follow me </p>

        <ul className="about__links">
          <li>
            <a href="https://github.com/imMahmoudKamal" target="_blank" className="about__links__link">
              <GitIcon />
              <span className="visually-hidden">Follow me on github</span>
            </a>
          </li>

          <li>
            <a href="https://www.linkedin.com/in/immahmoudkamal/" target="_blank" className="about__links__link">
              <LinkedinIcon />
              <span className="visually-hidden">Follow me on linkedin</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
