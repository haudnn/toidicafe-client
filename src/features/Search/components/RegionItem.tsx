import React from 'react';

interface Props { 
    index: number;
    slug: string; 
    name: string;
    isChecked: boolean;
    handelChangeTag: Function;
}
const RegionItem = ({index, slug, name, isChecked ,handelChangeTag}: Props) => {
  return (
    <div key={index} className="mb-[10px]">
      <input
        id={slug}
        type="checkbox"
        onChange={(e) => handelChangeTag(name, 'regions', e)}
        checked={isChecked}
        name={slug}
      />
      <label className="text-base" htmlFor={slug}>
        Quận {name}
      </label>
    </div>
  );
};

export default RegionItem;
