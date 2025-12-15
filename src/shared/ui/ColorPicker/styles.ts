import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
`;

export const CircleInput = styled.input`
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 36px;
    height: 36px;
    border: 3px solid var(--c-background-secondary);
    border-radius: 50%;
    cursor: pointer;
    box-shadow: var(--neu-shadow-sm);
    flex-shrink: 0;
    transition: all 0.2s ease;

    &::-webkit-color-swatch-wrapper {
        padding: 0;
    }

    &::-webkit-color-swatch {
        border: none;
        border-radius: 50%;
    }

    &::-moz-color-swatch {
        border: none;
        border-radius: 50%;
    }

    &:hover {
        transform: scale(1.05);
        box-shadow: var(--neu-shadow);
    }

    &:focus {
        outline: none;
        box-shadow: var(--neu-shadow), 0 0 0 2px var(--c-primary-pastel);
    }
`;

export const TextInput = styled.input`
    width: 85px;
    font-size: 0.75rem;
    font-family: 'SF Mono', 'Monaco', monospace;
    color: var(--text-primary);
    background: var(--c-background-tertiary);
    padding: 0.5rem 0.625rem;
    border: none;
    border-radius: 8px;
    outline: none;
    transition: all 0.2s ease;
    text-transform: uppercase;
    box-shadow: var(--neu-shadow-inset);
    letter-spacing: 0.5px;

    &:focus {
        background: var(--c-background-secondary);
        box-shadow: var(--neu-shadow-pressed), 0 0 0 2px var(--c-primary-pastel);
    }

    &:hover:not(:focus) {
        background: var(--c-background-secondary);
    }
`;
