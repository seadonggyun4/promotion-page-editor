<img width="500" height="500" alt="logo" src="https://github.com/user-attachments/assets/46d07e5a-7201-436a-a6e0-00b9f7f2e6c7" />

# PromoKit

[![Hits](https://hitscounter.dev/api/hit?url=https://github.com/seadonggyun4/promo-kit&label=hits&color=79C83D&labelColor=555555)](https://hitscounter.dev)
![License](https://img.shields.io/github/license/seadonggyun4/promo-kit)

**이벤트 랜딩 페이지 제작 워크플로우를 간소화합니다.** 시각적 에디터를 통해 요소를 배치하고, 프로젝트 환경에 맞는 코드를 자동 생성합니다.

[사이트 바로가기](https://promotion-page-editor.netlify.app/) · [English Docs](./README_EN.md)

---

## 개요

프론트엔드 개발 환경에서 이벤트 랜딩 페이지는 반복적으로 요청되는 작업 유형 중 하나입니다. 일반적인 워크플로우는 다음과 같은 단계를 포함합니다:

| 단계 | 기존 방식 | PromoKit 적용 시 |
|:---:|:---------|:----------------|
| 1 | HTML/CSS 마크업 작성 | 이미지 업로드 |
| 2 | 버튼 좌표 수동 계산 | 드래그 앤 드롭 배치 |
| 3 | 픽셀 단위 미세 조정 | 실시간 미리보기 확인 |
| 4 | 프레임워크별 코드 변환 | 자동 코드 생성 |

PromoKit은 이러한 반복 작업을 시각적 인터페이스로 대체하여, 개발자가 비즈니스 로직과 사용자 경험에 집중할 수 있도록 지원합니다.

### 워크플로우

```
1. 기획자로부터 전달받은 디자인 이미지 업로드
2. 버튼, 텍스트, 이미지 오버레이를 드래그 앤 드롭으로 배치
3. 프레임워크 및 스타일링 옵션 선택 후 코드 생성
4. 생성된 코드를 프로젝트에 통합
```

---

## 주요 기능

### 버튼 에디터

27종의 버튼 프리셋을 제공하며, 세 가지 카테고리로 분류됩니다.

| 카테고리 | 수량 | 구성 |
|:-------:|:---:|:-----|
| 기본 | 11종 | SimpleBtn, PrimaryBtn, SecondaryBtn, SuccessBtn, DangerBtn, WarningBtn, DarkBtn, OutlineBtn, PillBtn, GhostBtn, NeonBtn |
| 그라데이션 | 10종 | GradationBtn, SunsetBtn, OceanBtn, ForestBtn, PurpleHazeBtn, FireBtn, AuroraBtn, MidnightBtn, RoseGoldBtn, CyberBtn |
| 애니메이션 | 6종 | BounceBtn, GlowBtn, PulseBtn, ShakeBtn, SlideBtn, RippleBtn |

애니메이션 버튼의 경우 바운스 높이, 글로우 크기 및 강도, 펄스 스케일, 흔들림 거리 등의 파라미터를 세부 조정할 수 있습니다.

### 텍스트 에디터

5종의 텍스트 프리셋(H1, H2, H3, Paragraph, Strong)을 제공합니다.

| 속성 그룹 | 조정 가능 항목 |
|:---------|:-------------|
| 타이포그래피 | 폰트 패밀리, 크기, 굵기, 줄 높이, 자간 |
| 스타일 | 색상, 정렬, 장식, 변형 |
| 효과 | 텍스트 그림자 |

### 이미지 오버레이 에디터

12종의 이미지 스타일 프리셋을 제공합니다.

| 카테고리 | 구성 |
|:-------:|:-----|
| 기본 | SimpleImage, RoundedImage, CircleImage, PillImage |
| 액자 | BorderedImage, ShadowImage, NeonBorderImage, DoubleFrameImage |
| 장식 | PolaroidImage, GradientBorderImage, GlowImage, VintageImage |

### 버전 히스토리

작업 이력을 관리하고 이전 상태로 복원할 수 있습니다.

- Undo/Redo 지원 (`Ctrl+Z` / `Ctrl+Y`)
- 히스토리 타임라인 시각화
- 특정 스냅샷으로 즉시 이동
- 동작 타입별 아이콘 구분

### 프로젝트 관리

| 기능 | 설명 |
|:----|:----|
| 자동 저장 | localStorage에 10초 간격으로 자동 저장 |
| 내보내기/가져오기 | JSON 형식으로 프로젝트 파일 저장 및 복원 |
| 새 프로젝트 | 확인 다이얼로그를 통한 안전한 초기화 |

---

## 코드 생성

프로젝트의 기술 스택에 맞는 코드를 생성합니다. 프레임워크와 스타일링 방식의 조합을 선택할 수 있습니다.

### 지원 프레임워크

10개의 프론트엔드 프레임워크를 지원합니다.

| 프레임워크 | 설명 |
|:---------:|:-----|
| HTML/CSS/JS | 바닐라 구현, 의존성 없음 |
| React | TypeScript 함수형 컴포넌트 |
| Vue 3 | Composition API SFC |
| Svelte | 스벨트 컴포넌트 |
| Angular | 앵귤러 컴포넌트 |
| Solid | SolidJS 컴포넌트 |
| Preact | Preact 컴포넌트 |
| Astro | Astro 컴포넌트 |
| Qwik | Qwik 컴포넌트 |
| Lit | Lit 웹 컴포넌트 |

### 지원 스타일링

16개의 CSS 방법론 및 프레임워크를 지원합니다. 아래 호환성 매트릭스를 참고하시기 바랍니다.

| 스타일 | Vanilla | React | Vue | Svelte | Angular | Solid | Preact | Astro | Qwik | Lit |
|:------:|:-------:|:-----:|:---:|:------:|:-------:|:-----:|:------:|:-----:|:----:|:---:|
| CSS | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| SCSS | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Styled Components | - | ✓ | - | - | - | - | ✓ | - | - | - |
| Emotion | - | ✓ | - | - | - | ✓ | ✓ | - | - | - |
| Tailwind CSS | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| CSS Modules | - | ✓ | ✓ | ✓ | - | ✓ | ✓ | ✓ | ✓ | - |
| UnoCSS | ✓ | ✓ | ✓ | ✓ | - | ✓ | ✓ | ✓ | ✓ | ✓ |
| Panda CSS | - | ✓ | - | - | - | ✓ | ✓ | - | ✓ | - |
| Vanilla Extract | - | ✓ | - | - | - | ✓ | ✓ | - | ✓ | - |
| Stitches | - | ✓ | - | - | - | - | ✓ | - | - | - |
| Less | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Stylus | ✓ | ✓ | ✓ | ✓ | - | ✓ | ✓ | ✓ | - | - |
| Bootstrap | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | - | ✓ |
| Bulma | ✓ | ✓ | ✓ | ✓ | - | ✓ | ✓ | ✓ | - | ✓ |
| Chakra UI | - | ✓ | - | - | - | - | - | - | - | - |
| MUI (sx) | - | ✓ | - | - | - | - | - | - | - | - |

### 코드 품질 옵션

생성되는 코드의 품질을 제어하는 세 가지 옵션을 제공합니다.

#### 반응형 (Responsive)
뷰포트 크기에 따른 미디어 쿼리를 자동 생성합니다.
- 모바일 (≤480px), 태블릿 (≤768px), 데스크톱 브레이크포인트 지원
- 요소 위치 및 크기의 상대적 조정

#### 접근성 (a11y)
[WCAG 2.1](https://www.w3.org/WAI/standards-guidelines/wcag/) 가이드라인을 준수하는 접근성 속성을 생성합니다.

| 적용 항목 | 설명 |
|:---------|:----|
| `aria-label` | 버튼 및 인터랙티브 요소에 대한 텍스트 대안 제공 |
| `role` 속성 | 요소의 의미론적 역할 명시 |
| `aria-describedby` | 추가 설명이 필요한 요소에 대한 참조 연결 |
| 포커스 스타일 | 키보드 네비게이션 시 시각적 피드백 제공 |

> **참고**: 이미지 기반 레이아웃의 특성상 스크린 리더 사용자 경험에 제한이 있을 수 있습니다. 프로덕션 배포 시 접근성 옵션 활성화를 권장하며, 필요에 따라 생성된 코드에 추가적인 텍스트 대안을 보완하시기 바랍니다.

#### SEO
검색 엔진 최적화 및 소셜 미디어 공유를 위한 메타 태그를 생성합니다.
- Open Graph 프로토콜 메타 태그
- Twitter Card 메타 태그

---

## 시작하기

### 설치

```bash
git clone https://github.com/seadonggyun4/promo-kit.git
cd promo-kit
npm install
npm run dev
```

### 개발 명령어

| 명령어 | 설명 |
|:------|:----|
| `npm run dev` | 개발 서버 실행 |
| `npm run build` | 프로덕션 빌드 |
| `npm run lint` | ESLint 검사 |
| `npm run preview` | 프로덕션 빌드 미리보기 |

---

## 기술 스택

| 분류 | 기술 |
|:---:|:-----|
| 프레임워크 | React 18, TypeScript, Vite |
| 상태 관리 | Zustand |
| 스타일링 | Styled Components |
| 드래그 앤 드롭 | @dnd-kit/core |
| 국제화 | react-i18next (한국어, 영어, 일본어) |
| UI 피드백 | SweetAlert2, seo-toast |

---

## 프로젝트 구조

[Feature-Sliced Design](https://feature-sliced.design/) 아키텍처를 따릅니다.

```
src/
├── app/                        # 애플리케이션 설정, 라우팅
├── pages/                      # 페이지 컴포넌트
│   ├── home/                   # 랜딩 페이지
│   └── editor/                 # 에디터 페이지
├── widgets/                    # 독립적인 UI 블록
│   ├── editor-panel/           # 편집 패널
│   └── preview-panel/          # 미리보기 패널
├── features/                   # 비즈니스 기능 단위
│   ├── button-editor/          # 버튼 편집 기능
│   ├── text-editor/            # 텍스트 편집 기능
│   ├── image-overlay-editor/   # 이미지 오버레이 편집 기능
│   ├── image-upload/           # 이미지 업로드 기능
│   ├── download/               # 코드 생성 및 다운로드 기능
│   └── version-history/        # 버전 이력 관리 기능
├── entities/                   # 도메인 엔티티
│   ├── button/                 # 버튼 스타일 컴포넌트
│   ├── text/                   # 텍스트 스타일 컴포넌트
│   └── image-overlay/          # 이미지 오버레이 스타일
└── shared/                     # 공유 리소스
    ├── store/                  # Zustand 상태 저장소
    ├── types/                  # TypeScript 타입 정의
    ├── constants/              # 상수 및 프리셋 정의
    ├── config/                 # 설정 (i18n 등)
    └── ui/                     # 공통 UI 컴포넌트
```

---

## 라이선스

MIT License. 자세한 내용은 [LICENSE](./LICENSE) 파일을 참조하시기 바랍니다.
