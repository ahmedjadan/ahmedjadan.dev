import ahmedjadandev from '/public/static/images/projects/ahmedjadan.dev.png';
import Layout from '/src/Layout/Layout'
import PortfolioBanner from '/src/components/Portfolio/PortfolioBanner';


export default function coronaApp() {
    return (

        <Layout>
            <PortfolioBanner
                title="My Personal Website"
                image={ahmedjadandev}
                description="Frontend"
                hashBlur="L14U{Uxy4,M@xvazM{k9NTW6xMs^"
            />
        </Layout>
    );
}
