import coronaAppImage from '/public/static/images/projects/coronaApp.png';
import useTranslation from 'next-translate/useTranslation';
import Layout from '/src/Layout/Layout'
import PortfolioBanner from '/src/components/Portfolio/PortfolioBanner';


export default function coronaApp({ title, image, description, link }) {
    const { t } = useTranslation()

    return (
        <Layout>
            <>
                <PortfolioBanner
                    title={t('portfolio:coronaApp')}
                    image={coronaAppImage}
                    description={description}
                    hashBlur="U04B:]WE4.oys.bIWUe.nia#W.aynioKW;S3"
                />
            </>
        </Layout>
    );
}
