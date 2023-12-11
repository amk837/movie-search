import styled from '@emotion/styled';
import { Skeleton } from '@mui/material';
import React from 'react';

const Card = styled.div`
  width: 100%;
  height: 25vw;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.div`
  width: 90%;
  height: 90%;
  border-radius: 10px;
`;

const Title = styled.div`
  padding-top: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 90%;
  font-size: 1vw;
  height: 10%;
`;

function MovieCardSkeleton() {
  return (
    <Card>
      <Image>
        <Skeleton width='100%' height='100%' variant='rounded' animation='wave' />
      </Image>

      <Title>
        <Skeleton width='100%' height='100%' variant='rounded' animation='wave' />
      </Title>
    </Card>
  );
}

export default MovieCardSkeleton;
