import ProjectsLayout from '/src/Layout/ProjectsLayout';
import eldokkan from '/public/static/images/projects/eldokkan.png';

export default function coronaApp() {
  return (
    <ProjectsLayout
      title="El-dokkan E-Commerce"
      image={eldokkan}
      description="el-dokkan e-commerce"
    />
  );
}
