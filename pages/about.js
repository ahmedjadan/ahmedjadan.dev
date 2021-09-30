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
      <p>
        I am a self-taught front-end programmer who focuses on building mobile-friendly and fast-loading websites. And I’m always happy integrating new technologies into my code, which is why my projects look so modern and stylish.
      </p>
    </Layout>
  );
}
