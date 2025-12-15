import React from 'react';
import styled from 'styled-components';

// components
import SimpleBtnForm from "./SimpleBtnForm";
import GradationBtnForm from "./GradationBtnForm";
import { SimpleBtn, GradationBtn } from "./ButtonStyles";

// hook & Provider
import { useElementsContext } from "../../../app/provider/ElementsProvider";
import { useSimpleBtn } from "../hook/useSimpleBtn";
import { useGradationBtn } from "../hook/useGradationBtn";

// types
import { ButtonStyle, ButtonStyleDataLegacy } from "../../../types";

interface ButtonSetModalProps {
    selectedBtn: ButtonStyle;
    closeModal: () => void;
}

function ButtonSetModal ({selectedBtn, closeModal}: ButtonSetModalProps) {
    const {createSampleButton, updateSampleButton, selected } = useElementsContext()
    const simpleBtnHook = useSimpleBtn();
    const gradationBtnHook = useGradationBtn()

    // 버튼 스타일 데이터 가져오기
    const getButtonStyleData = (): ButtonStyleDataLegacy => {
        if (selectedBtn === 'SimpleBtn') {
            return simpleBtnHook.buttonStyle;
        }
        return gradationBtnHook.buttonStyle;
    }

    // 미리보기 버튼 렌더링
    const renderPreviewButton = () => {
        if (selectedBtn === 'SimpleBtn') {
            const style = simpleBtnHook.buttonStyle;
            return (
                <SimpleBtn
                    $backgroundColor={style.backgroundColor}
                    $textColor={style.textColor}
                    $borderRadius={style.borderRadius}
                    href={style.buttonLink}
                    target="_blank"
                    onClick={(e) => e.preventDefault()}
                    style={{
                        borderWidth: `${style.borderWidth}px`,
                        borderStyle: 'solid',
                        borderColor: style.borderColor,
                        boxShadow: `${style.shadowOffsetX}px ${style.shadowOffsetY}px ${style.shadowBlurRadius}px ${style.shadowColor}`,
                    }}
                >
                    {style.buttonText}
                </SimpleBtn>
            );
        }

        const style = gradationBtnHook.buttonStyle;
        return (
            <GradationBtn
                $textColor={style.textColor}
                $gradationColor1={style.gradationColor1}
                $gradationColor2={style.gradationColor2}
                $gradationColor3={style.gradationColor3}
                $gradationColor4={style.gradationColor4}
                $borderRadius={style.borderRadius}
                href={style.buttonLink}
                target="_blank"
                onClick={(e) => e.preventDefault()}
                style={{
                    borderWidth: `${style.borderWidth}px`,
                    borderStyle: 'solid',
                    borderColor: style.borderColor,
                    boxShadow: `${style.shadowOffsetX}px ${style.shadowOffsetY}px ${style.shadowBlurRadius}px ${style.shadowColor}`,
                }}
            >
                {style.buttonText}
            </GradationBtn>
        );
    }

    const addButton = () => {
        if(!selected) return
        const styleData = getButtonStyleData();
        if(selected?.id === '') createSampleButton(selectedBtn, styleData, Date.now().toString())
        else updateSampleButton(selected?.id, selectedBtn, styleData)
        closeModal()
    }

    return (
        <ModalWrapper>
            <ModalInner>
                <ElementWrapper>
                    <div style={{width: '200px'}}>
                        {renderPreviewButton()}
                    </div>
                </ElementWrapper>
                <ElementSettingBox>
                    { selectedBtn === 'SimpleBtn' && <SimpleBtnForm simpleBtnHook={simpleBtnHook} /> }
                    { selectedBtn === 'GradationBtn' && <GradationBtnForm gradationBtnHook={gradationBtnHook}/> }
                    <BtnWrapper>
                    <button className="activeBtn" onClick={addButton}>등록</button>
                        <button className="cancelBtn" onClick={closeModal}>취소</button>
                    </BtnWrapper>
                </ElementSettingBox>
            </ModalInner>
        </ModalWrapper>
    )
}

// modal
const ModalWrapper = styled.div`
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    opacity: 0;
    animation: show 0.3s ease-in-out forwards;
    
    @keyframes show {
        0%{
            opacity: 0;
        }
        100%{
            opacity: 1;
        }
    }
`;
const ModalInner = styled.div`
    display: flex;
    align-items: center;
    column-gap: 2rem;
    width: 1000px;
    height: 500px;
    background-color: var(--c-background-secondary);
    border-radius: 15px;
    padding: 20px;
    animation: popUp 0.3s ease-in-out forwards;

    @keyframes popUp {
        0%{
            transform: scale(0.9);
        }
        100%{
            transform: scale(1);
        }
    }
    
`;
const ElementWrapper = styled.div`
    height: 100%;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--c-background-tertiary);
`
const ElementSettingBox = styled.article`
    width: 400px;
    height: 100%;
    border-radius: 15px;
`
// btnWrap
const BtnWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 1rem;
    
    & .activeBtn, & .cancelBtn{
        padding: 0.5rem 1rem;
        border-radius: 5px;
        transition: 0.3s ease-in-out;
    }

    & .activeBtn:hover{
        color: #ffffff;
        background-color: var(--c-accent-primary);
    }

    & .cancelBtn:hover{
        color: #ffffff;
        background-color: var(--c-accent-warning);
    }
`

export default ButtonSetModal;