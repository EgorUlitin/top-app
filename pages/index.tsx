import { Tag } from '@/components';
import { Rating } from '@/components';
import { withLayout } from '@/layout/Layout';
import { GetStaticProps } from 'next/types';
import { useState } from 'react';
import axios from 'axios';
import { MenuItem } from '@/interfaces/menu.interface';
import { Menu } from '@/layout/Menu/Menu';

function Home({ menu }: HomeProps): JSX.Element {
  const [rating, setRating] = useState<number>(3);
  return (
    <>
      <Tag size="small" color="green">
        Tag 1
      </Tag>
      <Tag size="medium" color="red">
        hh.ru
      </Tag>
      <Tag size="medium" color="grey">
        Tag 1
      </Tag>
      <Tag size="small" color="primary">
        Tag 1
      </Tag>
      <Rating rating={4} />
      <Rating rating={rating} isEditable setRating={setRating} />
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;

  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
    { firstCategory },
  );

  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
