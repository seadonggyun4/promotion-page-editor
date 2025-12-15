// ============================================
// Button Types
// ============================================

export type ButtonStyle = 'SimpleBtn' | 'GradationBtn';

export interface SimpleBtnStyleData {
    buttonText: string;
    buttonLink: string;
    textColor: string;
    backgroundColor: string;
    borderRadius: string;
    borderWidth: string;
    borderColor: string;
    shadowOffsetX: string;
    shadowOffsetY: string;
    shadowBlurRadius: string;
    shadowColor: string;
}

export interface GradationBtnStyleData {
    buttonText: string;
    buttonLink: string;
    textColor: string;
    gradationColor1: string;
    gradationColor2: string;
    gradationColor3: string;
    gradationColor4: string;
    borderRadius: string;
    borderWidth: string;
    borderColor: string;
    shadowOffsetX: string;
    shadowOffsetY: string;
    shadowBlurRadius: string;
    shadowColor: string;
}

export type ButtonStyleData = SimpleBtnStyleData | GradationBtnStyleData;

// 기존 코드 호환성을 위한 느슨한 타입 (점진적 마이그레이션용)
export type ButtonStyleDataLegacy = { [key: string]: string };

// Styled Component Props
export interface SimpleBtnProps {
    $backgroundColor: string;
    $textColor: string;
    $borderRadius: string;
}

export interface GradationBtnProps {
    $gradationColor1: string;
    $gradationColor2: string;
    $gradationColor3: string;
    $gradationColor4: string;
    $textColor: string;
    $borderRadius: string;
}

// ============================================
// Element Types
// ============================================

export interface ElementData {
    id: string;
    type: string;
    style: ButtonStyle;
    styleData: ButtonStyleDataLegacy;
    x: number;
    y: number;
}

// ============================================
// Hook Types
// ============================================

export interface ButtonFormHook {
    menu: string[];
    menuActive: string;
    setMenuActive: React.Dispatch<React.SetStateAction<string>>;
    buttonText: string;
    handleTextChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    buttonLink: string;
    handleLinkChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    textColor: string;
    handleTextColorChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    borderRadius: string;
    handleBorderRadiusChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    borderWidth: string;
    handleBorderWidthChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    borderColor: string;
    handleBorderColorChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    shadowOffsetX: string;
    handleShadowOffsetXChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    shadowOffsetY: string;
    handleShadowOffsetYChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    shadowBlurRadius: string;
    handleShadowBlurRadiusChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    shadowColor: string;
    handleShadowColorChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    buttonStyle: ButtonStyleDataLegacy;
}

export interface SimpleBtnHook extends Omit<ButtonFormHook, 'buttonStyle'> {
    backgroundColor: string;
    handleBackgroundColorChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    buttonStyle: SimpleBtnStyleData;
}

export interface GradationBtnHook extends Omit<ButtonFormHook, 'buttonStyle'> {
    gradationColor1: string;
    handleGradationColor1Change: (event: React.ChangeEvent<HTMLInputElement>) => void;
    gradationColor2: string;
    handleGradationColor2Change: (event: React.ChangeEvent<HTMLInputElement>) => void;
    gradationColor3: string;
    handleGradationColor3Change: (event: React.ChangeEvent<HTMLInputElement>) => void;
    gradationColor4: string;
    handleGradationColor4Change: (event: React.ChangeEvent<HTMLInputElement>) => void;
    buttonStyle: GradationBtnStyleData;
}

// ============================================
// Component Props Types
// ============================================

export interface WebviewProps {
    elementsData: ElementData[];
    uploadedImage: string | ArrayBuffer | null;
}

export interface DownloadBtnProps {
    uploadedImage: string | ArrayBuffer | null;
}

export interface ButtonSetModalProps {
    selectedBtn: ButtonStyle;
    closeModal: () => void;
}

export interface ContentPanelProps {
    menuActive: string;
}

export interface MenuProps {
    menuActive: string;
    menuClick: (menu: string) => void;
    children: React.ReactNode;
}

// ============================================
// Upload Image Types
// ============================================

export interface UploadImageContextType {
    uploadedImage: string | ArrayBuffer | null;
    handleDrop: (e: React.DragEvent<HTMLDivElement>) => void;
    handleDragOver: (e: React.DragEvent<HTMLDivElement>) => void;
    handleFileSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
