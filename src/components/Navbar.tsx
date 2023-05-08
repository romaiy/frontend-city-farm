import { useContext, useState } from 'react';
import { Navbar, Center, Tooltip, UnstyledButton, createStyles, Stack, rem, Image, ThemeIcon } from '@mantine/core';
import community from '../assets/navbar/community.svg';
import garden from '../assets/navbar/garden.svg';
import shop from '../assets/navbar/shop.svg';
import wallet from '../assets/navbar/wallet.svg';
import logout from '../assets/navbar/logout.svg';
import logo from '../assets/navbar/logo-rotate.svg';
import { COMMUNITY_ROUT, GARDEN_ROUT, SHOP_ROUT, WALLET_ROUT } from '../utils/const';
import { NavLink, useLocation } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Context } from '../main';


const useStyles = createStyles((theme) => ({
    link: {
        width: rem(56),
        height: rem(56),
        borderRadius: theme.radius.md,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.orange[1],

        '&:hover': {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
        },
    },

    active: {
        '&, &:hover': {
        backgroundColor: theme.fn.themeColor('orange.1'),
        color: theme.fn.variant({ variant: 'orange.5', color: theme.colors.orange[1] }).color,
        },
    },
}));

interface NavbarLinkProps {
    icon: string;
    label: string;
    active?: boolean;
    onClick?(): void;
    path: string;
}

function NavbarLink({ icon: Icon, label, active, onClick, path }: NavbarLinkProps) {
    const { classes, cx } = useStyles();
    return (
        <NavLink to={path}>
        <Tooltip 
            style={{
                color: '#1C1C1C',
                background: '#FFFFFF',
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.05)',
                borderRadius: '8px',
                fontWeight: '500',
                fontSize: '16px',
                lineHeight: '22px',
            }} 
            label={label} 
            position="right" 
            offset={8}
        >
            <UnstyledButton onClick={onClick} className={cx(classes.link, { [classes.active]: active })}>
                <Image src={Icon} width="1.2rem" height="1.2rem" />
            </UnstyledButton>
        </Tooltip>
        </NavLink>
    );
}

const mockdata = [
    { icon: community, label: 'Сообщество', path: COMMUNITY_ROUT },
    { icon: garden, label: 'Грядки', path: GARDEN_ROUT },
    { icon: shop, label: 'Маркет', path: SHOP_ROUT },
    { icon: wallet, label: 'Кошелек', path: WALLET_ROUT },
];

const NavbarMinimal = () => {
    const location = useLocation();
    const [active, setActive] = useState(mockdata.map(e => e.path).indexOf(location.pathname));
    const { UStore } = useContext(Context);

    const links = mockdata.map((link, index) => (
    <NavbarLink
        {...link}
        key={link.label}
        active={index === active}
        onClick={() => setActive(index)}
    />
    ));

    if (!UStore.isAuth) return null;

    return (
        <Navbar 
            style={{
                borderRight: '1px solid #F2F2F2', 
                position: 'sticky',
                top: 0,
                zIndex: 10000
            }} 
            height={'100vh'} 
            width={{ base: '104px' }} 
            p="2rem 1.5rem"
        >
            <Center>
                <ThemeIcon color="orange.5" radius="1rem" size="3.5rem">
                    <Image width="2.5rem" height="2.5rem" src={logo}/>
                </ThemeIcon>
            </Center>
            <Navbar.Section grow mt={250}>
                <nav id="nav">
                <Stack justify="center" align="center" spacing={'1.5rem'}>
                {links}
                </Stack>
                </nav>
            </Navbar.Section>
            <Navbar.Section onClick={() => UStore.logout()}>
                <Stack justify="center" align="center" spacing={0}>
                <NavbarLink path={'/'} icon={logout} label="Change account" />
                </Stack>
            </Navbar.Section>
        </Navbar>
    );
}

export default observer(NavbarMinimal);