import Banner from "./Banner";
import Services from "./Services";

const HomePage = () => {
  return (
    <div>
      <div className="">
        <Banner></Banner>
      </div>
      <div className="-mt-36">
        <Services></Services>
      </div>
    </div>
  );
};

export default HomePage;
