import { MantineProvider } from '@mantine/core';
import { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GardenStore from './store/GardenStore';
import PlantStore from './store/PlantStore';
import UserStore from './store/UserStore';

interface State {
  UStore: UserStore,
  PStore: PlantStore,
  GStore: GardenStore,
}

const UStore = new UserStore();
const PStore = new PlantStore();
const GStore = new GardenStore();

export const Context = createContext<State>({
  UStore,
  PStore,
  GStore
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Context.Provider value={{ UStore, PStore, GStore }}>
    <MantineProvider 
      withNormalizeCSS 
      withGlobalStyles
      theme={{
        colors: {
          'orange': ['#FFCC80','#FFF1ED','#FFCABB','#FFA287','#FA8260','#F4714B','#BC4523','#A62C09'],
          'gray': ['#F9F9F9','#F2F2F2','#CFCFCF','#999999','#676767','#444444','#313131','#232323','#1C1C1C'],
        },
        fontFamily: 'Mulish, sans-serif',
        headings: {
          sizes: {
            heading: { fontSize: '4rem', lineHeight: '4.375rem' },
            h1: { fontSize: '2rem', lineHeight: '2.125rem' },
            h2: { fontSize: '1.5rem', lineHeight: '1.625rem' },
            h3: { fontSize: '1.25rem', lineHeight: '1.375rem' },
            h4: { fontSize: '1rem', lineHeight: '1.125rem' },
            h5: { fontSize: '1rem', lineHeight: '1.375rem' }
          }
        },
        
      }}
    >
      <App />
    </MantineProvider>
  </Context.Provider>
);



