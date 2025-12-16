import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { Header } from '@/pages/editor/ui/Header';
import bannerImg from '@/asset/img/promokit_baner.png';

export function HomePage() {
    const { t } = useTranslation();

    return (
        <>
            <Header />
            <MainStyle>
                <HeroSection>
                    <GradientBackground>
                        <WaveLayer />
                    </GradientBackground>
                    <HeroContent>
                        <CatchPhrase>
                            <HeroTitle>{t('home.heroTitle').split('\n').map((line, i) => (
                                <span key={i}>{line}{i === 0 && <br />}</span>
                            ))}</HeroTitle>
                            <HeroDescription>{t('home.heroDescription').split('\n').map((line, i) => (
                                <span key={i}>{line}{i === 0 && <br />}</span>
                            ))}</HeroDescription>
                        </CatchPhrase>
                        <BannerImage src={bannerImg} alt="PromoKit Banner" />
                    </HeroContent>
                </HeroSection>

                <SectionContainer>
                    <Section>
                        <SectionIcon>
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                                <path d="M2 17l10 5 10-5" />
                                <path d="M2 12l10 5 10-5" />
                            </svg>
                        </SectionIcon>
                        <SectionTitle>{t('home.purposeTitle')}</SectionTitle>
                        <SectionDescription>{t('home.purposeDescription')}</SectionDescription>
                    </Section>

                    <Section>
                        <SectionIcon>
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                                <circle cx="8.5" cy="8.5" r="1.5" />
                                <polyline points="21 15 16 10 5 21" />
                            </svg>
                        </SectionIcon>
                        <SectionTitle>{t('home.featuresTitle')}</SectionTitle>
                        <FeatureList>
                            <FeatureItem>{t('home.feature1')}</FeatureItem>
                            <FeatureItem>{t('home.feature2')}</FeatureItem>
                            <FeatureItem>{t('home.feature3')}</FeatureItem>
                            <FeatureItem>{t('home.feature4')}</FeatureItem>
                        </FeatureList>
                    </Section>

                    <Section>
                        <SectionIcon>
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                <polyline points="14 2 14 8 20 8" />
                                <line x1="16" y1="13" x2="8" y2="13" />
                                <line x1="16" y1="17" x2="8" y2="17" />
                                <polyline points="10 9 9 9 8 9" />
                            </svg>
                        </SectionIcon>
                        <SectionTitle>{t('home.usageTitle')}</SectionTitle>
                        <StepList>
                            <StepItem>
                                <StepNumber>1</StepNumber>
                                <StepText>{t('home.step1')}</StepText>
                            </StepItem>
                            <StepItem>
                                <StepNumber>2</StepNumber>
                                <StepText>{t('home.step2')}</StepText>
                            </StepItem>
                            <StepItem>
                                <StepNumber>3</StepNumber>
                                <StepText>{t('home.step3')}</StepText>
                            </StepItem>
                            <StepItem>
                                <StepNumber>4</StepNumber>
                                <StepText>{t('home.step4')}</StepText>
                            </StepItem>
                        </StepList>
                    </Section>
                </SectionContainer>

                <CodeExportSection>
                    <CodeExportHeader>
                        <CodeExportIcon>
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <polyline points="16 18 22 12 16 6" />
                                <polyline points="8 6 2 12 8 18" />
                                <line x1="12" y1="2" x2="12" y2="22" />
                            </svg>
                        </CodeExportIcon>
                        <CodeExportTitleWrapper>
                            <SectionTitle>{t('home.codeExportTitle')}</SectionTitle>
                            <CodeExportDescription>{t('home.codeExportDescription')}</CodeExportDescription>
                        </CodeExportTitleWrapper>
                    </CodeExportHeader>
                    <CodeExportGrid>
                        <CodeExportCard>
                            <CardTitle>{t('home.frameworkSupport')}</CardTitle>
                            <FrameworkList>
                                <FrameworkItem>
                                    <FrameworkIcon>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" />
                                        </svg>
                                    </FrameworkIcon>
                                    <span>{t('home.frameworkVanilla')}</span>
                                </FrameworkItem>
                                <FrameworkItem>
                                    <FrameworkIcon $color="#61DAFB">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 1.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                            <path d="M12 21.35c-1.172 0-2.12-.075-2.906-.198-1.476-.229-2.527-.653-3.255-1.091-.728-.438-1.173-.903-1.419-1.303a2.5 2.5 0 0 1-.324-.758H4.09c-.034.13-.059.268-.074.414-.052.522.009 1.14.287 1.81.278.67.79 1.386 1.617 2.003.827.617 1.956 1.123 3.406 1.423 1.45.3 3.224.4 5.174.186 1.95-.213 3.646-.726 5.025-1.467 1.38-.74 2.443-1.703 3.135-2.77.346-.532.59-1.094.71-1.66.12-.568.115-1.14-.005-1.678-.12-.537-.354-1.044-.69-1.49-.168-.222-.362-.428-.58-.612.218-.184.412-.39.58-.612.336-.446.57-.953.69-1.49.12-.538.125-1.11.005-1.678-.12-.566-.364-1.128-.71-1.66-.692-1.067-1.755-2.03-3.135-2.77-1.38-.741-3.075-1.254-5.025-1.467-1.95-.214-3.724-.114-5.174.186-1.45.3-2.58.806-3.406 1.423-.827.617-1.34 1.333-1.617 2.003-.278.67-.34 1.288-.287 1.81.015.146.04.284.074.414h.006c.066-.264.17-.517.324-.758.246-.4.69-.865 1.42-1.303.727-.438 1.778-.862 3.254-1.091C9.88 2.825 10.828 2.75 12 2.75c1.172 0 2.12.075 2.906.198 1.476.229 2.527.653 3.255 1.091.728.438 1.173.903 1.419 1.303.123.2.216.41.277.613l.003.012c.061-.203.154-.414.277-.613.246-.4.69-.865 1.42-1.303.727-.438 1.778-.862 3.254-1.091C25.597 2.825 26.545 2.75 27.717 2.75" />
                                            <ellipse cx="12" cy="12" rx="10" ry="4.5" stroke="currentColor" strokeWidth="1" fill="none" />
                                            <ellipse cx="12" cy="12" rx="10" ry="4.5" stroke="currentColor" strokeWidth="1" fill="none" transform="rotate(60 12 12)" />
                                            <ellipse cx="12" cy="12" rx="10" ry="4.5" stroke="currentColor" strokeWidth="1" fill="none" transform="rotate(120 12 12)" />
                                        </svg>
                                    </FrameworkIcon>
                                    <span>{t('home.frameworkReact')}</span>
                                </FrameworkItem>
                                <FrameworkItem>
                                    <FrameworkIcon $color="#4FC08D">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M24 1.61h-9.94L12 5.16 9.94 1.61H0l12 20.78L24 1.61zM12 14.08L5.16 2.23h4.43L12 6.41l2.41-4.18h4.43L12 14.08z" />
                                        </svg>
                                    </FrameworkIcon>
                                    <span>{t('home.frameworkVue')}</span>
                                </FrameworkItem>
                            </FrameworkList>
                        </CodeExportCard>
                        <CodeExportCard>
                            <CardTitle>{t('home.styleSupport')}</CardTitle>
                            <StyleOptionList>
                                <StyleOption>
                                    <StyleBadge $variant="css">CSS</StyleBadge>
                                    <StyleBadge $variant="scss">SCSS</StyleBadge>
                                </StyleOption>
                                <StyleOption>
                                    <StyleBadge $variant="styled">Styled</StyleBadge>
                                    <StyleBadge $variant="emotion">Emotion</StyleBadge>
                                </StyleOption>
                                <StyleOption>
                                    <StyleBadge $variant="tailwind">Tailwind</StyleBadge>
                                </StyleOption>
                            </StyleOptionList>
                        </CodeExportCard>
                    </CodeExportGrid>
                </CodeExportSection>

                <CTASection>
                    <CTABackground>
                        <CTAOrb $position="top-left" />
                        <CTAOrb $position="top-right" />
                        <CTAOrb $position="bottom-center" />
                    </CTABackground>
                    <CTAContent>
                        <CTAIcon>
                            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                            </svg>
                        </CTAIcon>
                        <CTATitle>{t('home.ctaTitle')}</CTATitle>
                        <CTASubtitle>{t('home.ctaSubtitle')}</CTASubtitle>
                        <StartButton to="/editor" $large>
                            <span>{t('home.openEditor')}</span>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <line x1="5" y1="12" x2="19" y2="12" />
                                <polyline points="12 5 19 12 12 19" />
                            </svg>
                        </StartButton>
                    </CTAContent>
                </CTASection>
            </MainStyle>
        </>
    );
}

