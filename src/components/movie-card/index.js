import styled from '@emotion/styled';
import { Typography, keyframes } from '@mui/material';
import Link from 'next/link';
import PropTypes from 'prop-types';
import React from 'react';
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
    animation: ${zoomIn} 5s ease infinite alternate; 
    animation-fill-mode: both;
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

export default function MovieCard({ movie: { img, title, href } }) {
  return (
    <Card href={href} title={title}>
      <ImageContainer>
        <ImageWrapper>
          <Image src={img} alt={title} />
        </ImageWrapper>
      </ImageContainer>

      <Title color='secondary' title={title}>{title}</Title>
    </Card>
  );
}

MovieCard.defaultProps = {
  movie: {
    img: '',
    title: '',
    href: '',
  },
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    img: PropTypes.string,
    title: PropTypes.string,
    href: PropTypes.string,
  }),
};
