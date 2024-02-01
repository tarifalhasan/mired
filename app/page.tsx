import BookingConsultation from "@/components/common/BookingConsultation";
import ConsultationBookung from "@/components/common/ConsultationBookung";
import LetsTalk from "@/components/common/LetsTalk";
import HeroArea from "@/components/home/HeroArea";
import DigitalSoluations from "@/components/home/digitalSoluations/DigitalSoluations";

export default function Home() {
  return (
    <main>
      <HeroArea />
      <ConsultationBookung />
      <DigitalSoluations />
      <BookingConsultation />
      <LetsTalk />
    </main>
  );
}
