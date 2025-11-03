import React from 'react';

const TrustedPartenars = ({ partenars }) => {
  return (
    <div className="flex flex-wrap justify-center gap-10 m-10 ">
      {partenars.map((partenar) => (
        <div
          key={partenar.id}
          className="bg-[#FFFFFF] border p-6 w-[280px] h-[190px] rounded-2xl text-center shadow-md hover:shadow-lg transition-shadow hover:scale-105">
          <h1 className="bg-[#b02d4e] rounded-full text-center mx-auto mb-2 pt-6 w-20 h-20 text-[24px] font-family-serif text-[#FBF3E9] font-bold shadow-2xl">
            {partenar.logo}
          </h1>
          <h1 className="text-[16px] mb-1 font-family-serif text-[#450817] font-bold">
            {partenar.companyName}
          </h1>
          <h1 className="text-[14px] font-family-serif text-[#8A5C67] font-bold">
            {partenar.catagories}
          </h1>
        </div>
      ))}
    </div>
  );
};

export default TrustedPartenars;
