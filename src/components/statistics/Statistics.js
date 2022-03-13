import './statistics.scss';
import { ReactComponent as RecognitionIcon } from '../../assets/icon-brand-recognition.svg';
import { ReactComponent as RecordsIcon } from '../../assets/icon-detailed-records.svg';
import { ReactComponent as CustomizableIcon } from '../../assets/icon-fully-customizable.svg';

export default function Statistics() {
  const cards = [
    {
      icon: <RecognitionIcon />,
      title: 'Brand Recognition',
      text: 'Boost your brand recognition with each click. Generic linksdon’t mean a thing. Branded links help instil confidence in your content.',
    },
    {
      icon: <RecordsIcon />,
      title: 'Detailed Records',
      text: 'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.',
    },
    {
      icon: <CustomizableIcon />,
      title: 'Fully Customizable',
      text: 'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.',
    },
  ];

  return (
    <section className="statistics">
      <div className="container">
        <h2 className="statistics__heading">Advanced Statistics</h2>
        <p className="statistics__text">
          Track how your links are performing across the web with our advanced statistics dashboard.
        </p>

        <ul className="statistics__cards">
          {cards.map((card, index) => {
            return (
              <li key={index}>
                <div className="statistics__cards__item">
                  <span className="statistics__cards__icon">{card.icon}</span>
                  <h3 className="statistics__cards__heading">{card.title}</h3>
                  <p className="statistics__cards__text">{card.text}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
