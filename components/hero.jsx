"use client";

import Link from "next/link";
import React, { useRef } from "react";
import { Button } from "./ui/button";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [-10, 10]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.6]);

  return (
    <section className="w-full min-h-screen pt-[120px] pb-16 flex items-center justify-center">
      <div className="grid_container flex flex-col items-center justify-center text-white text-center px-6 max-w-6xl">
        
        {/* Main Hero Heading */}
        <h1 className="text-7xl md:text-6xl font-extrabold mb-8 leading-tight font-sans">
          Build Smarter, Faster,{" "}
          <span className="text-blue-500">Together</span>
        </h1>

        <p className="text-2xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
          AI-powered tools to supercharge your workflow. Create resumes, cover
          letters, and ace interviews effortlessly.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-6 justify-center mb-16">
          <Link href="/dashboard">
            <Button className="px-8 py-4 text-lg font-semibold bg-blue-600 text-white rounded-lg shadow-lg transition-all duration-300 hover:bg-blue-700 cursor-pointer">
              GET STARTED
            </Button>
          </Link>

          <Link href="/about">
            <Button className="px-8 py-4 text-lg font-semibold bg-gray-800 text-white rounded-lg shadow-lg transition-all duration-300 hover:bg-gray-700 cursor-pointer">
              LEARN MORE
            </Button>
          </Link>
        </div>

        {/* Why use AI Career */}
        <h2 className="text-3xl md:text-5xl font-extrabold text-blue-400 mb-6 tracking-wide pt-16 font-sans">
          Why should I use AI Career for my career growth?
        </h2>
        <p className="text-2xl text-gray-300 max-w-3xl mx-auto mb-16 leading-relaxed font-light">
          The job market is competitive, and generic career advice won’t cut it
          anymore. You need personalized guidance that understands your unique
          background, goals, and skill gaps.
        </p>

        {/* Graph & Career Growth Plan - Side by Side */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-20 px-10 pt-20">
  
  {/* Graph Image - proper size */}
  <div className="flex-1 flex justify-start pl-8">
  <img
    src="/graph.png"
    alt="Career Growth"
    className="w-[150%] max-w-2xl rounded-xl shadow-lg"
    style={{
      filter:
        "drop-shadow(0 0 31px rgba(0,250,255,0.4)) drop-shadow(0 0 21px rgba(0,250,255,0.3))",
    }}
  />
</div>


  {/* Text on Right */}
  <div className="flex-1 text-left pl-50">
    <h2 className="text-2xl md:text-3xl font-extrabold text-blue-500 mb-6 tracking-wide font-sans">
      Career Growth Plan
    </h2>
        <p className="text-1xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
      Based on your skills and industry trends, the outlook is positive.
      Emerging technologies and strong demand in your field show that
      career opportunities will continue to grow. Below is a graph
      showing which job roles are in high demand.
    </p>
  </div>
</div>
</div>
    </section>
  );
};

export default Hero;
