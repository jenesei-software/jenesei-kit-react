import { Smooth as SmoothComponent } from '@local/areas/smooth';
import { Button } from '@local/components/button';
import { Stack, StackMotion, StackProps } from '@local/components/stack';
import { Typography } from '@local/components/typography';

import type { Meta, StoryObj } from '@storybook/react-vite';
import { FC, useState } from 'react';

const meta: Meta<typeof SmoothComponent> = {
  component: SmoothComponent,
  title: 'Area/Smooth',
};

export default meta;
type Story = StoryObj<typeof SmoothComponent>;

const SmoothWrapper: FC<StackProps> = (props) => {
  const [content, setContent] = useState<boolean>(false);

  const toggleContent = () => {
    setContent((prev) => !prev);
  };

  return (
    <SmoothComponent
      {...props}
      sx={(theme) => ({
        default: {
          height: 'fit-content',
          gap: '4px',
          flexDirection: 'column',
          padding: '12px',
          backgroundColor: theme.palette.black40,
        },
      })}
    >
      <StackMotion layout='position'>
        <Button onClick={toggleContent} size={'small'} genre={'gray'}>
          Toggle Content
        </Button>
      </StackMotion>
      <StackMotion
        layout='position'
        sx={(theme) => ({
          default: {
            height: '100px',
            minHeight: '100px',
            backgroundColor: theme.palette.whiteStandard,
          },
        })}
      >
        <Typography
          sx={{
            default: {
              variant: 'h7',
            },
          }}
        >
          One
        </Typography>
      </StackMotion>
      {content ? (
        <Stack
          sx={(theme) => ({
            default: {
              height: '100px',
              backgroundColor: theme.palette.whiteStandard,
            },
          })}
        >
          <Typography
            sx={{
              default: {
                variant: 'h7',
              },
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