const MainStyle = styled.main`
    padding: 1.5rem;
    padding-top: 90px;
    margin: 0 auto;
    min-height: 100vh;
    width: 100%;
    max-width: 1400px;
`;

const HeroSection = styled.section`
    position: relative;
    margin-bottom: 3rem;
    border-radius: 24px;
    overflow: hidden;
    box-shadow: var(--neu-shadow);
    height: 450px;
`;

const HeroContent = styled.div`
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    padding: 3rem;
`;

const CatchPhrase = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
`;

const HeroTitle = styled.h1`
    font-size: 2.75rem;
    font-weight: 800;
    color: #4A4A6A;
    line-height: 1.3;
    text-shadow: 0 2px 10px rgba(255, 255, 255, 0.5);
`;

const HeroDescription = styled.p`
    font-size: 1.125rem;
    color: #5A5A7A;
    line-height: 1.7;
`;

const GradientBackground = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        135deg,
        #FFB3BA 0%,
        #FFDFBA 16%,
        #FFFFBA 32%,
        #BAFFC9 48%,
        #BAE1FF 64%,
        #D4BAFF 80%,
        #FFB3D9 100%
    );
    overflow: hidden;

    &::before,
    &::after {
        content: '';
        position: absolute;
        width: 200%;
        height: 200%;
        top: -50%;
        left: -50%;
        background: radial-gradient(ellipse at center, rgba(186, 225, 255, 0.6) 0%, transparent 50%);
        animation: wave1 8s ease-in-out infinite;
    }

    &::after {
        background: radial-gradient(ellipse at center, rgba(212, 186, 255, 0.5) 0%, transparent 50%);
        animation: wave2 10s ease-in-out infinite;
        animation-delay: -2s;
    }

    @keyframes wave1 {
        0%, 100% {
            transform: translate(0%, 0%) rotate(0deg) scale(1);
        }
        25% {
            transform: translate(10%, 10%) rotate(90deg) scale(1.1);
        }
        50% {
            transform: translate(5%, -5%) rotate(180deg) scale(1);
        }
        75% {
            transform: translate(-10%, 5%) rotate(270deg) scale(1.1);
        }
    }

    @keyframes wave2 {
        0%, 100% {
            transform: translate(5%, -5%) rotate(0deg) scale(1.1);
        }
        25% {
            transform: translate(-5%, 10%) rotate(-90deg) scale(1);
        }
        50% {
            transform: translate(-10%, 0%) rotate(-180deg) scale(1.1);
        }
        75% {
            transform: translate(10%, -10%) rotate(-270deg) scale(1);
        }
    }
`;

