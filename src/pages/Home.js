import Layout from '../components/layout/Layout';
import Form from '../components/form/Form';
import Statistics from '../components/statistics/Statistics';
import CardsList from '../components/CardsList';
import { useEffect, useState } from 'react';

export default function Home() {
  const [isDone, setIsDone] = useState(false);
  const [recentLinks, setRecentLinks] = useState();

  useEffect(() => {
    // get old links from local storage
    if (localStorage['recentLinks']) {
      setRecentLinks(JSON.parse(localStorage['recentLinks']).reverse());
    }
  }, [isDone]);

  return (
    <Layout>
      <Form setIsDone={setIsDone} />
      {recentLinks && <CardsList recentLinks={recentLinks} />}
      <Statistics />
    </Layout>
  );
}
