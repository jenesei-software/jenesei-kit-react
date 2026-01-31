import { Pagination as PaginationComponent, PaginationProps } from '@local/components/pagination';

import type { Meta, StoryObj } from '@storybook/react-vite';
import { FC, useEffect, useState } from 'react';

import { WrapperBig } from './tools';

const meta: Meta<typeof PaginationComponent> = {
  component: PaginationComponent,
  title: 'Component/Pagination',
};

export default meta;
type Story = StoryObj<typeof PaginationComponent>;

const defaultArgs: Partial<PaginationProps> = {
  buttonControl: {
    genre: 'product',
    size: 'medium',
    isRadius: true,
    isWidthAsHeight: true,
    isPlaystationEffect: true,
  },
  buttonCount: {
    active: {
      genre: 'product',
      size: 'medium',
      isRadius: true,
      isPlaystationEffect: true,
    },
    inactive: {
      genre: 'white',
      size: 'medium',
      isRadius: true,
      isPlaystationEffect: true,
    },
  },
};

const PaginationWrapper: FC<PaginationProps> = (props) => {
  const [index, setIndex] = useState(props.index);

  useEffect(() => {
    setIndex(props.index);
  }, [props.index]);
  return (
    <WrapperBig>
      <PaginationComponent {...props} index={index} changeIndex={(index) => setIndex(index)} />
    </WrapperBig>
  );
};

export const Pagination: Story = {
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
