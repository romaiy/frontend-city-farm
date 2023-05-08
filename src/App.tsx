import { observer } from 'mobx-react-lite';
import { FC, useContext, useEffect } from 'react';
import AppRouter from './components/AppRouter';
import { BrowserRouter } from 'react-router-dom';
import './styles/reset.css';
import { Context } from './main';
import { Stack, Loader } from '@mantine/core';

const App: FC = () => {
  const { UStore } = useContext(Context);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      UStore.checkAuth();
    }
  }, []);

  if (UStore.isLoading) {
    return (
      <Stack h={"100vh"} align="center" justify="center">
        <Loader size="xl" color="orange.5"/>
      </Stack>
    );
  }

  return (
    <BrowserRouter>
      <AppRouter/>
    </BrowserRouter>
  );
}

export default observer(App);
