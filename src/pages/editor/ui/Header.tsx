import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import logoImg from '@/asset/img/promokit_logo.png';

export function Header() {
    const location = useLocation();

    return (
        <HeaderBar>
            <HeaderContent>
                <LogoLink to="/">
                    <LogoImage src={logoImg} alt="PromoKit" />
                </LogoLink>
                <Nav>
                    <NavLink to="/" $active={location.pathname === '/'}>
                        홈
                    </NavLink>
                    <NavLink to="/editor" $active={location.pathname === '/editor'}>
                        에디터
                    </NavLink>
                </Nav>
            </HeaderContent>
        </HeaderBar>
    );
}

const HeaderBar = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 70px;
    background: var(--c-background-secondary);
    box-shadow: var(--neu-shadow);
    z-index: 100;
`;

const HeaderContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 1.5rem;
`;

const LogoLink = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
`;

const LogoImage = styled.img`
    height: 120px;
    width: auto;
`;

const Nav = styled.nav`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`;

const NavLink = styled(Link)<{ $active: boolean }>`
    padding: 0.625rem 1.25rem;
    font-size: 0.9rem;
    font-weight: 600;
    color: ${({ $active }) => ($active ? 'var(--c-primary-dark)' : 'var(--c-text-secondary)')};
    background: ${({ $active }) => ($active ? 'var(--c-primary-soft)' : 'transparent')};
    border-radius: 12px;
    text-decoration: none;
    transition: all 0.2s ease;

    &:hover {
        color: var(--c-primary-dark);
        background: var(--c-primary-soft);
    }
`;
