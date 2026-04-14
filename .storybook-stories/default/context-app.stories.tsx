import { Stack } from '@local/components/stack';
import { Typography } from '@local/components/typography';
import { ProviderApp } from '@local/contexts/context-app';
import { CSS_VARS } from '@local/styles/utils';

import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof ProviderApp> = {
  component: ProviderApp,
  title: 'Context/1. App',
};

export default meta;

type Story = StoryObj<typeof ProviderApp>;

const defaultNotification = (
  <Stack
    style={{
      backgroundColor: CSS_VARS.palette.fillPrimaryDark,
      padding: '2px',
      height: '100%',
      width: '100%',
    }}
  >
    <Typography
      sx={{
        variant: 'headline',
        wrap: 'nowrap',
      }}
    >
      Notification
    </Typography>
  </Stack>
);
const defaultHeader = (
  <Stack
    style={{
      backgroundColor: CSS_VARS.palette.fillPrimaryLight,
      padding: '10px',
      height: '100%',
      width: '100%',
    }}
  >
    <Typography
      sx={{
        variant: 'headline',
        wrap: 'nowrap',
      }}
    >
      Header
    </Typography>
  </Stack>
);
const defaultFooter = (
  <Stack
    style={{
      backgroundColor: CSS_VARS.palette.fillSecondaryLight,
      padding: '10px',
      height: '100%',
      width: '100%',
    }}
  >
    <Typography
      sx={{
        variant: 'headline',
        wrap: 'nowrap',
      }}
    >
      Footer
    </Typography>
  </Stack>
);
const defaultLeftAside = (
  <Stack
    style={{
      backgroundColor: CSS_VARS.palette.fillTertiaryLight,
      padding: '10px',
      height: '100%',
      width: '100%',
    }}
  >
    <Typography
      sx={{
        variant: 'headline',
        wrap: 'nowrap',
      }}
    >
      Left Aside
    </Typography>
  </Stack>
);
const defaultRightAside = (
  <Stack
    style={{
      backgroundColor: CSS_VARS.palette.fillQuaternaryLight,
      padding: '10px',
      height: '100%',
      width: '100%',
    }}
  >
    <Typography
      sx={{
        variant: 'headline',
        wrap: 'nowrap',
      }}
    >
      Right Aside
    </Typography>
  </Stack>
);
const defaultNav = (
  <Stack
    style={{
      backgroundColor: CSS_VARS.palette.fillQuinaryLight,
      padding: '10px',
      height: '100%',
      width: '100%',
    }}
  >
    <Typography
      sx={{
        variant: 'headline',
        wrap: 'nowrap',
      }}
    >
      Nav
    </Typography>
  </Stack>
);
const defaultChildren = (
  <Stack
    sx={{
      backgroundColor: CSS_VARS.palette.fillDark,
      padding: '10px',
      flexDirection: 'column',
      height: 'fit-content',
    }}
  >
    <Typography
      sx={{
        variant: 'title-1',
        wrap: 'nowrap',
      }}
    >
      Title 1
    </Typography>
    <Typography
      sx={{
        variant: 'title-2',
        wrap: 'nowrap',
      }}
    >
      Title 2
    </Typography>
    <Typography
      sx={{
        variant: 'title-3',
        wrap: 'nowrap',
      }}
    >
      Title 3
    </Typography>
    <Typography
      sx={{
        variant: 'title-4',
        wrap: 'nowrap',
      }}
    >
      Title 4
    </Typography>
  </Stack>
);

export const Default: Story = {
  args: {
    defaultPreview: {
      defaultVisible: false,
      visible: true,
      minTime: 2000,
      content: (
        <Typography
          sx={{
            variant: 'headline',
            wrap: 'nowrap',
          }}
        >
          Loading
        </Typography>
      ),
    },
    defaultBgColor: 'fillDark',
    isScrollOutlet: false,
    defaultTitle: 'Storybook?',
    defaultDescription: 'Description from Storybook?',
    notification: {
      component: defaultNotification,
      length: {
        default: '20px',
        breakpoint: {
          tablet: '15px',
          mobile: '10px',
        },
      },
    },
    header: {
      component: defaultHeader,
      length: {
        default: '80px',
        breakpoint: {
          tablet: '60px',
          mobile: '40px',
        },
      },
    },
    leftAside: {
      component: defaultLeftAside,
      length: {
        default: '180px',
        breakpoint: {
          tablet: '160px',
          mobile: null,
        },
      },
    },
    nav: {
      component: defaultNav,
      length: {
        default: '80px',
        breakpoint: {
          tablet: '60px',
          mobile: '40px',
        },
      },
    },
    rightAside: {
      component: defaultRightAside,
      length: {
        default: '180px',
        breakpoint: {
          tablet: '160px',
          mobile: null,
        },
      },
    },
    footer: {
      component: defaultFooter,
      length: {
        default: '80px',
        breakpoint: {
          tablet: '60px',
          mobile: '40px',
        },
      },
    },
    children: defaultChildren,
  },
};

export const AsideDifferentTop: Story = {
  render: (args) => <ProviderApp {...args} />,
  args: {
    defaultBgColor: 'fillPrimaryDark',
    isScrollOutlet: true,
    header: {
      component: defaultHeader,
      length: {
        default: '80px',
        breakpoint: {
          tablet: '60px',
          mobile: '40px',
        },
      },
    },
    nav: {
      component: defaultNav,
      length: {
        default: '80px',
        breakpoint: {
          tablet: '60px',
          mobile: '40px',
        },
      },
    },
    leftAside: {
      component: defaultLeftAside,
      length: {
        default: '80px',
        breakpoint: {
          tablet: '60px',
          mobile: null,
        },
      },
      isTopNav: true,
    },
    rightAside: {
      component: defaultRightAside,
      length: {
        default: '80px',
        breakpoint: {
          tablet: '60px',
          mobile: null,
        },
      },
      isTopFooter: true,
      isTopHeader: true,
    },
    footer: {
      component: defaultFooter,
      length: {
        default: '80px',
        breakpoint: {
          tablet: '60px',
          mobile: '40px',
        },
      },
    },
    children: defaultChildren,
  },
};

export const WithoutAsides: Story = {
  render: (args) => <ProviderApp {...args} />,
  args: {
    defaultBgColor: 'fillPrimaryDark',
    isScrollOutlet: false,
    header: {
      component: defaultHeader,
      length: {
        default: '80px',
        breakpoint: {
          tablet: '60px',
          mobile: '40px',
        },
      },
    },
    footer: {
      component: defaultFooter,
      length: {
        default: '80px',
        breakpoint: {
          tablet: '60px',
          mobile: null,
        },
      },
    },
    children: defaultChildren,
  },
};
