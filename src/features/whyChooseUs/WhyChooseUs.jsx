import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectWhyChooseUsActiveId,
  selectWhyChooseUsFeatures,
  setActiveFeatureId,
} from "./whyChooseUsSlice";

const FeatureCard = ({ title, desc, isActive, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className={[
      "w-full text-left rounded-2xl border p-6 transition-all duration-150",
      isActive
        ? "border-transparent bg-gradient-to-r from-[#FC466B]/25 to-[#3F5EFB]/25 shadow-lg"
        : "border-white/10 bg-[#110D2E]/40 hover:border-white/20",
    ].join(" ")}
  >
    <div className="text-white font-semibold text-lg">{title}</div>
    <div className="mt-2 text-gray-400 text-sm leading-relaxed">{desc}</div>
  </button>
);

const WhyChooseUs = () => {
  const dispatch = useDispatch();
  const features = useSelector(selectWhyChooseUsFeatures);
  const activeFeatureId = useSelector(selectWhyChooseUsActiveId);

  return (
    <section className="w-full">
      <div className="container mx-auto px-4 lg:px-32 py-16">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            Why Choose Us
          </h2>
          <p className="mt-2 text-gray-400 max-w-2xl">
            A delivery-focused team with senior talent, scalable execution, and
            security-first habits.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              title={feature.title}
              desc={feature.desc}
              isActive={feature.id === activeFeatureId}
              onClick={() => dispatch(setActiveFeatureId(feature.id))}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;


// so i made shorter version hereis 
// import React, { useState } from 'react';

// const features = [
//   { id: 1, title: 'High Performance', description: 'Lightning-fast load times and maximum system efficiency.', icon: '⚡' },
//   { id: 2, title: 'Bank-Grade Security', description: 'Advanced data encryption and compliance protocols.', icon: '🔒' },
//   { id: 3, title: '24/7 Expert Support', description: 'Dedicated technical team available round the clock.', icon: '🛠️' },
//   { id: 4, title: 'Scalable Architecture', description: 'Engineered for seamless growth and high traffic handling.', icon: '📈' },
// ];

// export const WhyChooseUs = () => {
//   const [activeId, setActiveId] = useState(1);

//   return (
//     <section className="py-16 bg-gray-50 px-4">
//       <div className="max-w-7xl mx-auto text-center mb-12">
//         <h2 className="text-3xl font-bold text-gray-900 mb-2">Why Choose Us</h2>
//         <p className="text-gray-600">Discover what sets our digital solutions apart.</p>
//       </div>
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//         {features.map((item) => {
//           const isActive = activeId === item.id;
//           return (
//             <div
//               key={item.id}
//               onClick={() => setActiveId(item.id)}
//               className={`p-6 rounded-xl cursor-pointer transition-all border-2 ${
//                 isActive
//                   ? 'border-blue-600 bg-white shadow-lg scale-105'
//                   : 'border-transparent bg-white shadow-sm hover:border-gray-200'
//               }`}
//             >
//               <div className="text-3xl mb-3">{item.icon}</div>
//               <h3 className={`text-lg font-bold mb-2 ${isActive ? 'text-blue-600' : 'text-gray-800'}`}>
//                 {item.title}
//               </h3>
//               <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// };

