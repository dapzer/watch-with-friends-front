import React, { FC } from 'react';

interface LayoutProps {
  children: React.ReactNode
}

export const Layout: FC<LayoutProps> = (props) => {
  return (
    <div className={'layout'}>
      <main>{props.children}</main>
    </div>
  );
};
