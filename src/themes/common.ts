import Link from '@/components/common/Link';

export default {
  cssVariables: true,
  components: {
    MuiLink: {
      defaultProps: {
        component: Link,
      },
    },
  },
};
