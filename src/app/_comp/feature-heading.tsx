import React from "react";

const FeatureHeading = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 text-center">
      <div className="space-y-2">
        <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm opacity-75 dark:bg-gray-700">
          Key Features
        </div>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          What Makes Our Rosenberg Self-Esteem Scale Special
        </h2>
        <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 mx-auto">
          Discover the unique features that set our Rosenberg Self-Esteem Scale
          apart and make it the perfect solution for your personal growth
          journey.
        </p>
      </div>
    </div>
  );
};

export default FeatureHeading;
