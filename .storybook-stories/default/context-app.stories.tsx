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
  <div
    style={{
      backgroundColor: 'darkgoldenrod',
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
  </div>
);
const defaultHeader = (
  <div
    style={{
      backgroundColor: 'lightblue',
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
  </div>
);
const defaultFooter = (
  <div
    style={{
      backgroundColor: 'lightcoral',
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
  </div>
);
const defaultLeftAside = (
  <div
    style={{
      backgroundColor: 'lightgreen',
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
  </div>
);
const defaultRightAside = (
  <div
    style={{
      backgroundColor: 'lightyellow',
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
  </div>
);
const defaultNav = (
  <div
    style={{
      backgroundColor: 'beige',
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
  </div>
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
        variant: 'headline',
        wrap: 'nowrap',
      }}
    >
      Title H1
    </Typography>
    <Typography
      sx={{
        variant: 'headline',
        wrap: 'nowrap',
      }}
    >
      Title H2
    </Typography>
    <Typography
      sx={{
        variant: 'headline',
        wrap: 'nowrap',
      }}
    >
      Title H3
    </Typography>
    <Typography
      sx={{
        variant: 'headline',
        wrap: 'nowrap',
      }}
    >
      Title H4
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
