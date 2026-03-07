import { Smooth as SmoothComponent } from '@local/areas/smooth';
import { Button } from '@local/components/button';
import { IStack, Stack, StackMotion } from '@local/components/stack';
import { Typography } from '@local/components/typography';
import { CSS_VARS } from '@local/styles/utils/constants';

import type { Meta, StoryObj } from '@storybook/react-vite';
import { FC, useState } from 'react';

const meta: Meta<typeof SmoothComponent> = {
  component: SmoothComponent,
  title: 'Area/Smooth',
};

export default meta;
type Story = StoryObj<typeof SmoothComponent>;

const SmoothWrapper: FC<IStack> = (props) => {
  const [content, setContent] = useState<boolean>(false);

  const toggleContent = () => {
    setContent((prev) => !prev);
  };

  return (
    <SmoothComponent
      {...props}
      sx={{
        height: 'fit-content',
        gap: '4px',
        flexDirection: 'column',
        padding: '12px',
        backgroundColor: CSS_VARS.palette.fillQuinaryLight,
      }}
    >
      <StackMotion layout='position'>
        <Button onClick={toggleContent} size={'small'} genre={'primary'}>
          Toggle Content
        </Button>
      </StackMotion>
      <StackMotion
        layout='position'
        sx={{
          height: '100px',
          minHeight: '100px',
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
      </StackMotion>
      {content ? (
        <Stack
          sx={{
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
      ) : null}
    </SmoothComponent>
  );
};

export const Smooth: Story = {
  render: (args) => <SmoothWrapper {...args} />,
  args: {},
};
