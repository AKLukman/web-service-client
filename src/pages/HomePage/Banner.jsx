const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div>
          <h1 className="mb-5 text-2xl md:text-3xl font-bold">
            WEB DEVELOPMENT AGENCY
          </h1>
          <h2 className="mb-5 md:text-6xl text-3xl font-bold">
            Web Design, SEO & Web Development To Grow Your Business.
          </h2>
          <button className="btn  bg-[#03a9f4]">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
