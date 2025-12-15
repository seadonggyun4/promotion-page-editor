import styled from 'styled-components';
import { ButtonSetModal } from './ButtonSetModal';
import { BTN_STYLE } from '@/shared/constants';
import { useElementsStore } from '@/shared/store';
import { ButtonStyle } from '@/shared/types';
import { SimpleBtn, GradationBtn } from '@/entities/button';

export function ButtonBox() {
    const { selected, setSelected } = useElementsStore();

    const setSelectedBtn = (style: ButtonStyle) => {
        setSelected({
            id: '',
            type: 'button',
            style,
            styleData: BTN_STYLE[style],
            x: 0,
            y: 0,
        });
    };

    return (
        <ButtonBoxStyle>
            <ButtonWrapper onClick={() => setSelectedBtn('SimpleBtn')}>
                <SimpleBtn
                    $backgroundColor={BTN_STYLE['SimpleBtn']['backgroundColor']}
                    $textColor={BTN_STYLE['SimpleBtn']['textColor']}
                    $borderRadius={Number(BTN_STYLE['SimpleBtn']['borderRadius'])}
                >
                    {BTN_STYLE['SimpleBtn']['buttonText']}
                </SimpleBtn>
            </ButtonWrapper>
            <ButtonWrapper onClick={() => setSelectedBtn('GradationBtn')}>
                <GradationBtn
                    $textColor={BTN_STYLE['GradationBtn']['textColor']}
                    $gradationColor1={BTN_STYLE['GradationBtn']['gradationColor1']}
                    $gradationColor2={BTN_STYLE['GradationBtn']['gradationColor2']}
                    $gradationColor3={BTN_STYLE['GradationBtn']['gradationColor3']}
                    $gradationColor4={BTN_STYLE['GradationBtn']['gradationColor4']}
                    $borderRadius={Number(BTN_STYLE['GradationBtn']['borderRadius'])}
                >
                    {BTN_STYLE['GradationBtn']['buttonText']}
                </GradationBtn>
            </ButtonWrapper>
            {selected?.type === 'button' && (
                <ButtonSetModal
                    selectedBtn={selected?.style}
                    closeModal={() => setSelected(null)}
                />
            )}
        </ButtonBoxStyle>
    );
}

const ButtonBoxStyle = styled.article`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const ButtonWrapper = styled.div`
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
        transform: scale(1.02);
    }

    &:active {
        transform: scale(0.98);
    }
`;
