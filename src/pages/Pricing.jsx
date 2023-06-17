"use client";
import React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import LocalActivityOutlinedIcon from "@mui/icons-material/LocalActivityOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import PricingCard from "@/components/cards/PricingCard";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const Pricing = () => {
  const iconstyle = {
    fontSize: "2rem",
  };

  return (
    <>
      <section id="pricing" className="bg-white text-black">
        <div className="container mx-auto max-w-screen-x lg:mt-16 md:mt-0 px-4 py-14 sm:py-22 sm:px-6 lg:py-16 lg:px-8">
          <div className="mx-auto max-w-lg text-center">
            <div className="flex flex-col items-center">
              <h6 className="tracking-wide uppercase font-Roboto font-medium text-orange-home8">
                Pricing plan
              </h6>
              <h2 className="text-3xl capitalize font-medium font-Poppins mt-2 text-blue-main sm:text-4xl">
                take plan according to your need
              </h2>
              {/* <span className="h-[2px] bg-pink-darkPink  w-16 mb-4" /> */}
            </div>
            {/* <p className="mt-4 text-black">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consequuntur aliquam doloribus nesciunt eos fugiat. Vitae aperiam
              fugit consequuntur saepe laborum.
            </p> */}
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 lg:gap-8 md:grid-cols-3 lg:grid-cols-3">
            <PricingCard
              title="PRO"
              plan="$10"
              icon={<ShoppingCartOutlinedIcon style={iconstyle} />}
              // span1={<CheckOutlinedIcon className="text-green-600" />}
              li1="1 User"
              // span2={<CheckOutlinedIcon className="text-green-600" />}
              li2="10 GB Storage"
              // span3={<CloseOutlinedIcon className="text-orange-500" />}
              li3="Email Support"
              // span4={<CheckOutlinedIcon className="text-green-600" />}
              li4="Lifetime Updates"
              // span5={<CheckOutlinedIcon className="text-green-600" />}
              // li5="quizzes"
              // span6={<CloseOutlinedIcon className="text-orange-500" />}
              // li6="data storage"
              // span7={<CloseOutlinedIcon className="text-orange-500" />}
              // li7="free call"
            />
            <PricingCard
              title="PLUS"
              plan="$35"
              icon={
                <LocalActivityOutlinedIcon
                  style={iconstyle}
                  classNames="border-2 bg-gradient-to-r from-yellow-home7 from-10% via-orange-home7 via-50% to-orange-home7 to-100% w-fit text-white"
                />
              }
              // span1={<CheckOutlinedIcon className="text-green-600" />}
              li1="10 User"
              // span2={<CheckOutlinedIcon className="text-green-600" />}
              li2="30 GB Storage"
              // span3={<CloseOutlinedIcon className="text-orange-500" />}
              li3="Priority Email Support"
              // span4={<CheckOutlinedIcon className="text-green-600" />}
              li4="Lifetime Updates"
            />
            
            <PricingCard
              title="PREMIUM"
              plan="$150"
              icon={<StarBorderOutlinedIcon style={iconstyle} />}
              // span1={<CheckOutlinedIcon className="text-green-600" />}
              li1="Unlimited User"
              // span2={<CheckOutlinedIcon className="text-green-600" />}
              li2="Unlimited Storage"
              // span3={<CloseOutlinedIcon className="text-orange-500" />}
              li3="24/7 Support"
              // span4={<CheckOutlinedIcon className="text-green-600" />}
              li4="Lifetime Updates"
            />

            {/* <PricingCard
              title="standard"
              plan="40$"
              course="Access 10 courses"
              span1={<CheckOutlinedIcon className="text-green-600" />}
              li1="Certificate"
              span2={<CheckOutlinedIcon className="text-green-600" />}
              li2="Re Watch Course"
              span3={<CloseOutlinedIcon className="text-orange-500" />}
              li3="Conference"
              span4={<CheckOutlinedIcon className="text-green-600" />}
              li4="teacher help"
              span5={<CheckOutlinedIcon className="text-green-600" />}
              li5="quizzes"
              span6={<CloseOutlinedIcon className="text-orange-500" />}
              li6="data storage"
              span7={<CheckOutlinedIcon className="text-green-600" />}
              li7="free call"
            />

            <PricingCard
              title="standard"
              plan="60$"
              course="Access 15 courses"
              span1={<CheckOutlinedIcon className="text-green-600" />}
              li1="Certificate"
              span2={<CheckOutlinedIcon className="text-green-600" />}
              li2="Re Watch Course"
              span3={<CheckOutlinedIcon className="text-green-600" />}
              li3="Conference"
              span4={<CheckOutlinedIcon className="text-green-600" />}
              li4="teacher help"
              span5={<CheckOutlinedIcon className="text-green-600" />}
              li5="quizzes"
              span6={<CloseOutlinedIcon className="text-orange-500" />}
              li6="data storage"
              span7={<CheckOutlinedIcon className="text-green-600" />}
              li7="free call"
            /> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