const WaveLayer = styled.div`
    position: absolute;
    width: 300%;
    height: 300%;
    top: -100%;
    left: -100%;
    background:
        radial-gradient(ellipse at 20% 30%, rgba(255, 179, 186, 0.5) 0%, transparent 40%),
        radial-gradient(ellipse at 80% 20%, rgba(186, 255, 201, 0.5) 0%, transparent 40%),
        radial-gradient(ellipse at 50% 70%, rgba(186, 225, 255, 0.5) 0%, transparent 40%),
        radial-gradient(ellipse at 70% 60%, rgba(212, 186, 255, 0.4) 0%, transparent 50%);
    animation: waveFlow 12s ease-in-out infinite;

    @keyframes waveFlow {
        0%, 100% {
            transform: translate(0%, 0%) rotate(0deg);
        }
        33% {
            transform: translate(5%, 3%) rotate(120deg);
        }
        66% {
            transform: translate(-3%, 5%) rotate(240deg);
        }
    }
`;

const BannerImage = styled.img`
    max-width: 50%;
    max-height: 90%;
    height: auto;
    object-fit: contain;
    display: block;
    filter: drop-shadow(0 10px 30px rgba(0, 0, 0, 0.2));
`;

const StartButton = styled(Link)<{ $large?: boolean }>`
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    padding: ${({ $large }) => ($large ? '1.25rem 2.5rem' : '0.875rem 2rem')};
    font-size: ${({ $large }) => ($large ? '1.25rem' : '1rem')};
    font-weight: 700;
    color: #667eea;
    background: white;
    border-radius: 50px;
    text-decoration: none;
    box-shadow:
        0 10px 40px rgba(0, 0, 0, 0.3),
        inset 0 -3px 0 rgba(0, 0, 0, 0.1);
    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(
            90deg,
            transparent,
            rgba(102, 126, 234, 0.2),
            transparent
        );
        transition: left 0.5s ease;
    }

    &:hover {
        transform: translateY(-5px) scale(1.02);
        box-shadow:
            0 20px 60px rgba(0, 0, 0, 0.4),
            inset 0 -3px 0 rgba(0, 0, 0, 0.1);

        &::before {
            left: 100%;
        }

        svg {
            transform: translateX(5px);
        }
    }

    &:active {
        transform: translateY(-2px) scale(1);
    }

    svg {
        transition: transform 0.3s ease;
    }
`;

const SectionContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
    margin-bottom: 3rem;
`;

const Section = styled.section`
    background: var(--c-background-secondary);
    border-radius: 20px;
    padding: 2rem;
    box-shadow: var(--neu-shadow);
`;

const SectionIcon = styled.div`
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--c-primary-soft);
    border-radius: 20px;
    margin-bottom: 1.5rem;
    color: var(--c-primary);
    box-shadow: var(--neu-shadow-sm);
`;

const SectionTitle = styled.h2`
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--c-text-primary);
    margin-bottom: 1rem;
`;

const SectionDescription = styled.p`
    font-size: 1rem;
    line-height: 1.7;
    color: var(--c-text-secondary);
`;

const FeatureList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;

const FeatureItem = styled.li`
    position: relative;
    padding-left: 1.5rem;
    margin-bottom: 0.75rem;
    font-size: 1rem;
    color: var(--c-text-secondary);
    line-height: 1.6;

    &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0.5rem;
        width: 8px;
        height: 8px;
        background: linear-gradient(135deg, var(--c-primary) 0%, var(--c-primary-dark) 100%);
        border-radius: 50%;
    }

    &:last-child {
        margin-bottom: 0;
    }
`;

const StepList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const StepItem = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

const StepNumber = styled.span`
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, var(--c-primary) 0%, var(--c-primary-dark) 100%);
    color: white;
    font-weight: 700;
    font-size: 0.875rem;
    border-radius: 50%;
    flex-shrink: 0;
`;

const StepText = styled.span`
    font-size: 1rem;
    color: var(--c-text-secondary);
    line-height: 1.5;
`;

const CTASection = styled.section`
    position: relative;
    text-align: center;
    padding: 4rem 2rem;
    border-radius: 24px;
    overflow: hidden;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
    box-shadow:
        0 20px 60px rgba(102, 126, 234, 0.4),
        0 10px 30px rgba(118, 75, 162, 0.3);
`;

const CTABackground = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
`;

type OrbPosition = 'top-left' | 'top-right' | 'bottom-center';

const orbPositions: Record<OrbPosition, { top?: string; left?: string; right?: string; bottom?: string }> = {
    'top-left': { top: '-50px', left: '-50px' },
    'top-right': { top: '-30px', right: '-30px' },
    'bottom-center': { bottom: '-60px', left: '50%' },
};

