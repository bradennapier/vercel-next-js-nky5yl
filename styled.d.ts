// import type * as _styled from 'styled-components/cssprop';
import type { CSSProp, css } from 'types/Ero';
import type * as _React from 'react';

type RealCSSProp =
  | string
  | Partial<Exclude<CSSProp, string>>
  | Partial<Exclude<CSSProp, string>>[]
  | ReturnType<typeof css>
  | undefined;

declare module 'react' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Attributes {
    // NOTE: unlike the plain javascript version, it is not possible to get access
    // to the element's own attributes inside function interpolations.
    // Only theme will be accessible, and only with the DefaultTheme due to the global
    // nature of this declaration.
    // If you are writing this inline you already have access to all the attributes anyway,
    // no need for the extra indirection.
    /**
     * If present, this React element will be converted by
     * `babel-plugin-styled-components` into a styled component
     * with the given css as its styles.
     */
    css?: RealCSSProp;
  }
}
