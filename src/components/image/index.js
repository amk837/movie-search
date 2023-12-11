import React, { useState } from 'react';
import NextImage from 'next/image';
import { bool, func, string } from 'prop-types';
import { Skeleton } from '@mui/material';

function Image({
  src = '', alt = '', placeholder = undefined, fill = true, sizes = undefined, onError,
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [imageSource, setImageSource] = useState(src);

  const onLoad = () => {
    setIsLoading(false);
  };

  const onLoadError = () => {
    setImageSource('/images/not-found.png');
    setIsLoading(false);
    if (onError) onError();
  };
  return (
    <>
      <NextImage src={imageSource} alt={alt} onLoad={onLoad} onError={onLoadError} fill={fill} placeholder={placeholder} sizes={sizes} />
      {isLoading ? <Skeleton width='100%' height='100%' variant='rounded' animation='wave' /> : null}
    </>
  );
}

Image.propTypes = {
  src: string, alt: string, placeholder: string, fill: bool, sizes: string, onError: func,
};

export default Image;
