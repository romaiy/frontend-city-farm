import { createStyles, Header, rem, ThemeIcon, Image, TextInput, Flex, Text } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { observer } from 'mobx-react-lite';
import { FC, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/navbar/logo-rotate.svg';
import { Context } from '../../main';
import AuthHeader from './AuthHeader';
import PuclicHeader from './PublicHeader';

const useStyles = createStyles((theme, isAuth:boolean) => ({
    header: {
        width: isAuth ? '1816px' :'100vw',
        borderBottom: '1px solid #F2F2F2',
        position: 'sticky',
        top: 0
    },

    inner: {
        padding: isAuth ? '1.5rem 1.5rem 1rem 1.5rem' :'2rem 5rem',
        height: isAuth ? rem(96) : rem(128),
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    links: {
        [theme.fn.smallerThan('md')]: {
            display: 'none',
        },
    },

    search: {
        width: rem(400),
        height: rem(42),
        fontWeight: 500,
        fontSize: '16px',
        lineHeight: '22px',
        color: '#999999',
    },

    link: {
        display: 'block',
        fontWeight: 600,
        fontSize: '16px',
        lineHeight: '24px',
        padding: `${rem(16)} ${rem(20)}`,
        borderRadius: theme.radius.sm,
        textDecoration: 'none',
        color: theme.colors.gray[8],
        transition: 'all 0.2s',

        '&:hover': {
            color: theme.colors.orange[5]
        },
    },

    button: {
        width: '209px',
        height: '57px',
        fontWeight: 600,
        fontSize: '20px',
        lineHeight: '25px',
    }
}));

interface HeaderSearchProps {
    links: { path: string; Component: FC<{}>, title: string }[];}

const HeaderSearch = ({ links }: HeaderSearchProps) => {
    const { UStore } = useContext(Context);
    const { classes } = useStyles(UStore.isAuth);

    const items = links.slice(0,3).map((link) => (
        <NavLink
            key={link.path}
            to={link.path}
        >
            <Text 
                className={classes.link}
            >
                {link.title}
            </Text>
        </NavLink>
    ));

    return (
    <Header height={UStore.isAuth ? 96 : 128} className={classes.header}>
        <div className={classes.inner}>
            <Flex align="center" gap={48}>
                {!UStore.isAuth ? 
                <ThemeIcon color="orange.5" radius="1rem" size="3.5rem">
                    <Image width="2.5rem" height="2.5rem" src={logo}/>
                </ThemeIcon> : <></>}
                <TextInput
                    disabled
                    icon={<IconSearch size="1.125rem"/>}
                    className={classes.search}
                    placeholder="Поиск"
                    variant="filled"
                    radius="md"
                    size="md"
                    withAsterisk
                />
            </Flex>
            {!UStore.isAuth ? 
                <PuclicHeader classes={classes} items={items}/>:
                <AuthHeader/>
            }
        </div>
    </Header>
    );
};

export default observer(HeaderSearch);