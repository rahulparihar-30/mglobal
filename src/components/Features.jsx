import React from "react";

const Features = () => {
  const features = [
    {
      title: "Customer Focused",
      description:
        "At M Global, we prioritize traders by providing 24-hour multilingual assistance, educational resources, and Free demo accounts. Our platform provides transparent pricing, secure trading, and customisable features. We empower you to trade with confidence by offering a diverse range of assets and customizable leverage. We are dedicated to ongoing improvement, significant community interaction, and rewarding loyalty.",
      image: "star.png",
    },
    {
      title: "Globally Regulated",
      description:
        "M Global, founded in 2005, is a fully licensed and regulated Forex broker in Dubai by the UAE's Securities and Commodities Authority (SCA) and the UK's Financial Conduct Authority (FCA), assuring a secure and trustworthy environment. With over 20 years of expertise, we have established ourselves as one of the most trusted and leading investment firms in Dubai, UAE. trade and invest across multiple international markets from a single platform.",
      image: "global.png",
    },
    {
      title: "Learning Resources",
      description:
        "Enhance your trading expertise with Noor Capital's comprehensive range of educational resources, including in-depth webinars, expert market analysis, and access to real-time forex quotes all designed to elevate your knowledge of forex trading. Noor Capital provides traders with the necessary support and resources to thrive in the fast-paced world of online trading.",
      image: "goldbars.png",
    },
    {
      title: "Diverse Investment Solutions",
      description:
        "Our award-winning investment diversity and innovative financial products cater to a wide range of investor needs, ensuring tailored solutions for your financial goals. As a trusted Stock broker in Dubai, we are dedicated to guiding you through the financial markets with confidence.",
      image: "educational.png",
    },
  ];

  return (
    <div className="md:mx-30 p-5 flex flex-col gap-5">
      <h2 className="heading text-center font-bold text-2xl font-oswald">
        Why M Global
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {features.map((feature, index) => (
          <div
            key={index}
            className="relative group  shadow-lg p-6 rounded-xl overflow-hidden cursor-pointer backdrop-blur-lg bg-white/10"
          >
            {/* Gradient overlay for hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-r from-yellow-700 via-gold brightness-40 to-amber-200"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col md:flex-row-reverse md:justify-center md:items-center gap-5">
              <img
                src={`/assets/${feature.image}`}
                alt={feature.title}
                className="w-20 md:w-40 drop-shadow-lg"
              />
              <div className="flex flex-col gap-3">
                <h3 className="font-bold text-xl font-oswald">
                  {feature.title}
                </h3>
                <p className="text-sm text-justify">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
