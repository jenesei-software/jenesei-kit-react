import { Accordion, AccordionProps } from '@local/components/accordion';
import { Button } from '@local/components/button';
import { Stack } from '@local/components/stack';
import { Typography } from '@local/components/typography';

import type { Meta, StoryObj } from '@storybook/react-vite';
import { FC, useCallback, useState } from 'react';

const meta: Meta<typeof Accordion> = {
  component: Accordion,
  title: 'Component/Accordion',
};

export default meta;

type Story = StoryObj<typeof Accordion>;

const MultiLevelAccordionWrapper: FC<AccordionProps> = (props) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const [expandedTwo, setExpandedTwo] = useState<boolean>(false);
  const [expandedThree, setExpandedThree] = useState<boolean>(false);

  const changeExpanded = useCallback(() => {
    setExpanded((prevState) => !prevState);
  }, []);

  const onClickSummary = useCallback(() => {
    changeExpanded();
  }, [changeExpanded]);

  const onClickIcon = useCallback(() => {
    changeExpanded();
  }, [changeExpanded]);

  const changeExpandedTwo = useCallback(() => {
    setExpandedTwo((prevState) => !prevState);
  }, []);

  const onClickSummaryTwo = useCallback(() => {
    changeExpandedTwo();
  }, [changeExpandedTwo]);

  const onClickIconTwo = useCallback(() => {
    changeExpandedTwo();
  }, [changeExpandedTwo]);

  const changeExpandedThree = useCallback(() => {
    setExpandedThree((prevState) => !prevState);
  }, []);

  const onClickSummaryThree = useCallback(() => {
    changeExpandedThree();
  }, [changeExpandedThree]);

  const onClickIconThree = useCallback(() => {
    changeExpandedThree();
  }, [changeExpandedThree]);
  return (
    <Accordion
      {...props}
      expanded={expanded}
      triggerUpdate={[expanded, expandedTwo, expandedThree]}
      onClickSummary={onClickSummary}
      onClickIcon={onClickIcon}
      accordionDetails={
        <Stack
          sx={() => ({
            default: {
              gap: '10px',
              flexDirection: 'column',
              paddingTop: '6px',
            },
          })}
        >
          <Accordion
            accordionSummary={
              <Button
                sx={{
                  default: {
                    justifyContent: 'space-between',
                    width: '100%',
                  },
                }}
                genre={'productBorder'}
                size={'medium'}
                icons={[
                  {
                    type: 'id',
                    name: 'Folder',
                    turn: expandedTwo ? 180 : 0,
                  },
                ]}
              >
                Show more
              </Button>
            }
            accordionDetails={
              <Stack
                sx={() => ({
                  default: {
                    gap: '10px',
                    flexDirection: 'column',
                    paddingTop: '6px',
                  },
                })}
              >
                <Button
                  sx={{
                    default: {
                      justifyContent: 'flex-start',
                      width: '100%',
                    },
                  }}
                  genre={'gray'}
                  size={'medium'}
                >
                  First
                </Button>
                <Button
                  sx={{
                    default: {
                      justifyContent: 'flex-start',
                      width: '100%',
                    },
                  }}
                  genre={'black'}
                  size={'medium'}
                >
                  Second
                </Button>
                <Button
                  sx={{
                    default: {
                      justifyContent: 'flex-start',
                      width: '100%',
                    },
                  }}
                  genre={'greenTransparent'}
                  size={'medium'}
                >
                  Third
                </Button>
              </Stack>
            }
            expanded={expandedTwo}
            onClickSummary={onClickSummaryTwo}
            onClickIcon={onClickIconTwo}
            wrapperProps={{
              sx: {
                default: {
                  padding: '0px',
                  width: '100%',
                },
              },
            }}
          />
          <Accordion
            accordionSummary={
              <Button
                sx={{
                  default: {
                    justifyContent: 'flex-start',
                    width: '100%',
                  },
                }}
                genre={'grayBorder'}
                size={'medium'}
              >
                Show more more
              </Button>
            }
            accordionDetails={
              <Stack
                sx={() => ({
                  default: {
                    gap: '10px',
                    flexDirection: 'column',
                    paddingTop: '6px',
                  },
                })}
              >
                <Button
                  sx={{
                    default: {
                      justifyContent: 'flex-start',
                      width: '100%',
                    },
                  }}
                  genre={'gray'}
                  size={'medium'}
                >
                  First
                </Button>
                <Button
                  sx={{
                    default: {
                      justifyContent: 'flex-start',
                      width: '100%',
                    },
                  }}
                  genre={'black'}
                  size={'medium'}
                >
                  Second
                </Button>
                <Button
                  sx={{
                    default: {
                      justifyContent: 'flex-start',
                      width: '100%',
                    },
                  }}
                  genre={'greenTransparent'}
                  size={'medium'}
                >
                  Third
                </Button>
              </Stack>
            }
            expanded={expandedThree}
            onClickSummary={onClickSummaryThree}
            onClickIcon={onClickIconThree}
            wrapperProps={{
              sx: {
                default: {
                  padding: '0px',
                  width: '100%',
                },
              },
            }}
          />
        </Stack>
      }
    />
  );
};

