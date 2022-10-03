import React from 'react';

interface Props {
  index: number;
  slug: string;
  name: string;
  isChecked: boolean;
  handelChangeTag: Function;
}
const TagItem = ({ index, slug, name, isChecked, handelChangeTag }: Props) => {
  return (
    <div key={index} className="mb-[10px]">
      <input
        id={slug}
        type="checkbox"
        onChange={(e) => handelChangeTag(name, 'tags', e)}
        checked={isChecked}
        name={slug}
      />
      <label className="text-base" htmlFor={slug}>
        {name}
      </label>
    </div>
  );
};

export default TagItem;
