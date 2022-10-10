import React from 'react';

interface Props {
    key: number;
    icon : string;
    name: string;
}

const BenefitItem = ({key, icon, name} : Props) => {
  return (
    <div key={key} className="keen-slider__slide">
      <div className="flex items-center text-center flex-col p-[6px] justify-center">
        <i
          className={`fa-solid ${icon} inline-block font-bold mb-[6px] text-[#e03] text-2xl`}
        ></i>
        <span>{name}</span>
      </div>
    </div>
  );
};

export default BenefitItem;
