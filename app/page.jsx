"use client";

import { useState } from "react";
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
import ImpactSection from "../components/ImpactSection"
import Footer from "../components/Footer";

export default function Home() {
  const [query, setQuery] = useState("");
  const [wishlist, setWishlist] = useState([]);

  const toggleWishlist = (name) =>
    setWishlist((w) => (w.includes(name) ? w.filter((n) => n !== name) : [...w, name]));

  return (
    <>
      <Navbar />
      <main className="bg-graybg">
        <section className="mx-auto max-w-7xl px-6 pt-14 pb-10">
          <p className="font-body text-xs font-bold uppercase tracking-[0.2em] text-charcoal">
            Admissions 2026 - Now open
          </p>
          <h1 className="mt-4 max-w-3xl font-heading text-4xl font-bold leading-[1.15] text-charcoal sm:text-5xl">
            Find the Right College, Without the Guesswork
          </h1>
          <p className="mt-4 max-w-xl font-body text-base font-normal text-charcoal/70">
            Search 6,200+ colleges in India, compare fees and placements, and
            track every entrance exam date that matters, all in one place.
          </p>
          <div className="mt-8 max-w-2xl rounded-2xl border border-charcoal/10 bg-white p-6 shadow-md">
            <label htmlFor="college-search" className="sr-only">Search college, course, or city</label>
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                id="college-search"
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search college, course, or city"
                className="flex-1 rounded-xl border border-charcoal/15 bg-graybg px-4 py-3 font-body text-sm text-charcoal outline-none placeholder:text-charcoal/40"
              />
              <button className="rounded-xl bg-charcoal px-6 py-3 font-heading text-sm font-bold text-white transition hover:bg-gold hover:text-charcoal">
                Search
              </button>
            </div>
          </div>
        </section>
        <div className="mx-auto max-w-7xl px-6">
          <NewsSection />
          <UpcomingExamsSection />
          <CounsellingSection />
          <TopCollegesSection wishlist={wishlist} onToggleWishlist={toggleWishlist} onPredictorOpen={() => {}} />
          <PredictorsSection onPredictorClick={() => {}} />
          <CitiesSection />
        
          <CoursesSection />
          <TrendingSection />
          <OurProductsSection onProductClick={() => {}} />
          <TestimonialsSection />
          <ImpactSection/>
          <section className="mb-14">
            <div className="rounded-2xl bg-charcoal px-8 py-10 text-center sm:px-16">
              <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl">
                Not Sure Which College Fits You?
              </h2>
              <p className="mx-auto mt-2 max-w-md font-body text-sm font-normal text-white/70">
                Talk to a free counsellor and get a shortlist based on your marks,
                budget, and career goals.
              </p>
              <a href="/counselling" className="mt-6 inline-block rounded-full bg-gold px-8 py-3 font-heading text-sm font-bold text-charcoal transition hover:bg-gold-dark">
                Book Free Counselling
              </a>
            </div>
          </section>
          <section className="mb-14 -mx-6 sm:mx-0">
            <div className="bg-yellow-50 px-6 py-8 sm:rounded-2xl sm:px-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
              <div>
                <h2 className="font-heading font-bold text-xl sm:text-2xl text-charcoal m-0">
                  Student Community: Where Questions Find Answers
                </h2>
                <p className="font-body text-sm text-charcoal opacity-60 mt-2 m-0">
                  Ask and get expert answers on exams, counselling, admissions, careers, and study options.
                </p>
              </div>
              <a href="/qna" className="flex-shrink-0 inline-block rounded-full bg-gold px-7 py-3 font-heading text-sm font-bold text-charcoal transition hover:bg-gold-dark whitespace-nowrap">
                Ask Now
              </a>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}


