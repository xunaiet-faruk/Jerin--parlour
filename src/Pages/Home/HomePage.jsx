import { Banner } from "../../Component/Banner/Banner";
import Appoinment from "../../Component/HomepageData/Appoinment";
import ClientSay from "../../Component/HomepageData/ClientSay";
import Footer from "../../Component/HomepageData/Footer";
import Profosinal from "../../Component/HomepageData/Profosinal";
import Scelded from "../../Component/HomepageData/Scelded";

import Services from "../../Component/HomepageData/Services";
import Testominals from "../../Component/HomepageData/Testominals";




const HomePage = () => {
    return (
        <div>
        <Banner/>
       <ClientSay/>
       <Services/>
       <Profosinal/>
        <Scelded/>
        <Testominals/>
        <Appoinment/>
        <Footer/>
        </div>
    );
};

export default HomePage;