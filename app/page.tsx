import BookingConsultation from "@/components/common/BookingConsultation";
import ConsultationBookung from "@/components/common/ConsultationBookung";
import Faqs from "@/components/common/Faqs";
import LetsTalk from "@/components/common/LetsTalk";
import HeroArea from "@/components/home/HeroArea";
import Slider from "@/components/home/TextimonialCard";
import Testimonials from "@/components/home/Testimonials";
import Trust from "@/components/home/Trust";
import DigitalSoluations from "@/components/home/digitalSoluations/DigitalSoluations";

export default function Home() {
  return (
    <main>
      <HeroArea />
      <ConsultationBookung />
      <DigitalSoluations />
      <Testimonials />
      <Trust />
      <BookingConsultation />
      <Faqs />
      <LetsTalk />
    </main>
  );
}
