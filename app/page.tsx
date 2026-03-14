import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Badges from "@/components/Badges";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import ProblemSolution from "@/components/ProblemSolution";
import CompareTable from "@/components/CompareTable";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0c10] text-white">
      <Header />
      <Hero />
      <Badges />
      <HowItWorks />
      <Features />
      <ProblemSolution />
      <CompareTable />
      <Pricing />
      <Footer />
    </main>
  );
}
