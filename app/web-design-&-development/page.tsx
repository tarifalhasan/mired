import BookingConsultation from "@/components/common/BookingConsultation";
import Faqs from "@/components/common/Faqs";
import LetsTalk from "@/components/common/LetsTalk";
import Sponsars from "@/components/common/Sponsars";
import DesignDevelopment from "./DesignDevelopment";
import WeFocusOfWeb from "./WeFocusOfWeb";
import WebDesignHeroArea from "./WebDesignHeroArea";

const page = () => {
  return (
    <div className=" relative overflow-hidden bg-skin-pink-50">
      <WebDesignHeroArea />
      <DesignDevelopment />
      <WeFocusOfWeb />
      <BookingConsultation />
      <Faqs />
      <div className=" pt-5">
        <Sponsars />
      </div>
      <LetsTalk />
    </div>
  );
};

export default page;
