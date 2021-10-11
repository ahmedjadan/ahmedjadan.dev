import ahmedjadandev from '/public/static/images/projects/ahmedjadan.dev.png';
import ProjectsLayout from '/src/Layout/ProjectsLayout';

export default function coronaApp() {
  return (
    <ProjectsLayout
      title="My Personal Website"
      image={ahmedjadandev}
      description="Frontend"
    />
  );
}
