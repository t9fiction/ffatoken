/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { FaLinkedin } from "react-icons/fa";

const Team1 = () => {
  return (
    <div id="team" className="flex items-center justify-center bg-white pb-12">
      <div className="flex flex-col">
        <div className="flex flex-col">
          <div className="container max-w-7xl px-4">
            <div className="flex flex-wrap justify-center text-center mb-4">
              <div className="w-full lg:w-6/12 px-4">
                <h3 className="text-primary uppercase">meet us</h3>
                <h2 className="text-4xl py-4 font-semibold font-aokupro tracking-wider">
                  our team
                </h2>
              </div>
            </div>

            <div className="flex flex-wrap flex-row">
              <div className="w-full md:w-6/12 lg:w-[20%] mb-6 px-6 sm:px-6 lg:px-4 group">
                <div className="relative flex flex-col">
                  <a href="#" className="mx-auto b-white b-2 items-center py-8">
                    <img
                      className="md:w-48 w-[220px] border-white border-4 drop-shadow-md opacity-100 group-hover:opacity-0"
                      src="MiguelCabeza-edited.jpg"
                      alt="Miguel-Cabeza"
                    />
                  </a>
                  <div className="absolute top-0  md:px-0 w-full h-full bg-white bg-opacity-80 flex flex-col items-center justify-center duration-300 opacity-0 group-hover:opacity-100">
                    <p className="text-[12px] text-justify px-4 md:px-0 md:h-72">
                      <span className="font-bold">Miguel Cabeza, Founder:</span>{" "}
                      is an accomplished entrepreneur and business leader with
                      over 15 years of experience in telecommunication,
                      logistics, marketing and technology, including 6+ years of
                      expertise in the fast-paced world of cryptocurrency.
                      Business Administration graduate with unwavering
                      commitment to using cutting-edge technology to transform
                      and enhance people's lives. His deep understanding of the
                      crypto space, combined with his passion for innovation,
                      has allowed Miguel to successfully navigate and excel in
                      this dynamic industry.
                    </p>
                  </div>
                </div>

                <div className="text-center">
                  <h1 className="text-[#212121] opacity-100 group-hover:opacity-0">
                    Miguel Cabeza
                  </h1>

                  <div className="text-[#616161] opacity-100 group-hover:opacity-0">
                    Founder
                  </div>

                  <div
                    className="flex items-center justify-center hover:opacity-100
                                transition-opacity duration-300 space-x-3 mt-2"
                  >
                    {/* <a href="#" className="">
                      <div className=" w-8 h-8 bg-gray-50 rounded-full text-primary flex hover:text-white ease-in-out duration-300  hover:bg-primary items-center justify-center">
                        <FaFacebookF className="z-10" />
                      </div>
                    </a>

                    <a href="#" className="">
                      <div className=" w-8 h-8 bg-gray-50 rounded-full text-primary flex hover:text-white ease-in-out duration-300  hover:bg-primary items-center justify-center">
                        <FaTwitter className="z-10" />
                      </div>
                    </a> */}

                    <a
                      href="https://www.linkedin.com/in/miguel-cabeza-24618961/"
                      target="_blank"
                      className=""
                      rel="noreferrer"
                    >
                      <div className=" w-8 h-8 bg-gray-50 rounded-full text-primary flex hover:text-white ease-in-out duration-300  hover:bg-primary items-center justify-center">
                        <FaLinkedin className="z-10" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-6/12 lg:w-[20%] mb-6 px-6 sm:px-6 lg:px-4 group">
                <div className="relative flex flex-col items-center py-8">
                  <a href="#" className="mx-auto">
                    <img
                      className="lg:w-48 w-[220px] border-white border-4 drop-shadow-md opacity-100 group-hover:opacity-0"
                      src="MartínOrbegoso-edited.jpg"
                      alt="Martín-Orbegoso"
                    />
                  </a>
                  <div className="absolute top-0  md:px-0 w-full h-full bg-white bg-opacity-80 flex flex-col items-center justify-center duration-300 opacity-0 group-hover:opacity-100">
                    <p className="text-[12px] text-justify px-4 md:px-0 md:h-72">
                      <span className="font-semibold">
                        Martin Orbegoso, CEO:
                      </span>{" "}
                      is an accomplished business professional, holds a Master's
                      in Business Administration from the Pacific Business
                      School. Martin has 18 years of experience in mining
                      industry and serves as a trusted business advisor for
                      start-ups, providing valuable guidance to help young
                      companies thrive. As an independent analyst, he shares his
                      insights on financial markets, blockchain, and
                      cryptocurrencies, showcasing his broad understanding of
                      emerging trends and technologies. Martin's multifaceted
                      experience and passion for innovation have solidified his
                      reputation as a knowledgeable and influential figure in
                      the business world.
                    </p>
                  </div>
                </div>

                <div className="text-center">
                  <h1 className="text-[#212121] opacity-100 group-hover:opacity-0">
                    Martin Orbegoso
                  </h1>

                  <div className="text-[#616161] opacity-100 group-hover:opacity-0">
                    CEO
                  </div>

                  <div
                    className="flex items-center justify-center hover:opacity-100
                                transition-opacity duration-300 space-x-3 mt-2"
                  >
                    {/* <a href="#" className="">
                      <div className=" w-8 h-8 bg-gray-50 rounded-full text-primary flex hover:text-white ease-in-out duration-300  hover:bg-primary items-center justify-center">
                        <FaFacebookF className="z-10" />
                      </div>
                    </a>

                    <a href="#" className="">
                      <div className=" w-8 h-8 bg-gray-50 rounded-full text-primary flex hover:text-white ease-in-out duration-300  hover:bg-primary items-center justify-center">
                        <FaTwitter className="z-10" />
                      </div>
                    </a> */}

                    <a
                      href="https://www.linkedin.com/in/mart%C3%ADn-orbegoso-cabeza-818141203/"
                      target="_blank"
                      rel="noreferrer"
                      className=""
                    >
                      <div className=" w-8 h-8 bg-gray-50 rounded-full text-primary flex hover:text-white ease-in-out duration-300  hover:bg-primary items-center justify-center">
                        <FaLinkedin className="z-10" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-6/12 lg:w-[20%] mb-6 px-6 sm:px-6 lg:px-4 group">
                <div className="relative flex flex-col items-center py-8">
                  <a href="#" className="mx-auto">
                    <img
                      className="md:w-48 w-[220px] border-white border-4 drop-shadow-md opacity-100 group-hover:opacity-0"
                      src="MartinGavidia-edited.jpg"
                      alt="Martin-Gavidia"
                    />
                  </a>
                  <div className="absolute top-0  md:px-0 w-full h-full bg-white bg-opacity-80 flex flex-col items-center justify-center duration-300 opacity-0 group-hover:opacity-100">
                    <p className="text-[12px] text-justify px-4 md:px-0 md:h-72">
                      <span className="font-semibold">
                        Martin Gavidia, Head of Agriculture:
                      </span>{" "}
                      is a seasoned Agricultural Engineer with over 23 years of
                      experience in the field. His expertise spans the
                      cultivation and export of agricultural crops, as well as
                      deep knowledge of both drip and gravity-fed irrigation
                      systems. As a professional, Martin excels in planning,
                      organizing, managing, and supervising agricultural
                      projects. His commitment to sustainable farming practices
                      and extensive experience have established him as an expert
                      in the agribusiness sector.
                    </p>
                  </div>
                </div>

                <div className="text-center">
                  <h1 className="text-[#212121] opacity-100 group-hover:opacity-0">
                    Martin Gavidia
                  </h1>

                  <div className="text-[#616161] opacity-100 group-hover:opacity-0">
                    Head of Agriculture
                  </div>

                  <div
                    className="flex items-center justify-center hover:opacity-100
                                transition-opacity duration-300 space-x-3 mt-2"
                  >
                    {/* <a href="#" className="">
                      <div className=" w-8 h-8 bg-gray-50 rounded-full text-primary flex hover:text-white ease-in-out duration-300  hover:bg-primary items-center justify-center">
                        <FaFacebookF className="z-10" />
                      </div>
                    </a>

                    <a href="#" className="">
                      <div className=" w-8 h-8 bg-gray-50 rounded-full text-primary flex hover:text-white ease-in-out duration-300  hover:bg-primary items-center justify-center">
                        <FaTwitter className="z-10" />
                      </div>
                    </a> */}

                    <a
                      href="https://www.linkedin.com/in/mart%C3%ADn-gavidia-layza-9a380355/"
                      target="_blank"
                      className=""
                      rel="noreferrer"
                    >
                      <div className=" w-8 h-8 bg-gray-50 rounded-full text-primary flex hover:text-white ease-in-out duration-300  hover:bg-primary items-center justify-center">
                        <FaLinkedin className="z-10" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-6/12 lg:w-[20%] mb-6 px-6 sm:px-6 lg:px-4 group">
                {/* <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4"> */}
                <div className="relative flex flex-col items-center py-8">
                  <a href="#" className="mx-auto">
                    <img
                      className="md:w-48 w-[220px] border-white border-4 drop-shadow-md opacity-100 group-hover:opacity-0"
                      src="ManuelCabeza-edited.jpg"
                      alt="Manuel-Cabeza"
                    />
                  </a>
                  <div className="absolute top-0  md:px-0 w-full h-full bg-white bg-opacity-80 flex flex-col items-center justify-center duration-300 opacity-0 group-hover:opacity-100">
                    <p className="text-[12px] text-justify px-4 md:px-0 md:h-72">
                      <span className="font-semibold">Manuel Cabeza, COO:</span>{" "}
                      is a skilled architect with 15 years of experience in
                      logistics and operations management within the restaurant
                      chain industry. His unique background in architecture,
                      paired with his expertise in food and hospitality, has
                      enabled him to design innovative and functional spaces
                      that cater to both client needs and operational
                      requirements. Throughout his career, Manuel has
                      demonstrated an unwavering commitment to excellence and
                      continuous improvement, establishing himself as a trusted
                      expert in his field.
                    </p>
                  </div>
                </div>

                <div className="text-center">
                  <h1 className="text-[#212121] opacity-100 group-hover:opacity-0">
                    Manuel Cabeza
                  </h1>

                  <div className="text-[#616161] opacity-100 group-hover:opacity-0">
                    COO
                  </div>

                  <div
                    className="flex items-center justify-center hover:opacity-100
                                transition-opacity duration-300 space-x-3 mt-2"
                  >
                    {/* <a href="#" className="">
                      <div className=" w-8 h-8 bg-gray-50 rounded-full text-primary flex hover:text-white ease-in-out duration-300  hover:bg-primary items-center justify-center">
                        <FaFacebookF className="z-10" />
                      </div>
                    </a>

                    <a href="#" className="">
                      <div className=" w-8 h-8 bg-gray-50 rounded-full text-primary flex hover:text-white ease-in-out duration-300  hover:bg-primary items-center justify-center">
                        <FaTwitter className="z-10" />
                      </div>
                    </a> */}

                    <a
                      href="https://www.linkedin.com/in/manuel-enrique-cabeza-valdivia-43b9b516a/"
                      target="_blank"
                      className=""
                      rel="noreferrer"
                    >
                      <div className=" w-8 h-8 bg-gray-50 rounded-full text-primary flex hover:text-white ease-in-out duration-300  hover:bg-primary items-center justify-center">
                        <FaLinkedin className="z-10" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-6/12 lg:w-[20%] mb-6 px-6 sm:px-6 lg:px-4 group sm:mx-auto">
                {/* <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4"> */}
                <div className="relative flex flex-col items-center py-8">
                  <a href="#" className="mx-auto">
                    <img
                      className="md:w-48 w-[220px] border-white border-4 drop-shadow-md opacity-100 group-hover:opacity-0"
                      src="AnisaOrbegoso-edited.jpg"
                      alt="Anisa-Orbegoso"
                    />
                  </a>
                  <div className="absolute top-0  md:px-0 w-full h-full bg-white bg-opacity-80 flex flex-col items-center justify-center duration-300 opacity-0 group-hover:opacity-100">
                    <p className="text-[12px] text-justify px-4 md:px-0 md:h-72">
                      <span className="font-semibold">Anisa Orbegozo, HR:</span>{" "}
                      is a highly accomplished Human Resources Manager and
                      attorney, boasting an impressive 22 years of experience in
                      the public sector. Her extensive background and expertise
                      in law and human resources management have positioned her
                      as a respected leader in her field. Anisa's dedication to
                      navigating complex legal issues and fostering a positive
                      work environment has earned her a reputation for
                      excellence throughout her distinguished career.
                    </p>
                  </div>
                </div>

                <div className="text-center">
                  <h1 className="text-[#212121] opacity-100 group-hover:opacity-0">
                    Anisa Orbegozo
                  </h1>

                  <div className="text-[#616161] opacity-100 group-hover:opacity-0">
                    HR
                  </div>

                  <div
                    className="flex items-center justify-center hover:opacity-100
                                transition-opacity duration-300 space-x-3 mt-2"
                  >
                    {/* <a href="#" className="">
                      <div className=" w-8 h-8 bg-gray-50 rounded-full text-primary flex hover:text-white ease-in-out duration-300  hover:bg-primary items-center justify-center">
                        <FaFacebookF className="z-10" />
                      </div>
                    </a>

                    <a href="#" className="">
                      <div className=" w-8 h-8 bg-gray-50 rounded-full text-primary flex hover:text-white ease-in-out duration-300  hover:bg-primary items-center justify-center">
                        <FaTwitter className="z-10" />
                      </div>
                    </a> */}

                    <a
                      href="https://www.linkedin.com/in/anisa-orbegoso-cabeza-8b533b47/"
                      target="_blank"
                      className=""
                      rel="noreferrer"
                    >
                      <div className=" w-8 h-8 bg-gray-50 rounded-full text-primary flex hover:text-white ease-in-out duration-300  hover:bg-primary items-center justify-center">
                        <FaLinkedin className="z-10" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team1;