const CTAOrb = styled.div<{ $position: OrbPosition }>`
    position: absolute;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
    filter: blur(40px);
    animation: float 6s ease-in-out infinite;
    ${({ $position }) => {
        const pos = orbPositions[$position];
        return `
            top: ${pos.top || 'auto'};
            left: ${pos.left || 'auto'};
            right: ${pos.right || 'auto'};
            bottom: ${pos.bottom || 'auto'};
            ${$position === 'bottom-center' ? 'transform: translateX(-50%);' : ''}
        `;
    }}

    &:nth-child(2) {
        animation-delay: -2s;
        width: 150px;
        height: 150px;
    }

    &:nth-child(3) {
        animation-delay: -4s;
        width: 180px;
        height: 180px;
    }

    @keyframes float {
        0%, 100% {
            transform: translateY(0) ${({ $position }) => $position === 'bottom-center' ? 'translateX(-50%)' : ''};
        }
        50% {
            transform: translateY(-20px) ${({ $position }) => $position === 'bottom-center' ? 'translateX(-50%)' : ''};
        }
    }
`;

const CTAContent = styled.div`
    position: relative;
    z-index: 1;
`;

const CTAIcon = styled.div`
    width: 100px;
    height: 100px;
    margin: 0 auto 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    color: white;
    backdrop-filter: blur(10px);
    animation: pulse 2s ease-in-out infinite;

    @keyframes pulse {
        0%, 100% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.4);
        }
        50% {
            transform: scale(1.05);
            box-shadow: 0 0 30px 10px rgba(255, 255, 255, 0.2);
        }
    }
`;

const CTATitle = styled.h2`
    font-size: 2.5rem;
    font-weight: 800;
    color: white;
    margin-bottom: 0.75rem;
    text-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
`;

const CTASubtitle = styled.p`
    font-size: 1.125rem;
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 2rem;
`;

const CodeExportSection = styled.section`
    background: var(--c-background-secondary);
    border-radius: 24px;
    padding: 2rem;
    margin-bottom: 2rem;
    box-shadow: var(--neu-shadow);
`;

const CodeExportHeader = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 1.5rem;
    margin-bottom: 2rem;
`;

const CodeExportIcon = styled.div`
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 20px;
    color: white;
    box-shadow: var(--neu-shadow-sm);
    flex-shrink: 0;
`;

const CodeExportTitleWrapper = styled.div`
    flex: 1;
`;

const CodeExportDescription = styled.p`
    font-size: 1rem;
    line-height: 1.7;
    color: var(--c-text-secondary);
    margin-top: 0.5rem;
`;

const CodeExportGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

const CodeExportCard = styled.div`
    background: var(--c-background-tertiary);
    border-radius: 16px;
    padding: 1.5rem;
`;

const CardTitle = styled.h3`
    font-size: 1.125rem;
    font-weight: 600;
    color: var(--c-text-primary);
    margin-bottom: 1rem;
`;

const FrameworkList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
`;

const FrameworkItem = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem;
    background: var(--c-background-secondary);
    border-radius: 12px;
    font-size: 0.95rem;
    color: var(--c-text-primary);
    font-weight: 500;
`;

const FrameworkIcon = styled.div<{ $color?: string }>`
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ $color }) => ($color ? `${$color}20` : 'var(--c-primary-soft)')};
    border-radius: 8px;
    color: ${({ $color }) => $color || '#E34F26'};
`;

const StyleOptionList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
`;

const StyleOption = styled.div`
    display: flex;
    gap: 0.5rem;
`;

type BadgeVariant = 'css' | 'scss' | 'styled' | 'emotion' | 'tailwind';

const badgeColors: Record<BadgeVariant, { bg: string; color: string }> = {
    css: { bg: '#264de420', color: '#264de4' },
    scss: { bg: '#cf649a20', color: '#cf649a' },
    styled: { bg: '#db748520', color: '#db7485' },
    emotion: { bg: '#d36ac220', color: '#d36ac2' },
    tailwind: { bg: '#38bdf820', color: '#0ea5e9' },
};

const StyleBadge = styled.span<{ $variant: BadgeVariant }>`
    padding: 0.5rem 1rem;
    background: ${({ $variant }) => badgeColors[$variant].bg};
    color: ${({ $variant }) => badgeColors[$variant].color};
    border-radius: 8px;
    font-size: 0.875rem;
    font-weight: 600;
`;
