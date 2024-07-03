import React, { ReactNode } from "react";

type Props = {
  title: string;
  description: string;
  icon: ReactNode;
};

const FeatureCard = ({ title, description, icon }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-3 rounded-sm p-6 shadow-sm transition-all hover:scale-105 dark:bg-gray-950">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#6B46C1]/10 dark:[#B794F4]/20">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-center">{title}</h3>
      <p className="text-center text-sm text-gray-500 dark:text-gray-400">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
