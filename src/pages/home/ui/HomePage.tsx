import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styled, { keyframes } from 'styled-components';
import { Header } from '@/pages/editor/ui/Header';
import bannerImg from '@/asset/img/promokit_baner.png';

export function HomePage() {
    const { t } = useTranslation();

    return (
        <>
            <Header />
            <MainStyle>
                {/* Hero Section - 배너 유지, 문구 키치하게 */}
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

                {/* AI vs PromoKit 비교 섹션 */}
                <VsSection>
                    <VsSectionHeader>
                        <VsTitle>{t('home.vsAiTitle')}</VsTitle>
                        <VsSubtitle>{t('home.vsAiSubtitle')}</VsSubtitle>
                    </VsSectionHeader>
                    <VsComparisonGrid>
                        <VsCard $type="ai">
                            <VsCardHeader $type="ai">
                                <VsCardIcon>
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2M7.5 13A1.5 1.5 0 0 0 6 14.5 1.5 1.5 0 0 0 7.5 16 1.5 1.5 0 0 0 9 14.5 1.5 1.5 0 0 0 7.5 13m9 0a1.5 1.5 0 0 0-1.5 1.5 1.5 1.5 0 0 0 1.5 1.5 1.5 1.5 0 0 0 1.5-1.5 1.5 1.5 0 0 0-1.5-1.5z"/>
                                    </svg>
                                </VsCardIcon>
                                <VsCardLabel>{t('home.vsAiApproach')}</VsCardLabel>
                            </VsCardHeader>
                            <VsCardContent>
                                <VsFlow $type="ai">
                                    {t('home.vsAiApproachSteps').split(' → ').map((step, i, arr) => (
                                        <VsFlowStep key={i} $type="ai">
                                            {step}
                                            {i < arr.length - 1 && <VsFlowArrow>→</VsFlowArrow>}
                                        </VsFlowStep>
                                    ))}
                                </VsFlow>
                            </VsCardContent>
                        </VsCard>

                        <VsDivider>
                            <VsDividerText>VS</VsDividerText>
                        </VsDivider>

                        <VsCard $type="promokit">
                            <VsCardHeader $type="promokit">
                                <VsCardIcon>
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                                    </svg>
                                </VsCardIcon>
                                <VsCardLabel>{t('home.vsPromokitApproach')}</VsCardLabel>
                            </VsCardHeader>
                            <VsCardContent>
                                <VsFlow $type="promokit">
                                    {t('home.vsPromokitApproachSteps').split(' → ').map((step, i, arr) => (
                                        <VsFlowStep key={i} $type="promokit">
                                            {step}
                                            {i < arr.length - 1 && <VsFlowArrow $highlight>→</VsFlowArrow>}
                                        </VsFlowStep>
                                    ))}
                                </VsFlow>
                            </VsCardContent>
                        </VsCard>
                    </VsComparisonGrid>
                </VsSection>

                {/* 4가지 메리트 섹션 */}
                <MeritSection>
                    <SectionHeader>
                        <SectionBadge>Why PromoKit?</SectionBadge>
                        <MeritTitle>{t('home.meritTitle')}</MeritTitle>
                    </SectionHeader>
                    <MeritGrid>
                        <MeritCard $index={0}>
                            <MeritIcon $variant="pixel">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M12 19l7-7 3 3-7 7-3-3z" />
                                    <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
                                    <path d="M2 2l7.586 7.586" />
                                    <circle cx="11" cy="11" r="2" />
                                </svg>
                            </MeritIcon>
                            <MeritContent>
                                <MeritCardTitle>{t('home.merit1Title')}</MeritCardTitle>
                                <MeritCardDesc>{t('home.merit1Desc')}</MeritCardDesc>
                            </MeritContent>
                        </MeritCard>

                        <MeritCard $index={1}>
                            <MeritIcon $variant="stack">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                                    <path d="M2 17l10 5 10-5" />
                                    <path d="M2 12l10 5 10-5" />
                                </svg>
                            </MeritIcon>
                            <MeritContent>
                                <MeritCardTitle>{t('home.merit2Title')}</MeritCardTitle>
                                <MeritCardDesc>{t('home.merit2Desc')}</MeritCardDesc>
                            </MeritContent>
                        </MeritCard>

                        <MeritCard $index={2}>
                            <MeritIcon $variant="code">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <polyline points="16 18 22 12 16 6" />
                                    <polyline points="8 6 2 12 8 18" />
                                </svg>
                            </MeritIcon>
                            <MeritContent>
                                <MeritCardTitle>{t('home.merit3Title')}</MeritCardTitle>
                                <MeritCardDesc>{t('home.merit3Desc')}</MeritCardDesc>
                            </MeritContent>
                        </MeritCard>

                        <MeritCard $index={3}>
                            <MeritIcon $variant="learning">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="12" r="10" />
                                    <polyline points="12 6 12 12 16 14" />
                                </svg>
                            </MeritIcon>
                            <MeritContent>
                                <MeritCardTitle>{t('home.merit4Title')}</MeritCardTitle>
                                <MeritCardDesc>{t('home.merit4Desc')}</MeritCardDesc>
                            </MeritContent>
                        </MeritCard>
                    </MeritGrid>
                </MeritSection>

                {/* 프리셋 & 프레임워크 섹션 */}
                <PresetsSection>
                    <PresetsHeader>
                        <SectionBadge>Presets</SectionBadge>
                        <PresetsTitle>{t('home.presetsTitle')}</PresetsTitle>
                        <PresetsSubtitle>{t('home.presetsSubtitle')}</PresetsSubtitle>
                    </PresetsHeader>
                    <PresetsGrid>
                        <PresetCard $variant="buttons">
                            <PresetNumber>27</PresetNumber>
                            <PresetInfo>
                                <PresetLabel>{t('home.presetButtons')}</PresetLabel>
                                <PresetDesc>{t('home.presetButtonsDesc')}</PresetDesc>
                            </PresetInfo>
                            <PresetIconWrapper>
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <rect x="3" y="8" width="18" height="8" rx="4" />
                                </svg>
                            </PresetIconWrapper>
                        </PresetCard>

                        <PresetCard $variant="texts">
                            <PresetNumber>5</PresetNumber>
                            <PresetInfo>
                                <PresetLabel>{t('home.presetTexts')}</PresetLabel>
                                <PresetDesc>{t('home.presetTextsDesc')}</PresetDesc>
                            </PresetInfo>
                            <PresetIconWrapper>
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <polyline points="4 7 4 4 20 4 20 7" />
                                    <line x1="9" y1="20" x2="15" y2="20" />
                                    <line x1="12" y1="4" x2="12" y2="20" />
                                </svg>
                            </PresetIconWrapper>
                        </PresetCard>

                        <PresetCard $variant="images">
                            <PresetNumber>12</PresetNumber>
                            <PresetInfo>
                                <PresetLabel>{t('home.presetImages')}</PresetLabel>
                                <PresetDesc>{t('home.presetImagesDesc')}</PresetDesc>
                            </PresetInfo>
                            <PresetIconWrapper>
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                                    <circle cx="8.5" cy="8.5" r="1.5" />
                                    <polyline points="21 15 16 10 5 21" />
                                </svg>
                            </PresetIconWrapper>
                        </PresetCard>
                    </PresetsGrid>

                    <FrameworksBanner>
                        <FrameworksBannerContent>
                            <FrameworksTitle>{t('home.frameworksTitle')}</FrameworksTitle>
                            <FrameworksSubtitle>{t('home.frameworksSubtitle')}</FrameworksSubtitle>
                        </FrameworksBannerContent>
                        <FrameworksIcons>
                            <FrameworkIconItem title="React">
                                <svg viewBox="0 0 32 32" width="28" height="28">
                                    <circle cx="16" cy="16" r="2.5" fill="#61DAFB"/>
                                    <ellipse cx="16" cy="16" rx="10" ry="4" fill="none" stroke="#61DAFB" strokeWidth="1"/>
                                    <ellipse cx="16" cy="16" rx="10" ry="4" fill="none" stroke="#61DAFB" strokeWidth="1" transform="rotate(60 16 16)"/>
                                    <ellipse cx="16" cy="16" rx="10" ry="4" fill="none" stroke="#61DAFB" strokeWidth="1" transform="rotate(120 16 16)"/>
                                </svg>
                            </FrameworkIconItem>
                            <FrameworkIconItem title="Vue">
                                <svg viewBox="0 0 32 32" width="28" height="28">
                                    <path fill="#41B883" d="M2 4L16 28L30 4H24L16 18L8 4H2z"/>
                                    <path fill="#35495E" d="M8 4L16 18L24 4H20L16 11L12 4H8z"/>
                                </svg>
                            </FrameworkIconItem>
                            <FrameworkIconItem title="Svelte">
                                <svg viewBox="0 0 32 32" width="28" height="28">
                                    <path fill="#FF3E00" d="M25.5 6.5C23.2 3.2 18.7 2 15.1 4L8.4 8.4c-1.8 1.2-3 3-3.4 5.1-.3 1.7 0 3.5.8 5-.5.8-.8 1.7-1 2.7-.4 2.1.1 4.2 1.3 6C8.4 30.5 13 31.7 16.6 29.7l6.7-4.4c1.8-1.2 3-3 3.4-5.1.3-1.7 0-3.5-.8-5 .5-.8.8-1.7 1-2.7.4-2.1-.1-4.2-1.4-6z"/>
                                </svg>
                            </FrameworkIconItem>
                            <FrameworkIconItem title="Angular">
                                <svg viewBox="0 0 32 32" width="28" height="28">
                                    <path fill="#DD0031" d="M16 2L2 7l2.1 18.2L16 30l11.9-4.8L30 7L16 2z"/>
                                    <path fill="#C3002F" d="M16 2v28l11.9-4.8L30 7L16 2z"/>
                                    <path fill="#fff" d="M16 5.8L8.2 23h2.9l1.6-4h6.6l1.6 4h2.9L16 5.8zm2.2 11h-4.4L16 11.4l2.2 5.4z"/>
                                </svg>
                            </FrameworkIconItem>
                            <FrameworkIconItem title="Solid">
                                <svg viewBox="0 0 32 32" width="28" height="28">
                                    <path fill="#76B3E1" d="M5 10l11-6 11 6-11 6-11-6z"/>
                                    <path fill="#2C4F7C" d="M27 10v12l-11 6V16l11-6z"/>
                                    <path fill="#335D92" d="M5 10v12l11 6V16L5 10z"/>
                                </svg>
                            </FrameworkIconItem>
                            <FrameworkIconMore>+5</FrameworkIconMore>
                        </FrameworksIcons>
                    </FrameworksBanner>
                </PresetsSection>

                {/* CTA 섹션 */}
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
    font-size: 3rem;
    font-weight: 900;
    color: #4A4A6A;
    line-height: 1.2;
    text-shadow: 0 2px 10px rgba(255, 255, 255, 0.5);
`;

const HeroDescription = styled.p`
    font-size: 1.25rem;
    color: #5A5A7A;
    line-height: 1.7;
    font-weight: 500;
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
        0%, 100% { transform: translate(0%, 0%) rotate(0deg) scale(1); }
        25% { transform: translate(10%, 10%) rotate(90deg) scale(1.1); }
        50% { transform: translate(5%, -5%) rotate(180deg) scale(1); }
        75% { transform: translate(-10%, 5%) rotate(270deg) scale(1.1); }
    }

    @keyframes wave2 {
        0%, 100% { transform: translate(5%, -5%) rotate(0deg) scale(1.1); }
        25% { transform: translate(-5%, 10%) rotate(-90deg) scale(1); }
        50% { transform: translate(-10%, 0%) rotate(-180deg) scale(1.1); }
        75% { transform: translate(10%, -10%) rotate(-270deg) scale(1); }
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
        0%, 100% { transform: translate(0%, 0%) rotate(0deg); }
        33% { transform: translate(5%, 3%) rotate(120deg); }
        66% { transform: translate(-3%, 5%) rotate(240deg); }
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

// VS Section
const VsSection = styled.section`
    margin-bottom: 3rem;
`;

const VsSectionHeader = styled.div`
    text-align: center;
    margin-bottom: 2rem;
`;

const VsTitle = styled.h2`
    font-size: 2rem;
    font-weight: 800;
    color: var(--c-text-primary);
    margin-bottom: 0.5rem;
`;

const VsSubtitle = styled.p`
    font-size: 1.125rem;
    color: var(--c-text-secondary);
`;

const VsComparisonGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    gap: 1.5rem;
    align-items: stretch;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

const VsCard = styled.div<{ $type: 'ai' | 'promokit' }>`
    background: var(--c-background-secondary);
    border-radius: 20px;
    padding: 1.5rem;
    box-shadow: var(--neu-shadow);
    border: 2px solid ${({ $type }) => $type === 'promokit' ? 'var(--c-primary)' : 'transparent'};
    ${({ $type }) => $type === 'promokit' && `
        background: linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%);
    `}
`;

const VsCardHeader = styled.div<{ $type: 'ai' | 'promokit' }>`
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.5rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid var(--c-border);
`;

const VsCardIcon = styled.div`
    width: 56px;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--c-primary-soft);
    border-radius: 16px;
    color: var(--c-primary);
    box-shadow: var(--neu-shadow-sm);
`;

const VsCardLabel = styled.span`
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--c-text-primary);
`;

const VsCardContent = styled.div``;

const VsFlow = styled.div<{ $type: 'ai' | 'promokit' }>`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    align-items: center;
`;

const VsFlowStep = styled.span<{ $type: 'ai' | 'promokit' }>`
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    background: ${({ $type }) => $type === 'promokit' ? 'var(--c-primary-soft)' : 'var(--c-background-tertiary)'};
    color: ${({ $type }) => $type === 'promokit' ? 'var(--c-primary)' : 'var(--c-text-secondary)'};
    border-radius: 20px;
    font-size: 0.9rem;
    font-weight: 500;
`;

const VsFlowArrow = styled.span<{ $highlight?: boolean }>`
    color: ${({ $highlight }) => $highlight ? 'var(--c-primary)' : 'var(--c-text-secondary)'};
    font-weight: bold;
    margin-left: 0.25rem;
`;

const VsDivider = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
        padding: 1rem 0;
    }
