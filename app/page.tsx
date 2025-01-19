import RoomsSection from "./sections/RoomsSection";
import BookNowSection from "./sections/BookNowSection";
import BannerSection from "./sections/BannerSection";
import ServicesSection from "./sections/ServicesSection";
import JoinOurTeamSection from "./sections/JoinOurTeamSection";
import TopAuthorsSection from "./sections/TopAuthersSection";
import HowItWorks from "./sections/HowItWorkSection";
import WhyBookWithUsSection from "./sections/WhyBookWithUsSection";

export default function Home() {
  return (
    <section>
      <BannerSection />

      <WhyBookWithUsSection />

      <HowItWorks />

      <BookNowSection />

      <ServicesSection />

      <RoomsSection />

      <JoinOurTeamSection />

      <TopAuthorsSection />
    </section>
  );
}
