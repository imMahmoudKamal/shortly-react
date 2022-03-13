import './header.scss';

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <h1 className="header__heading">More than just shorter links</h1>

        <p className="header__text">
          Build your brand’s recognition and get detailed insights on how your links are performing.
        </p>

        <button className="button__cta">Get Started</button>
      </div>
    </header>
  );
}