`;

const VsDividerText = styled.span`
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    font-weight: 800;
    font-size: 1rem;
    border-radius: 50%;
    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
`;

// Merit Section
const MeritSection = styled.section`
    margin-bottom: 3rem;
`;

const SectionHeader = styled.div`
    text-align: center;
    margin-bottom: 2rem;
`;

const SectionBadge = styled.span`
    display: inline-block;
    padding: 0.5rem 1rem;
    background: var(--c-primary-soft);
    color: var(--c-primary);
    border-radius: 20px;
    font-size: 0.875rem;
    font-weight: 600;
    margin-bottom: 1rem;
`;

const MeritTitle = styled.h2`
    font-size: 2rem;
    font-weight: 800;
    color: var(--c-text-primary);
`;

const MeritGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

const fadeInUp = keyframes`
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

const MeritCard = styled.div<{ $index: number }>`
    display: flex;
    gap: 1.25rem;
    padding: 1.5rem;
    background: var(--c-background-secondary);
    border-radius: 20px;
    box-shadow: var(--neu-shadow);
    animation: ${fadeInUp} 0.5s ease-out forwards;
    animation-delay: ${({ $index }) => $index * 100}ms;
    opacity: 0;

    &:hover {
        transform: translateY(-4px);
        box-shadow: var(--neu-shadow), 0 10px 30px rgba(102, 126, 234, 0.15);
    }

    transition: all 0.3s ease;
`;

