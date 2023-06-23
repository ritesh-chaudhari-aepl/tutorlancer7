"use client";
import React from "react";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import ImportantDevicesOutlinedIcon from "@mui/icons-material/ImportantDevicesOutlined";
import ScienceOutlinedIcon from "@mui/icons-material/ScienceOutlined";
import DataUsageOutlinedIcon from "@mui/icons-material/DataUsageOutlined";
import VideoCameraFrontOutlinedIcon from "@mui/icons-material/VideoCameraFrontOutlined";
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import ContentPasteSearchOutlinedIcon from "@mui/icons-material/ContentPasteSearchOutlined";
import MainCard from "@/components/cards/MainCard";
// import user from "@/assets/user1.png";

const Services = () => {
  const iconstyle = {
    fontSize: "2rem",
  };

  return (
    <div>
      <section id="services" className="bg-white text-black">
        <div className="mx-auto max-w-screen-x lg:pt-16 md:mt-0 px-4 py-14 sm:py-24 sm:px-16 lg:py-16 ">
          {/* <div className="items-center w-full flex flex-col justify-center sm:w-1/2 py-5">
            <div className="py-4">
              <svg
                width="52"
                height="13"
                viewBox="0 0 52 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 2.03135C7 1.54541 9.23007 11.9457 15.5 11.0313C20.699 10.2732 20.2771 2.60181 25.5 2.03135C31.4797 1.37823 31.9859 11.1485 38 11.0313C43.8568 10.9173 45.5 2.03135 50 2.03135"
                  stroke="url(#paint0_linear_188_1337)"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_188_1337"
                    x1="2"
                    y1="6.54416"
                    x2="50"
                    y2="6.54417"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#EAA60E" />
                    <stop offset="0.508511" stop-color="#EF4444" />
                    <stop offset="1" stop-color="#EF4444" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <h2 className="font-medium text-base">
              Beter Learning. Better Result
            </h2>
            <h1 className="font-bold text-2xl py-4">
              See how working process <br></br> easily adapt your need
            </h1>
            <p className="font-sans font-semibold text-sm">
              accusamus et iusidio dignissimos ducimus. blanditiis praesentium
              voluptatum deleniti atque corrupti quos dolores etenquasa
              molestias epturi sint dccaecati cupiditate non providente mikume
              molareshe.
            </p>
            <button className="px-4 text-sm mt-6 py-3 text-white bg-blue-bgLight rounded-sm">Explore more about us</button>
          </div> */}
          <div className="mx-auto max-w-lg text-center ">
            <div className="flex flex-col items-center">
              <div className="py-4">
                <svg
                  width="52"
                  height="13"
                  viewBox="0 0 52 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 2.03135C7 1.54541 9.23007 11.9457 15.5 11.0313C20.699 10.2732 20.2771 2.60181 25.5 2.03135C31.4797 1.37823 31.9859 11.1485 38 11.0313C43.8568 10.9173 45.5 2.03135 50 2.03135"
                    stroke="url(#paint0_linear_188_1337)"
                    stroke-width="3"
                    stroke-linecap="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_188_1337"
                      x1="2"
                      y1="6.54416"
                      x2="50"
                      y2="6.54417"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#EAA60E" />
                      <stop offset="0.508511" stop-color="#EF4444" />
                      <stop offset="1" stop-color="#EF4444" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <h2 className="font-medium text-base">
                Beter Learning. Better Result
              </h2>
              <h1 className="font-bold text-2xl py-4">
                Online education platform for all
              </h1>
            </div>
            <p className="mt-4 text-black">
              Let us take care of your homework needs in the fastest and most
              efficient way.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <MainCard
              icon={<PeopleOutlinedIcon />}
              title="Apps for Mobile & Web"
              iconBgColor="#000"
              description="Our tutors will make very user-friendly and efficient apps, exactly matching your needs. Boost your business goal."
            />

            <MainCard
              icon={<AccessTimeOutlinedIcon />}
              title=" 24/7 Support"
              iconBgColor="#000"
              description="Tutorlancer is focused on ensuring to meet the needs of the students around the globe for their assignments."
            />

            <MainCard
              icon={<ImportantDevicesOutlinedIcon />}
              title="live sessions"
              iconBgColor="#000"
              description="We provide the best tutors for you to interact with in real to get instant solutions for your problems. Pickup your phone now !"
            />

            <MainCard
              icon={<ScienceOutlinedIcon />}
              title="Lab work"
              // iconBgColor="#000"
              description="PSpice, Orcad, AutoCAD,Solidworks, and many more simulation
              softwares, our Lab tutors can handle them all."
            />

            <MainCard
              icon={<DataUsageOutlinedIcon />}
              title="project help"
              iconBgColor="#000"
              description="Get the most professional project assistance from our PhD tutors
              who can guide and walk you through your project online."
            />
            <MainCard
              icon={<VideoCameraFrontOutlinedIcon />}
              title="video calling support"
              iconBgColor="#000"
              description="Real-time tools and rich insights mean our support solution
              amplifies your team for an unbeatable experience."
            />

            <MainCard
              icon={<DriveFileRenameOutlineOutlinedIcon />}
              title="writing help"
              iconBgColor="#000"
              description="Our Native essay tutors help you meet university standards in
              terms of writing and structuring of academic essays."
            />
            <MainCard
              icon={<ContentPasteSearchOutlinedIcon />}
              title="homework help"
              iconBgColor="#000"
              description="Stuck with homework? PhD tutors have a distinctive mode of
              expression assisting students to solve assignments flawlessly."
            />
          </div>

          {/* <div className="mt-12 text-center">
            <a
              href="#"
              className="inline-block rounded bg-pink-600 px-12 py-3 text-sm font-medium text-black transition hover:bg-pink-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Get Started Today
            </a>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default Services;
