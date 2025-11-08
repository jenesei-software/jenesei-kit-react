import type { Meta, StoryObj } from '@storybook/react-vite';
import { FC, useState } from 'react';
import 'styled-components';

import { Scroll as ScrollComponent, ScrollProps } from '@local/areas/scroll/export';
import { Button } from '@local/components/button/export';
import { Stack } from '@local/components/stack/export';
import { Typography } from '@local/components/typography/export';

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
        default: {
          width: '300px',
          padding: '12px',
          boxSizing: 'content-box',
          backgroundColor: theme.palette.black40,
        },
      })}
    >
      <Button isMinWidthAsContent onClick={toggleContent} size={'small'} genre={'gray'}>
        Toggle Content
      </Button>
      <Stack
        sx={(theme) => ({
          default: {
            width: '100px',
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
          One
        </Typography>
      </Stack>
      {content && (
        <Stack
          sx={(theme) => ({
            default: {
              width: '1000px',
              minWidth: '1000px',
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
      )}
    </ScrollComponent>
  );
};

export const Scroll: Story = {
  render: (args) => <ScrollWrapper {...args} />,
  args: { horizontal: true },
};
