import styled from '@emotion/styled'
import React from 'react'

type HedvigSymbolProps = {
  color?: string
  size?: number
}

const Svg = styled.svg`
  fill: ${(props) => props.color ?? 'currentColor'};
`

export const HedvigSymbol: React.FC<HedvigSymbolProps> = ({
  color,
  size = 24,
}) => (
  <Svg
    width={String(size)}
    height={String(size)}
    color={color}
    viewBox="0 0 24 24"
  >
    <path d="M8.456 11.19h7.088V5.468h1.62v13.064h-1.62V12.81H8.456v5.722H6.785V5.468h1.67v5.722z" />
    <path
      fillRule="evenodd"
      d="M0 12C0 5.367 5.367 0 12 0s12 5.367 12 12-5.367 12-12 12S0 18.633 0 12zm1.62 0c0 5.721 4.658 10.38 10.38 10.38 5.721 0 10.38-4.659 10.38-10.38C22.38 6.278 17.72 1.62 12 1.62 6.278 1.62 1.62 6.278 1.62 12z"
      clipRule="evenodd"
    />
  </Svg>
)
