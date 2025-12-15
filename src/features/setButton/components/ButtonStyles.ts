import styled from 'styled-components';
import { SimpleBtnProps, GradationBtnProps } from '../../../types';

// SimpleBtn
export const SimpleBtn = styled.a<SimpleBtnProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.5rem 0;
    width: 100%;
    height: 100%;
    border-radius: ${({$borderRadius}) => $borderRadius}px;
    background-color: ${({$backgroundColor}) => $backgroundColor};
    color: ${({$textColor}) => $textColor};
    cursor: pointer;
    transition: 0.3s ease-in-out;

    &:hover {
        opacity: 0.9;
    }
`;

// GradationBtn
export const GradationBtn = styled.a<GradationBtnProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.5rem 0;
    width: 100%;
    height: 100%;
    border-radius: ${({$borderRadius}) => $borderRadius}px;
    background: ${({$gradationColor1, $gradationColor2, $gradationColor3, $gradationColor4}) =>
            `linear-gradient(90deg, ${$gradationColor1}, ${$gradationColor2}, ${$gradationColor3}, ${$gradationColor4})`};
    background-size: 400%;
    color: ${({$textColor}) => $textColor};
    cursor: pointer;
    transition: 0.3s ease-in-out;

    &:hover {
        animation-name: gradient;
        animation-duration: 8s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
    }

    /* gradient animation */
    @keyframes gradient {
        0% {
            background-position: 0%;
        }
        100% {
            background-position: 400%;
        }
    }
`;
