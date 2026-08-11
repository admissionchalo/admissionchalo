"use client";

import { useState } from "react";
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import UpcomingExamsSection from "../components/UpcomingExamsSection";
import CounsellingSection from "../components/CounsellingSection";
import TopCollegesSection from "../components/TopCollegesSection";
import PredictorsSection from "../components/PredictorsSection";
import CitiesSection from "../components/CitiesSection";
import CoursesSection from "../components/CoursesSection";
import NewsSection from "../components/NewsSection";
import OurProductsSection from "../components/OurProductsSection";
import TrendingSection from "../components/TrendingSection";
import TestimonialsSection from "../components/TestimonialsSection";
import ImpactSection from "../components/ImpactSection";
import HeroSection from "../components/HeroBenner";

export default function Home() {
  const [query, setQuery] = useState("");
  const [wishlist, setWishlist] = useState([]);

  const toggleWishlist = (name) =>
    setWishlist((w) => (w.includes(name) ? w.filter((n) => n !== name) : [...w, name]));

  return (
    <>
      <div className="sticky top-0 z-50">
        <TopBar />
        <Navbar />
      </div>

      
          <HeroSection/>
          <main className="bg-graybg">
      <div className="mx-auto max-w-7xl px-6">
          <UpcomingExamsSection />
          <CounsellingSection />
          <TopCollegesSection wishlist={wishlist} onToggleWishlist={toggleWishlist} onPredictorOpen={() => {}} />
          <PredictorsSection onPredictorClick={() => {}} />
          <CitiesSection />
          <NewsSection />
          <CoursesSection />
          <TrendingSection />
          <OurProductsSection onProductClick={() => {}} />
          <TestimonialsSection />
          <ImpactSection />

          {/* CTA */}
          <section className="mb-14">
            <div className="rounded-2xl bg-charcoal px-8 py-10 text-center sm:px-16">
              <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl">
                Not Sure Which College Fits You?
              </h2>
              <p className="mx-auto mt-2 max-w-md font-body text-sm font-normal text-white/70">
                Talk to a free counsellor and get a shortlist based on your marks,
                budget, and career goals.
              </p>
              <a href="/counselling" className="mt-6 inline-block rounded-full bg-gold px-8 py-3 font-heading text-sm font-bold text-charcoal transition hover:bg-gold-dark">Book Free Counselling</a>
            </div>
          </section>

          {/* QnA banner */}
          <section className="mb-14 -mx-6 sm:mx-0">
            <div className="bg-[#FFF6DF] px-6 py-8 sm:rounded-2xl sm:px-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
              <div>
                <h2 className="font-heading font-bold text-xl sm:text-2xl text-charcoal m-0">
                  Student Community: Where Questions Find Answers
                </h2>
                <p className="font-body text-sm text-charcoal/60 mt-2 m-0">
                  Ask and get expert answers on exams, counselling, admissions, careers, and study options.
                </p>
              </div>
              <a href="/qna" className="flex-shrink-0 inline-block rounded-full bg-gold px-7 py-3 font-heading text-sm font-bold text-charcoal transition hover:bg-gold-dark whitespace-nowrap">Ask Now</a>
            </div>
          </section>
        </div>
      </main>

      <footer className="bg-charcoal px-6 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
          <span className="font-heading text-sm font-bold text-white">
            Shiksha<span className="text-white/70">Today</span>
          </span>
          <p className="font-body text-xs font-normal text-white/50">
            © 2026 Shiksha Today. Sample data for demo purposes.
          </p>
        </div>
      </footer>
    </>
  );
}
