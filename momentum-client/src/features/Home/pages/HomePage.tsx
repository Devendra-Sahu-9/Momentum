import EngineeringSection from "../components/EngineeringSection";
import HeroSection from "../components/HeroSection";
import ModulesSection from "../components/ModulesSection";
import PublicNavbar from "../components/PublicNavbar";

export const HomePage = () => {
  return (
    <>
      <PublicNavbar />
      <HeroSection />
      <ModulesSection />
      <EngineeringSection />
      {/* <CTASection /> */}
      {/* <Footer /> */}
    </>
  );
};
