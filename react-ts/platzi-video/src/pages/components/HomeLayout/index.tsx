import React from 'react';

interface LayoutProps {
  children: JSX.Element
}

export function HomeLayout(props: LayoutProps): JSX.Element {
  return (
    <section>
      {props.children}
    </section>
  )
}
