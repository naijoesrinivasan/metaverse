import { Navbar } from "@/app/components/Navbar"
import { Footer } from "@/app/components/Footer"
import Hero from "@/app/sections/Hero"
import About from "@/app/sections/About"
import Explore from "@/app/sections/Explore"
import GetStarted from "@/app/sections/GetStarted"
import WhatsNew from "@/app/sections/WhatsNew"
import World from "@/app/sections/World"
import Insights from "@/app/sections/Insights"
import Feedback from "@/app/sections/Feedback"

export default function Home() {
  return (
    <div className="bg-primary-black lg:max-w-fit mx-auto">
      <Navbar />
      <Hero />
      <div className="relative">
        <About />
        <div className="gradient-03 z-0" />
        <Explore />
      </div>
      <div className="relative">
        <GetStarted />
        <div className="gradient-04 z-0" />
        <WhatsNew />
      </div>
      <World />
      <div className="relative">
        <Insights />
        <div className="gradient-04 z-0" />
        <Feedback />
      </div>
      <Footer />
    </div>
  );
}
