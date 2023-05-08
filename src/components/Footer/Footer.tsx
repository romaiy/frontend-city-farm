import { createStyles, rem, Flex, ThemeIcon, Image, Title, Text, Stack } from '@mantine/core';
import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/navbar/logo-rotate.svg';
import { Context } from '../../main';

const useStyles = createStyles((theme, isAuth:boolean) => ({
  footer: {
    marginTop: rem(32),
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: isAuth ? '32px 32px 64px' : '32px 80px 64px 80px',

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
    },
  },

  links: {
    fontWeight: 600,
    fontSize: '16px',
    lineHeight: '24px',
  },
}));

interface FooterCenteredProps {
  links: { path: string; title: string }[];
}

const FooterCentered = ({ links }: FooterCenteredProps) => {
  const { UStore } = useContext(Context);
  const { classes } = useStyles(UStore.isAuth);
  const discription = ['45009,', 'Brooksmouth,', 'Nicolas Park,', 'Apt. 542'];
  const useful = [
    {path: '/', title: 'Пользовательское соглашение'}, 
    {path: '/', title: 'Пользовательская оферта'}, 
    {path: '/', title: 'Правила использования сайта'}
  ]

  const routes = links.map((link, index) => {
    if (index < 2) {
      return (
        <NavLink to={link.path} key={link.path}>
          <Text color="gray.8" className={classes.links}>{link.title}</Text>
        </NavLink>
      );
    }
  });

  const items = useful.map((link, index) => {
    if (index < 3) {
      return (
        <NavLink to={link.path} key={link.title}>
          <Text color="gray.8" className={classes.links}>{link.title}</Text>
        </NavLink>
      );
    }
  });

  return (
    <div className={classes.footer}>
      <div className={classes.inner}>
        <Flex gap={64} align="flex-start">
          <ThemeIcon color="orange.5" radius="1rem" size="3.5rem">
            <Image width="2.5rem" height="2.5rem" src={logo}/>
          </ThemeIcon>
          <Title style={{fontWeight: 500}} size="h5" color="gray.3">© ООО “Адера”, 2023</Title>
        </Flex>
        
        <Flex gap={32}>
          <Stack w={160} spacing={16}>
            <NavLink to="/"><Text color="gray.8" className={classes.links}>Главная</Text></NavLink>
              {routes}
            <NavLink to="/contacts"><Text color="gray.8" className={classes.links}>Контакты</Text></NavLink>
            <NavLink to="/"><Text color="gray.8" className={classes.links}>F.A.Q.</Text></NavLink>
          </Stack>
          <Stack w={240} spacing={16}>
            {items}
          </Stack>
        </Flex>

        <Flex direction="column" gap={16} align="flex-end">
          <Flex gap={8}>
            {discription.map((item) => (
              <Title key={item} style={{fontWeight: 500}} size="h5" color="gray.3">{item}</Title>
            ))}
          </Flex>
          <Title style={{fontWeight: 500}} size="h5" color="gray.3">Merlin_Quitzon@yahoo.com</Title>
          <Title style={{fontWeight: 500}} size="h5" color="gray.3">548-480-0437</Title>
        </Flex>
      </div>
    </div>
  );
}

export default observer(FooterCentered);