import importable from '/public/static/images/projects/importable.net.png';
import ProjectsLayout from '/src/Layout/ProjectsLayout';
import useTranslation from 'next-translate/useTranslation';

export default function coronaApp() {
    const { t } = useTranslation()
    return (
        <ProjectsLayout
            title={t("portfolio:importable")}
            image={importable}
            description="Frontend"
        />
    );
}
