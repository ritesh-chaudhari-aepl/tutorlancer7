"use client";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// import { BiSolidQuoteAltLeft } from "react-icons/bs";
import Image from "next/image";
import user from "../assets/user1.png";
import user1 from "../assets/user2.png";
import user2 from "../assets/user3.png";
import curve from "../assets/blue-curve-testimonial.png";
import testimonial from "../assets/testimonial-7-bg.png";

const Testimonials = () => {
  const testimonialBanner = {
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "-webkit-fill-available",
    height: "-webkit-fill-available",
  };
  return (
    <div>
      <section
        id="testimonials"
        className="relative block box-content bg-cover bg-center bg-no-repeat overflow-hidden object-fill"
      >
        <div className="absolute inset-0">
          <Image
            src={testimonial}
            alt="background image"
            style={testimonialBanner}
          />
        </div>
        <div className="container relative flex sm:px-6 p-12 lg:p-16 flex-col align-middle items-center m-auto">
          <div className=" text-left pb-9 font-sans text-white">
            <div>Testimonial</div>
            <div className="font-Poppins capitalize text-3xl sm:text-4xl py-5 text-black font-medium">
              What our users say about us
            </div>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-5 lg:gap-8 md:grid-cols-3 lg:grid-cols-3">
            <div className="flex max-w-3xl text-center gap-3 items-center m-auto">
              {/* <button className="bg-home8Bg sm:p-3 lg:p-4 rounded-full">
              <ArrowBackIosIcon className="text-blue-main" />
            </button> */}
              <div className="bg-white py-8 md:py-10 rounded-xl border-2 shadow-md shadow-btnColor gap-5 p-3">
                <div className="font-Roboto italic text-16 text-black">
                  {" "}
                  Tutorlancer has helped me not only understand the subject but
                  master the answering techniques required to obtain a
                  istinction. the material is not only well compiled and
                  organies but helps immensely with revision.{" "}
                </div>
                <Image
                  className="m-auto rounded-full mt-2 shadow-sm shadow-blue-light"
                  src={user}
                  width={50}
                  height={50}
                  alt="user"
                />
                <div className="font-serif pt-2 text-xl font-bold text-black">
                  Jhon Dev
                </div>
                <div className="font-sans text-sm text-black">
                  UI/UX Designer
                </div>
                {/* <span className="font-DmSerifDisplay text-5xl text-pink-pinkLight items-right">"</span> */}
              </div>
              {/* <button className="bg-home8Bg sm:p-3 lg:p-4 rounded-full">
              <ArrowForwardIosIcon className="text-blue-main" />
            </button> */}
            </div>
            <div className="flex max-w-3xl text-center gap-3 items-center m-auto">
              {/* <button className="bg-home8Bg sm:p-3 lg:p-4 rounded-full">
              <ArrowBackIosIcon className="text-blue-main" />
            </button> */}
              <div className="bg-white py-8 md:py-10 rounded-xl border-2 shadow-md shadow-btnColor gap-5 p-3">
                <div className="font-Roboto italic text-16 text-black">
                  {" "}
                  Tutorlancer has helped me not only understand the subject but
                  master the answering techniques required to obtain a
                  istinction. the material is not only well compiled and
                  organies but helps immensely with revision.{" "}
                </div>
                <Image
                  className="m-auto rounded-full mt-2 shadow-sm shadow-blue-light"
                  src={user1}
                  width={50}
                  height={50}
                  alt="user"
                />
                <div className="font-serif pt-2 text-xl font-bold text-black">
                  Jhon Dev
                </div>
                <div className="font-sans text-sm text-black">
                  UI/UX Designer
                </div>
                {/* <span className="font-DmSerifDisplay text-5xl text-pink-pinkLight items-right">"</span> */}
              </div>
              {/* <button className="bg-home8Bg sm:p-3 lg:p-4 rounded-full">
              <ArrowForwardIosIcon className="text-blue-main" />
            </button> */}
            </div>
            <div className="flex max-w-3xl text-center gap-3 items-center m-auto">
              {/* <button className="bg-home8Bg sm:p-3 lg:p-4 rounded-full">
              <ArrowBackIosIcon className="text-blue-main" />
            </button> */}
              <div className="bg-white py-8 md:py-10 rounded-xl border-2 shadow-md shadow-btnColor gap-5 p-3">
                <div className="font-Roboto italic text-16 text-black">
                  {" "}
                  Tutorlancer has helped me not only understand the subject but
                  master the answering techniques required to obtain a
                  istinction. the material is not only well compiled and
                  organies but helps immensely with revision.{" "}
                </div>
                <Image
                  className="m-auto rounded-full mt-2 shadow-sm shadow-blue-light"
                  src={user2}
                  width={50}
                  height={50}
                  alt="user"
                />
                <div className="font-serif pt-2 text-xl font-bold text-black">
                  Jhon Dev
                </div>
                <div className="font-sans text-sm text-black">
                  UI/UX Designer
                </div>
                {/* <span className="font-DmSerifDisplay text-5xl text-pink-pinkLight items-right">"</span> */}
              </div>
              {/* <button className="bg-home8Bg sm:p-3 lg:p-4 rounded-full">
              <ArrowForwardIosIcon className="text-blue-main" />
            </button> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
