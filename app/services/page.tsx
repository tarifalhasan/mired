import ConsultationBookung from "@/components/common/ConsultationBookung";
import LetsTalk from "@/components/common/LetsTalk";
import DisplayServices from "@/components/services/DisplayServices";
import ServicesHeroArea from "./ServicesHeroArea";

const Services = () => {
  return (
    <div>
      <ServicesHeroArea />
      <ConsultationBookung />
      <DisplayServices />
      <LetsTalk />
    </div>
  );
};

export default Services;
