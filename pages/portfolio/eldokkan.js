import eldokkan from '/public/static/images/projects/eldokkan.png';
import Layout from '/src/Layout/Layout'
import PortfolioBanner from '/src/components/Portfolio/PortfolioBanner';


export default function coronaApp() {
    return (
        <Layout>
            <PortfolioBanner
                title="El-dokkan E-Commerce"
                image={eldokkan}
                description="El-dokkan e-commerce"
                hashBlur="UER3TY4T~q~qIVIUtQ-;_Mx]D%M__M?bM{4n"
            />
            <div className="bg-gray-700 h-64 mt-24">
                <p className="text-gray-100">
                    here project description
                </p>
            </div>

        </Layout>
    )
}