const OneLevelAccordionWrapper: FC<AccordionProps> = (props) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const changeExpanded = useCallback(() => {
    setExpanded((prevState) => !prevState);
  }, []);

  const onClickSummary = useCallback(() => {
    changeExpanded();
  }, [changeExpanded]);

  const onClickIcon = useCallback(() => {
    changeExpanded();
  }, [changeExpanded]);
  return (
    <Accordion
      {...props}
      expanded={expanded}
      triggerUpdate={[expanded]}
      onClickSummary={onClickSummary}
      onClickIcon={onClickIcon}
      accordionDetails={
        <Stack
          sx={() => ({
            default: {
              gap: '10px',
              flexDirection: 'column',
              paddingTop: '6px',
            },
          })}
        >
          <Button
            sx={{
              default: {
                justifyContent: 'flex-start',
                width: '100%',
              },
            }}
            genre={'gray'}
            size={'medium'}
          >
            First
          </Button>
          <Button
            sx={{
              default: {
                justifyContent: 'flex-start',
                width: '100%',
              },
            }}
            genre={'black'}
            size={'medium'}
          >
            Second
          </Button>
          <Button
            sx={{
              default: {
                justifyContent: 'flex-start',
                width: '100%',
              },
            }}
            genre={'greenTransparent'}
            size={'medium'}
          >
            Third
          </Button>
        </Stack>
      }
    />
  );
};

export const OneLevel: Story = {
  render: (args) => <OneLevelAccordionWrapper {...args} />,
  args: {
    isAccordionIcon: true,
    accordionSummary: (
      <Stack
        sx={{
          default: {
            padding: '10px',
            width: '200px',
            cursor: 'pointer',
          },
        }}
      >
        <Typography
          sx={{
            default: {
              variant: 'h4',
              isHoverUnderlining: true,
            },
          }}
        >
          Show
        </Typography>
      </Stack>
    ),
    wrapperProps: {
      sx: {
        default: {
          padding: '0px',
          width: '100%',
          maxWidth: '300px',
        },
      },
    },
  },
};

export const MultiLevel: Story = {
  render: (args) => <MultiLevelAccordionWrapper {...args} />,
  args: {
    isAccordionIcon: true,
    accordionSummary: (
      <Stack
        sx={{
          default: {
            padding: '10px',
            width: '200px',
            cursor: 'pointer',
          },
        }}
      >
        <Typography
          sx={{
            default: {
              variant: 'h4',
              isHoverUnderlining: true,
            },
          }}
        >
          MultiLevel
        </Typography>
      </Stack>
    ),
    wrapperProps: {
      sx: {
        default: {
          padding: '0px',
          width: '100%',
          maxWidth: '300px',
        },
      },
    },
  },
};
