const HeroArea = () => {
  return (
    <div
      className={`  bg-[#F4F2F6] lg:bg-home-bg h-screen  flex items-center justify-center relative overflow-hidden  bg-cover `}
    >
      <div className=" container relative  z-50 text-center mx-auto max-w-[66.875rem]  space-y-5 xl:space-y-7">
        <div>
          <h2 className="heading-1">
            READY TO TURN YOUR <br /> WEBSITE INTO A REVENUE <br /> POWERHOUSE?
          </h2>
          <p className="">
            We don&apos;t just build websites. We turn your digital presence
            into a revenue magnet by incorporating profit-driven{" "}
            <br className=" hidden xl:block" /> features such as courses,
            newsletters, and paid subscriptions and strategically market to
            maximize your reach.
          </p>
        </div>
        <button className=" rounded-10 outline-none focus:outline-none text-sm sm:text-base font-bold font-manrope relative py-2 px-10 h-14 inline-flex items-center   justify-center bg-skin-blue-800 hover:bg-skin-blue-800/90 text-white before:absolute before:w-full before:h-full before:bg-skin-pink-300 before:-z-10 before:-top-2 before:rounded-10 before:-left-2 after:absolute  after:w-full after:h-full  after:bg-skin-yellow-600 after:-z-10 after:top-2 after:rounded-10 after:left-2 ">
          Book Your Consultation Today
        </button>
      </div>

      <div className=" z-10 absolute  bottom-[-50%] left-[-20%] w-[150px] h-[150px] lg:w-[674px] lg:h-[674px] rounded-full  bg-pink-600 blur-[300px] opacity-100" />
      <div className=" z-10 absolute  top-[-40%] right-[-30%] w-[150px] h-[150px] lg:w-[674px] lg:h-[674px] rounded-full  bg-pink-600 blur-[300px] opacity-100" />
    </div>
  );
};

export default HeroArea;
