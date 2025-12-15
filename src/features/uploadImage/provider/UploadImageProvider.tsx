import { createContext, useContext, ReactNode } from 'react';
import { useUploadImage } from '../hook/useUploadImage';
import { UploadImageContextType } from "../../../types";

// Context 생성
const UploadImageContext = createContext<UploadImageContextType | undefined>(undefined);

// Provider 컴포넌트 생성
export const UploadImageProvider = ({ children }: { children: ReactNode }) => {
    const uploadImage = useUploadImage();

    return (
        <UploadImageContext.Provider value={uploadImage}>
            {children}
        </UploadImageContext.Provider>
    );
};

// Context에서 값을 쉽게 사용할 수 있도록 하는 커스텀 훅
export const useUploadImageContext = () => {
    const context = useContext(UploadImageContext);
    if (context === undefined) {
        throw new Error('useUploadImageContext must be used within an UploadImageProvider');
    }
    return context;
};
