import styled from '@emotion/styled';
import { Typography, keyframes } from '@mui/material';
import Link from 'next/link';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Image from '../image';

const Card = styled(Link)`
  width: 100%;
  height: 25vw;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const zoomIn = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.25);
  }
`;

const ImageContainer = styled.div`
  width: 90%;
  height: 90%;
  border-radius: 10px;
  overflow: hidden;
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  &: hover {
    animation: ${zoomIn} ${({ linkBroken }) => (!linkBroken ? 5 : 0)}s ease infinite alternate; 
  }
`;

const Title = styled(Typography)`
  padding-top: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 90%;
  font-size: 1vw;
  height: 10%;
`;

export default function MovieCard({
  movie: {
    img = '',
    title = '',
    href = '',
  },
}) {
  const [linkBroken, setLinkBroken] = useState(false);

  const onError = () => {
    setLinkBroken(true);
  };
  return (
    <Card href={href} title={title}>
      <ImageContainer>
        <ImageWrapper linkBroken={linkBroken}>
          <Image src={img} alt={title} sizes='20vw' onError={onError} />
        </ImageWrapper>
      </ImageContainer>

      <Title color='secondary' title={title}>{title}</Title>
    </Card>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    img: PropTypes.string,
    title: PropTypes.string,
    href: PropTypes.string,
  }),
};
