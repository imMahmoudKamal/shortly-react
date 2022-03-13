import Card from './card/Card';

export default function CardsList({ recentLinks }) {
  return (
    <section aria-label="Your Short Links">
      <div className="container">
        {recentLinks.map((link, index) => {
          return <Card link={link} key={index} />;
        })}
      </div>
    </section>
  );
}
