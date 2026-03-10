import { IScroll, Scroll as ScrollComponent } from '@local/areas/scroll';
import { Button } from '@local/components/button';
import { Stack } from '@local/components/stack';
import { Typography } from '@local/components/typography';
import { CSS_VARS } from '@local/styles/utils/constants';

import type { Meta, StoryObj } from '@storybook/react-vite';
import { FC, useState } from 'react';

const meta: Meta<IScroll> = {
  component: ScrollComponent,
  title: 'Area/2. Scroll',
};

export default meta;
type Story = StoryObj<IScroll>;

const ScrollWrapper: FC<IScroll> = (props) => {
  const [content, setContent] = useState<boolean>(false);

  const toggleContent = () => {
    setContent((prev) => !prev);
  };

  return (
    <ScrollComponent
      {...props}
      sx={{
        width: '300px',
        padding: '12px',
        boxSizing: 'content-box',
        backgroundColor: CSS_VARS.palette.fillQuinaryLight,
      }}
    >
      <Button isMinWidthAsContent onClick={toggleContent} size={'small'} genre={'primary'}>
        Toggle Content
      </Button>
      <Stack
        sx={{
          width: '100px',
          height: '100px',
          backgroundColor: CSS_VARS.palette.fillPrimaryLight,
        }}
      >
        <Typography
          sx={{
            variant: 'title-5',
          }}
        >
          One
        </Typography>
      </Stack>
      {content && (
        <Stack
          sx={{
            width: '1000px',
            minWidth: '1000px',
            height: '100px',
            backgroundColor: CSS_VARS.palette.fillPrimaryLight,
          }}
        >
          <Typography
            sx={{
              variant: 'title-5',
            }}
          >
            Two
          </Typography>
        </Stack>
      )}
    </ScrollComponent>
  );
};

export const Example: Story = {
  render: (args) => <ScrollWrapper {...args} />,
  args: { horizontal: true },
};
