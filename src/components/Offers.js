import React from "react";

const Offers = () => {
  return (
    <div id="about" className="py-16 px-[10%] md:px-[25%] mx-auto flex flex-col text-center bg-white z-10 flex-1">
      <h3 className="text-primary uppercase">our offer</h3>
      <h2 className="text-2xl md:text-4xl py-4 font-semibold font-aokupro tracking-wide">Farming for <span className="uppercase">all</span> </h2>
      <img alt="crop" src="carbon_crop-growth.png" className="w-[77px] h-[77px] mx-auto" />
      <p className="py-5 text-justify">
        We offer small investors to participate in large agricultural projects
        by using the process of tokenization — a secure and efficient way of
        investing in the agricultural sector. We are committed to democratizing
        access to investment opportunities in agriculture.
      </p>
      <h4 className="pt-2 md:pt-4 text-justify font-bold md:font-semibold">
        Our tokens are a new way to invest in farmland, offering investors the
        chance to own a share of a productive farm and earn a share of its
        profits.
      </h4>
    </div>
  );
};

export default Offers;
