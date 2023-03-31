import Banner from "../Components/Banner";
import Flights from "../Components/Flights";
import Footer from "../Components/Footer";
import Island from "../Components/Island";
import Navbar from "../Components/NavBar";
import Packages from "../Components/Packages";
import Testimonials from "../Components/Testimonials";

const HomePage = ({ isLoggedIn, setFetchAgain, fetchAgain }) => {
  return (
    <>
      <Navbar
        isLoggedIn={isLoggedIn}
        setFetchAgain={setFetchAgain}
        fetchAgain={fetchAgain}
      />
      <Banner />
      <Flights />
      <Packages />
      <Island />
      <Testimonials />
      <Footer />
    </>
  );
};

export default HomePage;
