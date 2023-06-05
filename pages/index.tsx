// import { Htag } from '@/components';
// import { Button } from '@/components';
// import { P } from '@/components';
import { Tag } from '@/components';
import { Rating } from '@/components';
import { withLayout } from '@/layout/Layout';
import { useState } from 'react';

function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(3);
  return (
    <>
      <Tag size='small' color='green'>Tag 1</Tag>
      <Tag size='medium' color='red'>hh.ru</Tag>
      <Tag size='medium' color='grey'>Tag 1</Tag>
      <Tag size='small' color='primary'>Tag 1</Tag>
      <Rating rating={4} />
      <Rating rating={rating} isEditable setRating={setRating} />
    </>
  );
};

export default withLayout(Home);
