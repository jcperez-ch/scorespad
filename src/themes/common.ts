import Link from '@/components/common/Link';

export default {
  cssVariables: true,
  components: {
    MuiAvatar: {
      styleOverrides: {
        root: {
          backgroundColor: 'var(--mui-palette-text-primary)',
          color: 'var(--mui-palette-background-default)',
        },
      },
    },
    MuiLink: {
      defaultProps: {
        component: Link,
      },
    },
  },
};
