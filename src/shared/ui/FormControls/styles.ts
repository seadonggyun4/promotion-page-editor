import styled from "styled-components";

// 모달 메뉴 탭
export const ModalMenu = styled.ul`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1.25rem;
    padding: 0.5rem;
    background: var(--c-background-quaternary);
    border-radius: 12px;

    & li {
        display: inline-flex;
        flex-shrink: 0;
        align-items: center;
        justify-content: center;
        height: 32px;
        padding: 0 0.75rem;
        font-weight: 600;
        font-size: 0.8rem;
        color: var(--c-text-secondary);
        background: transparent;
        border-radius: 8px;
        cursor: pointer;
        transition: all 0.2s ease;
    }

    & li:hover {
        color: var(--c-primary);
        background: var(--c-background-tertiary);
    }

    & li.active {
        color: var(--c-primary-dark);
        background: var(--c-background-secondary);
        box-shadow: var(--neu-shadow-sm);
    }
`;

// 설정 폼 컨테이너
export const SettingForm = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.875rem;
    height: 100%;
    max-height: 380px;
    overflow-y: auto;
    padding: 0.5rem;

    &::-webkit-scrollbar {
        width: 6px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
        border-radius: 3px;
    }

    &::-webkit-scrollbar-thumb {
        background: var(--c-primary-pastel);
        border-radius: 3px;
    }

    /* Range input 뉴모피즘 스타일 */
    & input[type="range"] {
        -webkit-appearance: none;
        width: 100%;
        height: 8px;
        background: var(--c-background-quaternary);
        border-radius: 4px;
        box-shadow: var(--neu-shadow-inset);
        outline: none;

        &::-webkit-slider-thumb {
            -webkit-appearance: none;
            width: 20px;
            height: 20px;
            background: linear-gradient(135deg, var(--c-primary-light) 0%, var(--c-primary) 100%);
            border-radius: 50%;
            cursor: pointer;
            box-shadow: 0 2px 8px rgba(139, 92, 246, 0.4);
            transition: all 0.2s ease;
        }

        &::-webkit-slider-thumb:hover {
            transform: scale(1.1);
            box-shadow: 0 4px 12px rgba(139, 92, 246, 0.5);
        }
    }
`;

// 폼 라벨
export const StyledLabel = styled.label`
    color: var(--c-text-action);
    font-size: 0.8rem;
    font-weight: 600;
    margin-top: 0.5rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
`;

// 텍스트 입력 필드
export const StyledInput = styled.input`
    padding: 0.75rem 1rem;
    border: none;
    border-radius: 12px;
    outline: none;
    font-size: 0.9rem;
    transition: all 0.2s ease;
    background: var(--c-background-tertiary);
    box-shadow: var(--neu-shadow-inset);
    color: var(--text-primary);

    &:focus {
        background: var(--c-background-secondary);
        box-shadow: var(--neu-shadow-pressed), 0 0 0 2px var(--c-primary-pastel);
    }

    &::placeholder {
        color: var(--c-text-muted);
    }
`;

// 그라데이션 색상 그리드
export const ColorGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.75rem;
    padding: 0.5rem 0;
`;

// 그라데이션 색상 아이템
export const ColorGridItem = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem;
    background: var(--c-background-tertiary);
    border-radius: 12px;
    box-shadow: var(--neu-shadow-sm);
`;
