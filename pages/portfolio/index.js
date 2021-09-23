import dynamic from 'next/dynamic'
import Layout from 'src/Layout/Layout';
import Head from 'src/components/Head';
const ProjectCard = dynamic(() => import('/src/components/ProjectCard'))


export default function Projects() {
  return (
    <Layout>
      <Head title="Portfolio" />


      <ProjectCard />
    </Layout>
  );
}
