import { BoltIcon, SettingsIcon, ShieldIcon } from "@/components/icon";
import React from "react";
import FeatureCard from "./feature-card";
import FeatureHeading from "./feature-heading";

const Feature = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <FeatureHeading />
        {/* Features */}
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 py-12 sm:grid-cols-2 md:grid-cols-3 lg:gap-7">
          <FeatureCard
            title="Comprehensive Assessment"
            description="Our Rosenberg Self-Esteem Scale provides a thorough evaluation of your self-worth, empowering you to
        make meaningful changes."
            icon={
              <BoltIcon className="h-6 w-6 text-[#6B46C1] dark:text-[#B794F4]" />
            }
          />
          <FeatureCard
            title="Personalized Insights"
            description="Receive tailored recommendations based on your unique self-esteem
            profile, guiding you towards lasting personal growth."
            icon={
              <SettingsIcon className="h-6 w-6 text-[#6B46C1] dark:text-[#B794F4]" />
            }
          />

          <FeatureCard
            title="Secure and Confidential"
            description="Your personal information and assessment results are kept
            confidential, ensuring your privacy is protected."
            icon={
              <ShieldIcon className="h-6 w-6 text-[#6B46C1] dark:text-[#B794F4]" />
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Feature;
