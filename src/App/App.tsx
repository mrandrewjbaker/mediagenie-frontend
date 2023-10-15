import React from 'react';
import scss from './App.module.scss';
import { NavBar } from '../Components/UI/NavBar/NavBar';
import { BottomBar } from '../Components/UI/BottomBar/BottomBar';
import { AppRouter } from './AppRouter/AppRouter';
import { ViewRouter } from '../Components/UI/ViewRouter/ViewRouter';
import { Provider } from 'react-redux';
import { AppStore } from './AppStore/AppStore';

export const App: React.FC = () => {
  return (
    <div className={scss.App}>
      <AppRouter>
        <Provider store={AppStore}>
          <NavBar />
          <BottomBar />
          <ViewRouter />
        </Provider>
      </AppRouter>
    </div>
  );
}

export default App;
