import RoomsSection from "./sections/RoomsSection";
import BookNowSection from "./sections/BookNowSection";
import BannerSection from "./sections/BannerSection";
import ServicesSection from "./sections/ServicesSection";

export default function Home() {
  return (
    <section>
      <BannerSection />

      <BookNowSection />

      <ServicesSection />

      <RoomsSection />
    </section>
  );
}
