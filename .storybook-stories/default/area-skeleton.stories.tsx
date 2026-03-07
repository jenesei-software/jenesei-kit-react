import { ISkeleton, Skeleton as SkeletonComponent } from '@local/areas/skeleton';
import { Stack } from '@local/components/stack';
import { Typography } from '@local/components/typography';
import { CSS_VARS } from '@local/styles/utils/constants';

import type { Meta, StoryObj } from '@storybook/react-vite';
import { FC } from 'react';

const meta: Meta<typeof SkeletonComponent> = {
  component: SkeletonComponent,
  title: 'Area/Skeleton',
  args: {
    time: 2000,
  },
};

export default meta;
type Story = StoryObj<typeof SkeletonComponent>;

const SkeletonWrapper: FC<ISkeleton> = (props) => {
  return (
    <SkeletonComponent
      {...props}
      sx={{
        overflow: 'auto',
        borderRadius: '12px',
      }}
    >
      <Stack
        sx={{
          width: '300px',
          height: '300px',
          padding: '12px',
          borderRadius: '6px',
          backgroundColor: CSS_VARS.palette.accentGrayLight,
        }}
      >
        <Typography
          sx={{
            variant: 'body',
          }}
        >
          One
        </Typography>
      </Stack>
    </SkeletonComponent>
  );
};

export const SkeletonOne: Story = {
  render: (args) => <SkeletonWrapper {...args} />,
  args: { visible: true, isHover: true },
};

const SkeletonManyWrapper: FC<ISkeleton> = (props) => {
  return (
    <Stack
      sx={{
        overflow: 'auto',
        flexDirection: 'row',
        gap: '12px',
      }}
    >
      <Stack
        sx={{
          flexDirection: 'column',
          gap: '12px',
        }}
      >
        <SkeletonComponent
          {...props}
          color='productPrimary'
          type='primary'
          sx={{
            borderRadius: '6px',
          }}
        >
          <Stack
            sx={{
              width: '300px',
              height: '300px',
              padding: '12px',
              borderRadius: '6px',
              backgroundColor: CSS_VARS.palette.accentRedLight,
            }}
          >
            <Typography
              sx={{
                variant: 'title-2',
              }}
            >
              Title 2
            </Typography>
          </Stack>
        </SkeletonComponent>
        <Stack
          sx={{
            flexDirection: 'row',
            gap: '12px',
          }}
        >
          <SkeletonComponent
            {...props}
            sx={{
              borderRadius: '100%',
            }}
            type='primary'
          >
            <Stack
              sx={{
                width: '50px',
                height: '50px',
                padding: '12px',
                flexShrink: 0,
                borderRadius: '100%',
                backgroundColor: CSS_VARS.palette.accentCyanLight,
              }}
            >
              <Typography
                sx={{
                  variant: 'body',
                }}
              >
                One
              </Typography>
            </Stack>
          </SkeletonComponent>
          <SkeletonComponent
            {...props}
            sx={{
              borderRadius: '6px',
              flexGrow: 1,
            }}
            type='secondary'
          >
            <Stack
              sx={{
                width: '100%',
                height: '50px',
                borderRadius: '6px',
                padding: '12px',
                flexGrow: 1,
                backgroundColor: CSS_VARS.palette.accentIndigoLight,
              }}
            >
              <Typography
                sx={{
                  variant: 'sub-headline',
                }}
              >
                One
              </Typography>
            </Stack>
          </SkeletonComponent>
        </Stack>
      </Stack>
      <Stack
        sx={{
          flexDirection: 'column',
          gap: '12px',
        }}
      >
        <SkeletonComponent
          {...props}
          color='productPrimary'
          type='primary'
          sx={{
            borderRadius: '6px',
          }}
        >
          <Stack
            sx={{
              width: '300px',
              height: '300px',
              padding: '12px',
              borderRadius: '6px',
              backgroundColor: CSS_VARS.palette.accentRedLight,
            }}
          >
            <Typography
              sx={{
                variant: 'title-2',
              }}
            >
              Title 2
            </Typography>
          </Stack>
        </SkeletonComponent>
        <Stack
          sx={{
            flexDirection: 'row',
            gap: '12px',
          }}
        >
          <SkeletonComponent
            {...props}
            sx={{
              borderRadius: '100%',
            }}
            type='primary'
          >
            <Stack
              sx={{
                width: '50px',
                height: '50px',
                padding: '12px',
                flexShrink: 0,
                borderRadius: '100%',
                backgroundColor: CSS_VARS.palette.accentCyanLight,
              }}
            >
              <Typography
                sx={{
                  variant: 'body',
                }}
              >
                One
              </Typography>
            </Stack>
          </SkeletonComponent>
          <SkeletonComponent
            {...props}
            sx={{
              borderRadius: '6px',
              flexGrow: 1,
            }}
            type='secondary'
          >
            <Stack
              sx={{
                width: '100%',
                height: '50px',
                borderRadius: '6px',
                padding: '12px',
                flexGrow: 1,
                backgroundColor: CSS_VARS.palette.accentIndigoLight,
              }}
            >
              <Typography
                sx={{
                  variant: 'sub-headline',
                }}
              >
                One
              </Typography>
            </Stack>
          </SkeletonComponent>
        </Stack>
      </Stack>
    </Stack>
  );
};

export const SkeletonMany: Story = {
  render: (args) => <SkeletonManyWrapper {...args} />,
  args: {
    visible: true,
    isHover: true,
  },
};
