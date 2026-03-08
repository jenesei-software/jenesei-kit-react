import { Stack } from '@local/components/stack';
import { Typography } from '@local/components/typography';
import { ProviderApp } from '@local/contexts/context-app';

import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof ProviderApp> = {
  component: ProviderApp,
  title: 'Context/App',
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
        default: {
          variant: 'h8',
          wrap: 'nowrap',
        },
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
        default: {
          variant: 'h5',
          wrap: 'nowrap',
        },
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
        default: {
          variant: 'h5',
        },
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
        default: {
          variant: 'h6',
        },
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
        default: {
          variant: 'h6',
        },
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
        default: {
          variant: 'h6',
        },
      }}
    >
      Nav
    </Typography>
  </div>
);
const defaultChildren = (
  <Stack
    sx={(theme) => ({
      default: {
        backgroundColor: theme.palette.whiteStandard,
        padding: '10px',
        flexDirection: 'column',
        height: 'fit-content',
      },
      breakpoints: {
        tablet: {
          backgroundColor: theme.palette.whiteJanice,
          padding: '10px',
        },
        mobile: {
          backgroundColor: theme.palette.grayMonica,
          padding: '10px',
        },
      },
    })}
  >
    <Typography
      sx={{
        default: {
          variant: 'h1',
        },
      }}
    >
      Title H1
    </Typography>
    <Typography
      sx={{
        default: {
          variant: 'h2',
        },
      }}
    >
      Title H2
    </Typography>
    <Typography
      sx={{
        default: {
          variant: 'h3',
        },
      }}
    >
      Title H3
    </Typography>
    <Typography
      sx={{
        default: {
          variant: 'h4',
        },
      }}
    >
      Title H4
    </Typography>
    <Typography
      sx={{
        default: {
          variant: 'h5',
        },
      }}
    >
      Title H5
    </Typography>
    <Typography
      sx={{
        default: {
          variant: 'h6',
        },
      }}
    >
      Title H6
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
            default: {
              variant: 'h6',
              weight: 700,
            },
          }}
        >
          Loading
        </Typography>
      ),
    },
    defaultBgColor: 'whiteStandard',
    isScrollOutlet: false,
    defaultTitle: 'Storybook?',
    defaultDescription: 'Description from Storybook?',
    notification: {
      component: defaultNotification,
      length: {
        default: '20px',
        tablet: '20px',
        mobile: null,
      },
    },
    header: {
      component: defaultHeader,
      length: {
        default: '80px',
        tablet: '60px',
        mobile: '40px',
      },
    },
    leftAside: {
      component: defaultLeftAside,
      length: {
        default: '180px',
        tablet: '160px',
        mobile: null,
      },
    },
    nav: {
      component: defaultNav,
      length: {
        default: '80px',
        tablet: '60px',
        mobile: '40px',
      },
    },
    rightAside: {
      component: defaultRightAside,
      length: {
        default: '180px',
        tablet: '160px',
        mobile: null,
      },
    },
    footer: {
      component: defaultFooter,
      length: {
        default: '80px',
        tablet: '60px',
        mobile: '40px',
      },
    },
    children: defaultChildren,
  },
};

export const AsideDifferentTop: Story = {
  render: (args) => <ProviderApp {...args} />,
  args: {
    defaultBgColor: 'black40',
    isScrollOutlet: true,
    header: {
      component: defaultHeader,
      length: {
        default: '80px',
        tablet: '60px',
        mobile: '40px',
      },
    },
    nav: {
      component: defaultNav,
      length: {
        default: '80px',
        tablet: '60px',
        mobile: '40px',
      },
    },
    leftAside: {
      component: defaultLeftAside,
      length: {
        default: '80px',
        tablet: '60px',
        mobile: null,
      },
      isTopNav: true,
    },
    rightAside: {
      component: defaultRightAside,
      length: {
        default: '80px',
        tablet: '60px',
        mobile: null,
      },
      isTopFooter: true,
      isTopHeader: true,
    },
    footer: {
      component: defaultFooter,
      length: {
        default: '80px',
        tablet: '60px',
        mobile: '40px',
      },
    },
    children: defaultChildren,
  },
};

export const WithoutAsides: Story = {
  render: (args) => <ProviderApp {...args} />,
  args: {
    defaultBgColor: 'black50',
    isScrollOutlet: false,
    header: {
      component: defaultHeader,
      length: {
        default: '80px',
        tablet: '60px',
        mobile: '40px',
      },
    },
    footer: {
      component: defaultFooter,
      length: {
        default: '80px',
        tablet: '60px',
        mobile: null,
      },
    },
    children: defaultChildren,
  },
};
