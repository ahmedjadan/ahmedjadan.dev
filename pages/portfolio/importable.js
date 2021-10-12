import importable from '/public/static/images/projects/importable.net.png';
import useTranslation from 'next-translate/useTranslation';

import Layout from '/src/Layout/Layout'
import PortfolioBanner from '/src/components/Portfolio/PortfolioBanner';

export default function coronaApp() {
    const { t } = useTranslation()
    return (

        <Layout>
            <PortfolioBanner
                title={t("portfolio:importable")}
                image={importable}
                description="Frontend"
                hashBlur="UOQT7YM_~p-=9Hxt?aIW01Ri%MtSx]j]RjWU"
            />
        </Layout>
    );
}
