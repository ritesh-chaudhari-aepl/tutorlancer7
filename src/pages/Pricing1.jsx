"use client";
import React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import LocalActivityOutlinedIcon from "@mui/icons-material/LocalActivityOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";

const Pricing = () => {
  const iconstyle = {
    fontSize: "2rem",
  };

  return (
    <>
      <section id="pricing" className="bg-white text-black">
        <div className="mx-auto max-w-screen-x  lg:pt-16 md:mt-0 px-4 py-14 sm:py-22 sm:px-6 lg:py-16 lg:px-8">
          <div className="mx-auto max-w-lg text-center">
            <div className="flex flex-col items-center">
              <h2 className="text-3xl font-Outfit font-bold mb-2 text-black sm:text-4xl">
                Pricing
              </h2>
              {/* <span className="h-[2px] bg-gradient-to-r from-yellow-home7 from-10% via-orange-home7 via-50% to-orange-home7 to-100%  w-16 mb-4" /> */}
            </div>
            {/* <p className="mt-4 text-black">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consequuntur aliquam doloribus nesciunt eos fugiat. Vitae aperiam
              fugit consequuntur saepe laborum.
            </p> */}
          </div>

          <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-3 lg:grid-cols-3 ">
            <div className="wrapper grid-flow-col block rounded-xl border text-center border-pink-500/10 py-12 shadow-md shadow-pink-light transition hover:border-pink-light hover:shadow-pink-light">
              <div className="card items-center gap-6 flex flex-col">
                <div className="rounded-full bg-blue-bgLight w-fit p-4 hover:text-black hover:bg-gradient-to-r from-yellow-home7 from-10% via-orange-home7 via-50% to-orange-home7 to-100% transition hover:border-gradient-to-r from-orange-home8 to-yellow-home8">
                  <ShoppingCartOutlinedIcon style={iconstyle} />
                </div>

                <ul className="grid gap-4">
                  <li className="font-bold font-xl font-Outfit text-transparent bg-clip-text bg-gradient-to-r from-orange-home8 to-yellow-home8">
                    $10 <span className="font-normal text-black">/mon</span>
                  </li>
                  <li className="font-bold font-2xl uppercase">pro</li>
                  <li>1 User</li>
                  <li>10 GB Storage</li>
                  <li>Email Support</li>
                  <li>Lifetime Updates</li>
                </ul>

                <a
                  href="#"
                  className="inline-block rounded-md bg-violet-home7 sm:px-8 px-12 py-3 text-sm font-medium text-white transition hover:bg-gradient-to-r from-yellow-home7 from-10% via-orange-home7 via-50% to-orange-home7 to-100% focus:outline-none focus:ring focus:ring-yellow-400"
                >
                  Buy Now
                </a>
              </div>
            </div>

            <div className="wrapper grid-flow-col block rounded-xl border text-center border-pink-500/10 py-12 shadow-md shadow-pink-light transition hover:border-pink-light hover:shadow-pink-light">
              <div className="card items-center gap-6 flex flex-col">
                <div className="rounded-full border-2 bg-gradient-to-r from-yellow-home7 from-10% via-orange-home7 via-50% to-orange-home7 to-100% w-fit text-white p-4">
                  {/* bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% */}
                  <LocalActivityOutlinedIcon style={iconstyle} />
                </div>

                <ul className="grid gap-4">
                  <li className="font-bold font-xl font-Outfit text-transparent bg-clip-text bg-gradient-to-r from-orange-home8 to-yellow-home8">
                    $35 <span className="font-normal text-black">/mon</span>
                  </li>
                  <li className="font-bold font-2xl uppercase">plus</li>
                  <li>10 User</li>
                  <li>30 GB Storage</li>
                  <li>Priority Email Support</li>
                  <li>Lifetime Updates</li>
                </ul>

                <a
                  href="#"
                  className="inline-block rounded-md bg-violet-home7 sm:px-8 px-12 py-3 text-sm font-medium text-white transition hover:bg-gradient-to-r from-yellow-home7 from-10% via-orange-home7 via-50% to-orange-home7 to-100% focus:outline-none focus:ring focus:ring-yellow-400"
                >
                  Buy Now
                </a>
              </div>
            </div>

            <div className="wrapper grid-flow-col block rounded-xl border text-center border-pink-500/10 py-12 shadow-md shadow-pink-light transition hover:border-pink-light hover:shadow-pink-light">
              <div className="card items-center gap-6 flex flex-col">
                <div className="rounded-full bg-blue-bgLight w-fit p-4 hover:text-black hover:bg-gradient-to-r from-yellow-home7 from-10% via-orange-home7 via-50% to-orange-home7 to-100% transition hover:border-gradient-to-r from-orange-home8 to-yellow-home8">
                  <StarBorderOutlinedIcon style={iconstyle} />
                </div>

                <ul className="grid gap-4">
                  <li className="font-bold font-xl font-Outfit text-transparent bg-clip-text bg-gradient-to-r from-orange-home8 to-yellow-home8">
                    $150 <span className="font-normal text-black">/mon</span>
                  </li>
                  <li className="font-bold font-2xl uppercase">pro</li>
                  <li>Unlimited User</li>
                  <li>Unlimited Storage</li>
                  <li>24/7 Support</li>
                  <li>Lifetime Updates</li>
                </ul>

                <a
                  href="#"
                  className="inline-block rounded-md bg-violet-home7 sm:px-8 px-12 py-3 text-sm font-medium text-white transition hover:bg-gradient-to-r from-yellow-home7 from-10% via-orange-home7 via-50% to-orange-home7 to-100% focus:outline-none focus:ring focus:ring-yellow-400"
                >
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
