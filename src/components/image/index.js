import React from 'react';
import NextImage from 'next/image';
import { bool, string } from 'prop-types';

function Image({
  src, alt, placeholder, fill,
}) {
  return (
    <NextImage src={src} alt={alt} fill={fill} placeholder={placeholder} />
  );
}

Image.defaultProps = {
  src: '', alt: '', placeholder: undefined, fill: true,
};
Image.propTypes = {
  src: string, alt: string, placeholder: string, fill: bool,
};

export default Image;
