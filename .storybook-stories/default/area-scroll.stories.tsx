import { Scroll as ScrollComponent, ScrollProps } from '@local/areas/scroll';
import { Stack } from '@local/components/stack';
import { Typography } from '@local/components/typography';

import type { Meta, StoryObj } from '@storybook/react-vite';
import { FC, useState } from 'react';

const meta: Meta<typeof ScrollComponent> = {
  component: ScrollComponent,
  title: 'Area/Scroll',
};

export default meta;
type Story = StoryObj<typeof ScrollComponent>;

const ScrollWrapper: FC<ScrollProps> = (props) => {
  const [content, setContent] = useState<boolean>(false);

  const toggleContent = () => {
    setContent((prev) => !prev);
  };

  return (
    <ScrollComponent
      {...props}
      sx={(theme) => ({
        width: '300px',
        padding: '12px',
        boxSizing: 'content-box',
        backgroundColor: theme.palette.textPrimary,
      })}
    >
      <button onClick={toggleContent} type='button'>
        Toggle Content
      </button>
      <Stack
        sx={(theme) => ({
          width: '100px',
          height: '100px',
          backgroundColor: theme.palette.fillTertiary,
        })}
      >
        <Typography
          sx={{
            variant: 'title-1',
          }}
        >
          One
        </Typography>
      </Stack>
      {content && (
        <Stack
          sx={(theme) => ({
            width: '1000px',
            minWidth: '1000px',
            height: '100px',
            backgroundColor: theme.palette.fillTertiary,
          })}
        >
          <Typography
            sx={{
              variant: 'title-1',
            }}
          >
            Two
          </Typography>
        </Stack>
      )}
    </ScrollComponent>
  );
};

export const Scroll: Story = {
  render: (args) => <ScrollWrapper {...args} />,
  args: { horizontal: true },
};
