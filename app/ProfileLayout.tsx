'use client';

import React from 'react';

import styled, { css } from 'styled-components';

// export const d = 'anything!';

export const Wrapper = styled.div`
  display: flex;
  > div {
    padding: 25px;
  }
`;

export function ProfileLayout({ children }: { children: React.ReactNode }) {
  return (
    <Wrapper>
      <div>Hi!</div>
      <div>Hello</div>
      {children}
    </Wrapper>
  );
}
