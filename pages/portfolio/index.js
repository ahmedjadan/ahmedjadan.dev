import dynamic from 'next/dynamic'
import Layout from 'src/Layout/Layout';
import Head from 'src/components/Head';
const FeaturedProjects = dynamic(() => import('/src/components/FeaturedProjects'))


export default function Projects() {
  return (
    <Layout>
      <Head title="Portfolio" />


      <FeaturedProjects />
    </Layout>
  );
}
