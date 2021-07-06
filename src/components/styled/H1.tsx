import React, { ReactElement } from 'react'
import styled from 'styled-components';
interface Props {
    title: string,
    color?: string;
    fontsize?: string;
}
interface StylesProps {
    color?: string;
    fontsize?: string;
}
export default function H1({ title, color, fontsize }: Props): ReactElement {
    return (
        <TitleH1 color={color} fontsize={fontsize}>
            {title}
        </TitleH1>
    )
}
const TitleH1 = styled.h1 <StylesProps>`
 color: ${({ color }) => color ? color : "red"};
 font-size: ${({ fontsize }) => fontsize ? fontsize : "2rem"};
`