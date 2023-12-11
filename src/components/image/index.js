import React from 'react';
import NextImage from 'next/image';
import { bool, string } from 'prop-types';

function Image({
  src = '', alt = '', placeholder = undefined, fill = true, sizes = undefined,
}) {
  return (
    <NextImage src={src} alt={alt} fill={fill} placeholder={placeholder} sizes={sizes} />
  );
}

Image.propTypes = {
  src: string, alt: string, placeholder: string, fill: bool, sizes: string,
};

export default Image;
