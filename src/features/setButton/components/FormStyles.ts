import styled from "styled-components";

// 모달 메뉴 탭
export const ModalMenu = styled.ul`
    display: flex;
    align-items: center;
    column-gap: 1rem;
    margin-bottom: 2rem;

    & li {
        display: inline-flex;
        flex-shrink: 0;
        align-items: center;
        height: 30px;
        font-weight: 500;
        color: inherit;
        border-bottom: 3px solid transparent;
        text-decoration: none;
        cursor: pointer;
        transition: 0.15s ease;
    }

    & li:hover,
    & li.active {
        color: var(--c-accent-primary);
        border-bottom-color: var(--c-accent-primary);
    }
`;

// 설정 폼 컨테이너
export const SettingForm = styled.div`
    display: flex;
    justify-content: start;
    flex-direction: column;
    row-gap: 0.5rem;
    height: 100%;
    max-height: 350px;
`;

// 폼 라벨
export const StyledLabel = styled.label`
    color: var(--c-text-action);
    text-transform: uppercase;
    font-size: 1rem;
`;

// 텍스트 입력 필드
export const StyledInput = styled.input`
    margin-bottom: 1.5rem;
    padding: 0.5rem;
    border: 2px solid var(--c-border-primary);
    border-radius: 5px;
    outline: none;
    transition: 0.3s ease-in-out;

    &:focus {
        border: 2px solid var(--c-accent-primary);
    }
`;

// 색상 선택 라벨
export const StyledColorLabel = styled.label`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 2em;
    color: #ffffff;
    background-color: var(--c-border-primary);
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s ease-in-out;

    &:hover {
        background-color: var(--c-accent-primary);
    }
`;

// 색상 입력 래퍼
export const ColorInputWrapper = styled.div`
    position: relative;
    margin-bottom: 1.5rem;
`;

// 숨겨진 색상 입력
export const HiddenColorInput = styled.input`
    visibility: hidden;
`;
