import React, { useState } from 'react';
import BiggerImages from './ImageItem/BiggerImages';
import FiveImges from './ImageItem/FiveImges';
import FourImages from './ImageItem/FourImages';
import OneImage from './ImageItem/OneImage';
import ThreeImages from './ImageItem/ThreeImages';
import TwoImages from './ImageItem/TwoImages';
import LightBox from '../Common/LightBox';
interface Props {
  images: Array<string>;
  length: number;
}
const Image = ({ images, length }: Props) => {
  if (length === 1) return (
    <OneImage images={images} />
  )
  if (length === 2) return <TwoImages images={images}/>;
  if (length === 3) return <ThreeImages images={images}/>;
  if (length === 4) return <FourImages images={images}/>;
  if (length === 5) return <FiveImges images={images}/>;
  if (length > 5) return  <BiggerImages images={images}/>;
  else {
    return <div>Something went wrong!</div>;
  }
};

export default Image;
