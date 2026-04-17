import { IPagination, Pagination as PaginationComponent } from '@local/components/pagination';

import type { Meta, StoryObj } from '@storybook/react-vite';
import { FC, useEffect, useState } from 'react';

const meta: Meta<typeof PaginationComponent> = {
  component: PaginationComponent,
  title: 'Component/6. Pagination',
};

export default meta;
type Story = StoryObj<typeof PaginationComponent>;

const defaultArgs: Partial<IPagination> = {
  gap: 6,
  buttonControl: {
    genre: 'product',
    size: 'small',
    isFullRadius: true,
    isWidthAsHeight: true,
  },
  buttonCount: {
    active: {
      genre: 'secondary',
      size: 'small',
      isFullRadius: true,
    },
    inactive: {
      genre: 'primary',
      size: 'small',
      isFullRadius: true,
    },
  },
};

const PaginationWrapper: FC<IPagination> = (props) => {
  const [index, setIndex] = useState(props.index);

  useEffect(() => {
    setIndex(props.index);
  }, [props.index]);
  return <PaginationComponent {...props} index={index} changeIndex={(index) => setIndex(index)} />;
};

export const Index: Story = {
  render: (args) => <PaginationWrapper {...args} />,
  args: {
    ...defaultArgs,
    index: 1,
    length: 12,

    isInfinity: false,
    viewQuantity: 4,
    locale: {
      next: 'Next',
      prev: 'Prev',
    },
  },
};
