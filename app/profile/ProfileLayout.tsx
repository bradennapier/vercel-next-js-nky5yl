'use client';

import React from 'react';

import styled, { css } from 'styled-components';

export const d = 'anything!';

export const Wrapper = styled.div`
  display: flex;
  > div {
    padding: 15px;
  }
`;

export function ProfileLayout({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Wrapper>
      <div
        className={className}
        css={css`
          color: red;
        `}
      >
        Hi!
      </div>
      <div>Hello</div>
      {children}
    </Wrapper>
  );
}
