import Image from "next/image";
import CustomButton from "../ui/custom-button";

const LetsTalk = () => {
  return (
    <div className=" relative overflow-hidden z-50 bg-skin-pink-200 pt-12 lg:pt-0">
      <div className="flex container min-h-screen flex-col lg:flex-row gap-0 lg:gap-20 items-center">
        <div className="w-full lg:w-3/5">
          <h2 className=" heading-1">
            Turn Your Website into a Cash Flow Machine
          </h2>
          <p className="text-black mt-3">
            Lets discuss your goals, challenges, and create a strategy that
            propels your business forward. Do not miss out on this opportunity
            to take your digital presence to the next level. 
          </p>

          <div className="mt-10 lg:mt-16">
            <CustomButton>Let&apos;s talk</CustomButton>
          </div>
        </div>

        <div className="w-full lg:hidden">
          <Image
            src="/images/hansome-guy.png"
            alt="Handsome guy"
            width={634}
            height={800}
            className="w-full "
          />
        </div>
      </div>
      <div className=" hidden lg:flex absolute bottom-0 right-0  justify-end">
        <Image
          src="/images/hansome-guy.png"
          alt="Handsome guy"
          width={634}
          height={800}
          className="w-full left-0 max-w-[40vw] xl:max-w-[42vw] 2xl:max-w-[65vw]"
        />
      </div>
    </div>
  );
};

export default LetsTalk;
