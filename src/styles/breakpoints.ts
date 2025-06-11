const rem = (px: number) => px / 16;

export const breakpoints = {
  tabletAfter: rem(992 + 0.02) + 'rem',
  tablet: rem(992) + 'rem',
  tabletBefore: rem(992 - 0.02) + 'rem',

  mobileAfter: rem(768 + 0.02) + 'rem',
  mobile: rem(768) + 'rem',
  mobileBefore: rem(768 - 0.02) + 'rem',

  mobileMediumAfter: rem(600 + 0.02) + 'rem',
  mobileMedium: rem(600) + 'rem',
  mobileMediumBefore: rem(600 - 0.02) + 'rem',

  mobileSmallAfter: rem(375 + 0.02) + 'rem',
  mobileSmall: rem(375) + 'rem',
};
