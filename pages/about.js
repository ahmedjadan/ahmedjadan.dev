import Layout from 'src/Layout/Layout';
import Head from '/src/components/Head';
import InfoCard from '/src/components/InfoCard';

export default function about() {
  return (
    <Layout>
      <Head
        title="About"
        description="Self-drifen Frontend Developer | Jamstack: Reactjs, Next.js, JavaScript, Tailwind CSS"

        image="/static/meta.png"
      />
      <InfoCard />
    </Layout>
  );
}
