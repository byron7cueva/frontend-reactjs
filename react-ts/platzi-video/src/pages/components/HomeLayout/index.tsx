import React from 'react';

import './home-layout.css';

interface LayoutProps {
  children: JSX.Element[]
}

export function HomeLayout(props: LayoutProps): JSX.Element {
  return (
    <section className="HomeLayout">
      {props.children}
    </section>
  )
}
