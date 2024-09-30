import img1 from "../../assets/images/download.webp";
const Services = () => {
  return (
    <div className="grid md:grid-cols-4 grid-cols-1 gap-4 m-4">
      <div className="card bg-base-100  shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img1} alt="Shoes" className="rounded-xl" />
        </figure>

        <div className="card-body items-center text-center">
          <h4 className="text-xl">
            A Results-Focused <br /> <strong className="">Web Design</strong>{" "}
            <br /> Company
          </h4>
          <p>
            Your website is live 24/7 and when done right can be your best
            salesperson - generating more leads, sales & growth for your
            business!
          </p>
          <div className="card-actions">
            <button className="btn btn-primary uppercase">Learn more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
