import React from "react";

const Offers = () => {
  return (
    <div className="py-16 px-[25%] mx-auto flex flex-col text-center bg-white z-10 pb-36">
      <h3 className="text-primary uppercase">our offer</h3>
      <h2 className="text-4xl uppercase py-4 font-semibold font-aokupro tracking-wide">Farming for all</h2>
      <img alt="crop" src="carbon_crop-growth.png" className="w-[77px] h-[77px] mx-auto" />
      <p className="py-5">
        We offer small investors to participate in large agricultural projects
        by using the process of tokenization — a secure and efficient way of
        investing in the agricultural sector. We are committed to democratizing
        access to investment opportunities in agriculture.
      </p>
      <h4 className="pt-4 font-semibold">
        Our tokens are a new way to invest in farmland, offering investors the
        chance to own a share of a productive farm and earn a share of its
        profits.
      </h4>
    </div>
  );
};

export default Offers;
