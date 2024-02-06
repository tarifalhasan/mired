import BookingConsultation from "@/components/common/BookingConsultation";
import Faqs from "@/components/common/Faqs";
import LetsTalk from "@/components/common/LetsTalk";
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
      <LetsTalk />
    </div>
  );
};

export default page;
