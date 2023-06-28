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
        <div className="container relative flex sm:px-6 p-12 lg:p-16 flex-col align-middle md:items-start items-center m-auto">
          <div className="md:w-1/2 pb-9 font-sans text-white">
            {/* <div>Testimonial</div> */}
            <div className="font-Poppins capitalize text-3xl sm:text-4xl py-4 text-black font-medium">
              See how our visitors & members made their{" "}
              <span className="text-blue-darkBlue">#Success Stories</span>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-1 sm:overflow-auto md:overflow-hidden gap-5 lg:gap-8 md:grid-cols-3 lg:grid-cols-3">
            <div className="flex bg-white relative max-w-3xl gap-3 items-center m-auto">
              {/* <button className="bg-home8Bg sm:p-3 lg:p-4 rounded-full">
              <ArrowBackIosIcon className="text-blue-main" />
            </button> */}
              <Image
                src={curve}
                className="w-24 top-0 right-0 rounded-tr-xl absolute"
              />
              <div className="relative flex flex-col py-8 md:py-8 rounded-xl border-2 shadow-md shadow-btnColor gap-3 px-4">
                <Image
                  className="rounded-full mt-2 shadow-sm shadow-blue-light"
                  src={user}
                  width={50}
                  height={50}
                  alt="user"
                />
                <div className="font-Outfit text-16 font-semibold">
                  I highly recommend this platform, amazing experience with fast
                  delivery
                </div>
                <div className="font-OpenSans text-16 text-black">
                  {" "}
                  " It is a long established fact that a reader will be
                  distracted by the readable content of a page when looking at
                  its layout. The point of using lorem ipsum is that it has a
                  more. "{" "}
                </div>
                <div>
                  <div className="font-serif text-xl font-bold text-black">
                    Michael Mueller
                  </div>
                  <div className="font-OpenSans pt-2 text-sm text-black">
                    5th standard, Dubai UAE
                  </div>
                </div>
                {/* <span className="font-DmSerifDisplay text-5xl text-pink-pinkLight items-right">"</span> */}
              </div>
              {/* <button className="bg-home8Bg sm:p-3 lg:p-4 rounded-full">
              <ArrowForwardIosIcon className="text-blue-main" />
            </button> */}
            </div>
            <div className="flex bg-white relative max-w-3xl gap-3 items-center m-auto">
              {/* <button className="bg-home8Bg sm:p-3 lg:p-4 rounded-full">
              <ArrowBackIosIcon className="text-blue-main" />
            </button> */}
              <Image
                src={curve}
                className="w-24 top-0 right-0 rounded-tr-xl absolute"
              />
              <div className="relative flex flex-col py-8 md:py-8 rounded-xl border-2 shadow-md shadow-btnColor gap-3 px-4">
                <Image
                  className="rounded-full mt-2 shadow-sm shadow-blue-light"
                  src={user1}
                  width={50}
                  height={50}
                  alt="user"
                />
                <div className="font-Outfit text-16 font-semibold">
                  I really can imagine how professional they are. just amazing
                  experience
                </div>
                <div className="font-OpenSans text-16 text-black">
                  {" "}
                  " There are many variations of passages of lorem ipsum
                  available, but the majority have suffered alteration in some
                  torm, by injected humour, or randomised words which don’t
                  look. "{" "}
                </div>
                <div>
                  <div className="capitalize font-serif text-xl font-bold text-black">
                    Cecil sims
                  </div>
                  <div className="font-OpenSans pt-2 text-sm text-black">
                    2nd standard, Manchester UK
                  </div>
                </div>
                {/* <span className="font-DmSerifDisplay text-5xl text-pink-pinkLight items-right">"</span> */}
              </div>
              {/* <button className="bg-home8Bg sm:p-3 lg:p-4 rounded-full">
              <ArrowForwardIosIcon className="text-blue-main" />
            </button> */}
            </div>
            <div className="flex bg-white relative max-w-3xl gap-3 items-center m-auto">
              {/* <button className="bg-home8Bg sm:p-3 lg:p-4 rounded-full">
              <ArrowBackIosIcon className="text-blue-main" />
            </button> */}
              <Image
                src={curve}
                className="w-24 top-0 right-0 rounded-tr-xl absolute"
              />
              <div className="relative flex flex-col py-8 md:py-8 rounded-xl border-2 shadow-md shadow-btnColor gap-3 px-4">
                <Image
                  className="rounded-full mt-2 shadow-sm shadow-blue-light"
                  src={user2}
                  width={50}
                  height={50}
                  alt="user"
                />
                <div className="font-Outfit text-16 font-semibold">
                  On first project I feel its a mess then later it turn into an
                  great details for me
                </div>
                <div className="font-OpenSans text-16 text-black">
                  {" "}
                  " Contrary to popular belief, Lorem ipsum is not simply random
                  text. it has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old. "{" "}
                </div>
                <div>
                  <div className="capitalize font-serif text-xl font-bold text-black">
                    Bobby schwartz
                  </div>
                  <div className="font-OpenSans pt-2 text-sm text-black">
                    7th standard, Rome Italy
                  </div>
                </div>
                {/* <span className="font-DmSerifDisplay text-5xl text-pink-pinkLight items-right">"</span> */}
              </div>
              {/* <button className="bg-home8Bg sm:p-3 lg:p-4 rounded-full">
              <ArrowForwardIosIcon className="text-blue-main" />
            </button> */}
            </div>

            {/* <div className="flex max-w-3xl text-center gap-3 items-center m-auto"> */}
            {/* <button className="bg-home8Bg sm:p-3 lg:p-4 rounded-full">
              <ArrowBackIosIcon className="text-blue-main" />
            </button> */}
            {/* <div className="bg-white py-8 md:py-10 rounded-xl border-2 shadow-md shadow-btnColor gap-5 p-3">
                <div className="font-Roboto italic text-16 text-black">
                  {" "}
                  Grades Achievers has helped me not only understand the subject but
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
                </div> */}
            {/* <span className="font-DmSerifDisplay text-5xl text-pink-pinkLight items-right">"</span> */}
            {/* </div> */}
            {/* <button className="bg-home8Bg sm:p-3 lg:p-4 rounded-full">
              <ArrowForwardIosIcon className="text-blue-main" />
            </button> */}
            {/* </div> */}
            {/* <div className="flex max-w-3xl text-center gap-3 items-center m-auto">
              
              <div className="bg-white py-8 md:py-10 rounded-xl border-2 shadow-md shadow-btnColor gap-5 p-3">
                <div className="font-Roboto italic text-16 text-black">
                  {" "}
                  Grades Achievers has helped me not only understand the subject but
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
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