type MeritVariant = 'pixel' | 'stack' | 'code' | 'learning';

const meritColors: Record<MeritVariant, { bg: string; color: string }> = {
    pixel: { bg: '#ef444420', color: '#ef4444' },
    stack: { bg: '#8b5cf620', color: '#8b5cf6' },
    code: { bg: '#10b98120', color: '#10b981' },
    learning: { bg: '#f59e0b20', color: '#f59e0b' },
};

const MeritIcon = styled.div<{ $variant: MeritVariant }>`
    width: 64px;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ $variant }) => meritColors[$variant].bg};
    color: ${({ $variant }) => meritColors[$variant].color};
    border-radius: 16px;
    flex-shrink: 0;
    box-shadow: var(--neu-shadow-sm);
`;

const MeritContent = styled.div`
    flex: 1;
`;

const MeritCardTitle = styled.h3`
    font-size: 1.125rem;
    font-weight: 700;
    color: var(--c-text-primary);
    margin-bottom: 0.5rem;
`;

const MeritCardDesc = styled.p`
    font-size: 0.9rem;
    color: var(--c-text-secondary);
    line-height: 1.6;
`;

// Presets Section
const PresetsSection = styled.section`
    margin-bottom: 3rem;
`;

const PresetsHeader = styled.div`
    text-align: center;
    margin-bottom: 2rem;
`;

