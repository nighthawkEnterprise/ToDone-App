import * as React from "react";

export interface NavigationProps {
  as?: React.ElementType;
  /** Text for the "Features" nav item */
  navbarLinkFeatures?: React.ReactNode;
  /** Text for the "Products" nav item */
  navbarLinkProducts?: React.ReactNode;
  /** Text for the "Resources" nav item */
  navbarLinkResources?: React.ReactNode;
  /** Text for the "Contact" nav item */
  navbarLinkContact?: React.ReactNode;
}

declare function Navigation(props: NavigationProps): React.JSX.Element;

export { Navigation, NavigationProps };
