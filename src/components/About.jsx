import React from "react";
import global from "../../public/assets/Global_financial.gif";
import fund from "../../public/assets/Fund_admin.gif";
import investment from "../../public/assets/investment-sln.gif";
import asset from "../../public/assets/Asset_mangmnt.gif";

const About = () => {
  const highlights = [
    {
      title: "Global Financial Advisory",
      description:
        "Stay ahead with live charts, forex news, and expert analysis to guide your trading decisions.",
      icon: global,
    },
    {
      title: "Asset Management",
      description:
        "Trade with competitive spreads and lightning-fast execution for maximum efficiency.",
      icon: asset,
    },
    {
      title: "Investment",
      description:
        "Experience safe deposits and withdrawals with bank-grade security and multi-currency wallet support.",
      icon: investment,
    },
    {
      title: "Fund Administration",
      description:
        "Get round-the-clock assistance plus access to tutorials, webinars, and demo accounts.",
      icon: fund,
    },
  ];

  return (
    <div  className="grid grid-cols-1 md:grid-cols-2 p-5 gap-5 md:mx-30 justify-center items-center">
      {/* About Section */}
      <div>
        <h3 className="text-gold font-medium">About Us</h3>
        <p className="text-gray text-sm md:text-xl text-wrap text-justify mt-5">
          MGlobal is a trusted forex trading platform designed to empower
          traders with a seamless, secure, and transparent experience in the
          global currency market. Built with cutting-edge technology and
          real-time market insights, MGlobal offers users an intuitive
          interface, competitive spreads, and lightning-fast execution to make
          trading more efficient and rewarding. Whether you are a beginner
          exploring forex or a professional trader, MGlobal provides the tools,
          resources, and support needed to make confident trading decisions.
        </p>
      </div>

      {/* Highlight Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {highlights.map((highlight, index) => (
          <div
            key={index}
            className="relative group rounded-2xl p-6 shadow-lg cursor-pointer overflow-hidden backdrop-blur-lg bg-white/10"
          >
            {/* Gradient overlay */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-r from-yellow-600 via-gold brightness-40 to-yellow-200"></div>

            {/* Content */}
            <div className="relative z-10 flex items-center gap-5">
              <img
                src={highlight.icon}
                alt={highlight.title}
                className="w-20 h-20 drop-shadow-lg"
              />
              <h3 className="font-oswald font-semibold text-lg">
                {highlight.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
