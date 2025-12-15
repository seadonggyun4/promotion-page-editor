// useElements.ts
import { useState } from "react";
import { ElementData, ButtonStyle, ButtonStyleDataLegacy } from "../../types";

export const useElements = () => {
    const [elementsData, setElementsData] = useState<ElementData[]>([]);
    const [selected, setSelected] = useState<ElementData | null>(null);

    // 요소 추가 함수 (데이터만 저장)
    const addElement = (type: string, style: ButtonStyle, styleData: ButtonStyleDataLegacy, elKey: string) => {
        const newElementData: ElementData = {
            id: elKey,
            type,
            style,
            x: 0,
            y: 0,
            styleData,
        };
        setElementsData((prevElements) => [...prevElements, newElementData]);
    };

    // 요소 업데이트 함수
    const updateElement = (id: string, style: ButtonStyle, styleData: ButtonStyleDataLegacy) => {
        setElementsData((prevElements) =>
            prevElements.map((elem) =>
                elem.id === id ? { ...elem, style, styleData } : elem
            )
        );
    };

    // 요소 제거 함수
    const removeElement = (id: string) => {
        setElementsData((prevElements) => prevElements.filter((elem) => elem.id !== id));
    };

    // 요소의 위치 업데이트 함수
    const updateElementPosition = (id: string, x: number, y: number) => {
        setElementsData((prevElements) =>
            prevElements.map((el) =>
                el.id === id ? { ...el, x, y } : el
            )
        );
    };

    // 샘플 버튼 생성 함수
    const createSampleButton = (style: ButtonStyle, styleData: ButtonStyleDataLegacy, elKey: string) => {
        addElement('button', style, styleData, elKey);
    };

    // 샘플 버튼 업데이트 함수
    const updateSampleButton = (id: string, style: ButtonStyle, styleData: ButtonStyleDataLegacy) => {
        updateElement(id, style, styleData);
    };



    return {
        elementsData,
        createSampleButton,
        updateElementPosition,
        selected,
        setSelected,
        updateElement,
        updateSampleButton,
        removeElement
    };
};

export type UseElementsReturnType = ReturnType<typeof useElements>;
