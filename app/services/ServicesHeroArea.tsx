import { Button } from "@/components/ui/button";

const ServicesHeroArea = () => {
  return (
    <div className="bg-[url('/images/services-hero.png')] min-h-[460px] bg-cover py-32">
      <div className=" container">
        <div className="max-w-[1030px] space-y-6 xl:space-y-8 mx-auto text-center">
          <h2 className="heading-1">services</h2>
          <p className="">
            We optimize your online presence, turning it into a revenue
            powerhouse that effectively markets and sells your digital
            offerings. With our all-in-one solutions your website does more than
            exist—it excels.
          </p>
          <div className="flex gap-6 justify-center items-center">
            <Button
              variant={"secondary"}
              className="font-poppins font-semibold rounded-none  hover:bg-transparent hover:text-black px-6 hover:border-skin-blue-800  border h-10 uppercase"
            >
              Home
            </Button>
            <Button
              variant={"outline"}
              className=" font-poppins px-6 font-semibold rounded-none h-10 uppercase "
            >
              SERVICES
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesHeroArea;
