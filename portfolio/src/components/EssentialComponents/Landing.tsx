import React from 'react';
import { Button } from "@/components/ui/button";
import { Spotlight } from "@/components/ui/Spotlight";
import waivingImg from '@/assets/images/waiving.png'; // Ensure the path is correct

function Landing() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-900 p-4">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl">
        <div className="text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 dark:text-white">
            I'm Sushil Bhandary
          </h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            A Software Engineer with focus on Full stack, ML, Cloud and Web 3.0, specialized in turning concepts into digital reality...
          </p>
          <div className="mt-8 space-x-4">
            <Button variant="outline">See my resume</Button>
            <Button>Get in touch</Button>
          </div>
        </div>
        <div className="md:ml-10 mt-4 md:mt-0">
          <img src={waivingImg} alt="Waiving hand emoji" className="w-48 h-48 md:w-auto md:h-auto" />
        </div>
      </div>
    </main>
  );
}

export default Landing;
