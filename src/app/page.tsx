import Loader from "@/components/Loader";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Hero from "@/components/sections/Hero";
import Legend from "@/components/sections/Legend";
import Aero from "@/components/sections/Aero";
import Engine from "@/components/sections/Engine";
import Drivetrain from "@/components/sections/Drivetrain";
import Chassis from "@/components/sections/Chassis";
import Brakes from "@/components/sections/Brakes";
import Wheels from "@/components/sections/Wheels";
import Cockpit from "@/components/sections/Cockpit";
import Dimensions from "@/components/sections/Dimensions";
import Specs from "@/components/sections/Specs";
import FinalHero from "@/components/sections/FinalHero";
import SceneTransition from "@/components/SceneTransition";

export default function Home() {
  return (
    <>
      <Loader />
      <SiteHeader />
      <main id="main">
        <Hero />
        <SceneTransition anchorId="legend" />
        <Legend />
        <Aero />
        <SceneTransition anchorId="engine" />
        <Engine />
        <Drivetrain />
        <Chassis />
        <Brakes />
        <Wheels />
        <Cockpit />
        <Dimensions />
        <Specs />
        <SceneTransition anchorId="final" />
        <FinalHero />
      </main>
      <SiteFooter />
    </>
  );
}