const PresetsTitle = styled.h2`
    font-size: 2rem;
    font-weight: 800;
    color: var(--c-text-primary);
    margin-bottom: 0.5rem;
`;

const PresetsSubtitle = styled.p`
    font-size: 1.125rem;
    color: var(--c-text-secondary);
`;

const PresetsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    margin-bottom: 2rem;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

type PresetVariant = 'buttons' | 'texts' | 'images';

const presetColors: Record<PresetVariant, { gradient: string }> = {
    buttons: { gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' },
    texts: { gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' },
    images: { gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' },
};

const PresetCard = styled.div<{ $variant: PresetVariant }>`
    position: relative;
    padding: 2rem;
    background: var(--c-background-secondary);
    border-radius: 20px;
    box-shadow: var(--neu-shadow);
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 4px;
        background: ${({ $variant }) => presetColors[$variant].gradient};
    }

    &:hover {
        transform: translateY(-4px);
    }

    transition: transform 0.3s ease;
`;

const PresetNumber = styled.span`
    font-size: 3rem;
    font-weight: 900;
    background: linear-gradient(135deg, var(--c-primary) 0%, var(--c-primary-dark) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    line-height: 1;
`;

const PresetInfo = styled.div`
    margin-top: 1rem;
`;

const PresetLabel = styled.h3`
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--c-text-primary);
    margin-bottom: 0.25rem;
`;

const PresetDesc = styled.p`
    font-size: 0.875rem;
    color: var(--c-text-secondary);
`;

const PresetIconWrapper = styled.div`
    position: absolute;
    right: 1.5rem;
    bottom: 1.5rem;
    width: 64px;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--c-primary-soft);
    border-radius: 16px;
    color: var(--c-primary);
    opacity: 0.5;
`;

const FrameworksBanner = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem;
    background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
    border-radius: 20px;
    border: 1px solid var(--c-primary);
    box-shadow: var(--neu-shadow-sm);

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 1.5rem;
        text-align: center;
    }
`;

const FrameworksBannerContent = styled.div``;

const FrameworksTitle = styled.h3`
    font-size: 1.5rem;
    font-weight: 800;
    color: var(--c-primary);
    margin-bottom: 0.25rem;
`;

const FrameworksSubtitle = styled.p`
    font-size: 1rem;
    color: var(--c-text-secondary);
`;

const FrameworksIcons = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
`;

const FrameworkIconItem = styled.div`
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--c-background-secondary);
    border-radius: 12px;
    box-shadow: var(--neu-shadow-sm);
`;

const FrameworkIconMore = styled.div`
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--c-primary-soft);
    border-radius: 12px;
    color: var(--c-primary);
    font-weight: 700;
    font-size: 0.875rem;
`;

// CTA Section
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
