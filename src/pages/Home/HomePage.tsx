import HomeDashboard from "@/components/HomeDashboard";
import "./HomePage.css";
import HowItWorks from "@/components/HowItWorks";
import FrequentQuestion from "@/components/FrequentQuestion";
import Contact from "@/components/Contact";
import Review from "@/components/Review";
import MostCommon from "@/components/MostCommon";
import ResourceCenter from "@/components/ResourceCenter";
import Footer from "@/components/Footer";

const HomePage = () => {

    return (
        <>
            <HomeDashboard/>
            <HowItWorks/>
            <ResourceCenter/>
            <MostCommon/>
            <Review/>
            <Contact/>
            <FrequentQuestion/>
            <Footer/>
        </>
    )
}
export default HomePage;