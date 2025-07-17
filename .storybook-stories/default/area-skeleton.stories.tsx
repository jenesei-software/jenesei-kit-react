import type { Meta, StoryObj } from '@storybook/react-vite';
import { FC } from 'react';
import 'styled-components';

import { Skeleton as SkeletonComponent, SkeletonProps } from '@local/areas/skeleton';
import { Stack } from '@local/components/stack';
import { Typography } from '@local/components/typography';

const meta: Meta<typeof SkeletonComponent> = {
  component: SkeletonComponent,
  title: 'Area/Skeleton',
};

export default meta;
type Story = StoryObj<typeof SkeletonComponent>;

const SkeletonWrapper: FC<SkeletonProps> = (props) => {
  return (
    <SkeletonComponent
      {...props}
      sx={{
        default: {
          overflow: 'auto',
          width: '300px',
          height: '300px',
          borderRadius: '12px',
        },
      }}
    >
      <Stack
        sx={(theme) => ({
          default: {
            width: '100%',
            height: '100%',
            padding: '12px',
            borderRadius: '6px',
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
    </SkeletonComponent>
  );
};

export const SkeletonOne: Story = {
  render: (args) => <SkeletonWrapper {...args} />,
  args: { visible: true, isHover: true },
};

const SkeletonManyWrapper: FC<SkeletonProps> = (props) => {
  return (
    <Stack
      sx={{
        default: {
          overflow: 'auto',
          flexDirection: 'row',
          gap: '12px',
        },
      }}
    >
      <Stack
        sx={{
          default: {
            flexDirection: 'column',
            gap: '12px',
          },
        }}
      >
        <SkeletonComponent
          {...props}
          type='primary'
          sx={() => ({
            default: {
              width: '300px',
              height: '300px',
              padding: '12px',
            },
          })}
        >
          <Stack
            sx={(theme) => ({
              default: {
                width: '100%',
                height: '100%',
                padding: '12px',
                borderRadius: '6px',
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
        </SkeletonComponent>
        <Stack
          sx={{
            default: {
              flexDirection: 'row',
              gap: '12px',
            },
          }}
        >
          <SkeletonComponent
            {...props}
            sx={() => ({
              default: {
                width: '50px',
                height: '50px',
                borderRadius: '100%',
              },
            })}
            type='secondary'
          >
            <Stack
              sx={(theme) => ({
                default: {
                  width: '100%',
                  height: '100%',
                  padding: '12px',
                  borderRadius: '6px',
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
          </SkeletonComponent>
          <SkeletonComponent
            {...props}
            sx={() => ({
              default: {
                height: '50px',
                borderRadius: '6px',
                flexGrow: 1,
              },
            })}
            type='secondary'
          >
            <Stack
              sx={(theme) => ({
                default: {
                  width: '100%',
                  height: '100%',
                  padding: '12px',
                  borderRadius: '6px',
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
          </SkeletonComponent>
        </Stack>
      </Stack>
      <Stack
        sx={{
          default: {
            flexDirection: 'column',
            gap: '12px',
          },
        }}
      >
        <SkeletonComponent
          {...props}
          type='primary'
          sx={() => ({
            default: {
              width: '300px',
              height: '300px',
              padding: '12px',
            },
          })}
        >
          <Stack
            sx={(theme) => ({
              default: {
                width: '100%',
                height: '100%',
                padding: '12px',
                borderRadius: '6px',
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
        </SkeletonComponent>
        <Stack
          sx={{
            default: {
              flexDirection: 'row',
              gap: '12px',
            },
          }}
        >
          <SkeletonComponent
            {...props}
            sx={() => ({
              default: {
                width: '50px',
                height: '50px',
                borderRadius: '100%',
              },
            })}
            type='secondary'
          >
            <Stack
              sx={(theme) => ({
                default: {
                  width: '100%',
                  height: '100%',
                  padding: '12px',
                  borderRadius: '6px',
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
          </SkeletonComponent>
          <SkeletonComponent
            {...props}
            sx={() => ({
              default: {
                height: '50px',
                borderRadius: '6px',
                flexGrow: 1,
              },
            })}
            type='secondary'
          >
            <Stack
              sx={(theme) => ({
                default: {
                  width: '100%',
                  height: '100%',
                  padding: '12px',
                  borderRadius: '6px',
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
