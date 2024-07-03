import Wave from "@/components/custom/wave";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="w-full bg-gradient-to-r from-[#4673c1] to-[#94f4ef] py-20 md:py-32 lg:py-40  xl:h-screen xl:grid xl:place-items-center xl:py-0 relative">
      <div className="absolute -bottom-4 left-0 w-full -z-1">
        <Wave />
      </div>
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <div className="space-y-4">
              <div className="inline-block rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white">
                Unlock Your Inner Confidence
              </div>
              <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
                Discover Your True Worth with Our Rosenberg Self-Esteem Scale
              </h1>
              <p className="max-w-3xl text-lg font-medium text-white/90 md:text-xl">
                Embark on a transformative journey to cultivate a positive
                self-image and unleash your full potential.
              </p>
              <div className="mt-6 flex space-x-4">
                <Button
                  className="bg-white text-[#4673c1] hover:bg-gray-100"
                  size="lg"
                  variant="secondary"
                >
                  Get Started
                </Button>
                <Button
                  className="text-white hover:text-white bg-white/10 hover:bg-white/15"
                  size="lg"
                  variant="outline"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
          <div className="hidden lg:block">
            <Image
              src="/images/hero.svg"
              alt="Rosenberg Self-Esteem Scale"
              className="rounded-lg shadow-lg  object-cover"
              width={500}
              height={350}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
