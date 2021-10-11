import ProjectsLayout from '/src/Layout/ProjectsLayout';
import coronaAppImage from '/public/static/images/projects/coronaApp.png';
import useTranslation from 'next-translate/useTranslation';

export default function coronaApp({ title, image, description, link }) {
    const { t } = useTranslation()

    return (
        <ProjectsLayout
            title={t('portfolio:coronaApp')}
            image={coronaAppImage}
            description={description}
        />
    );
}
