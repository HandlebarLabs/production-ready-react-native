import React from 'react';
import { Provider } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';

import Navigator from './config/routes';
import { AlertProvider } from './components/Alert';
import store from './config/store';

export default class App extends React.Component {
  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <Provider store={store}>
        <AlertProvider>
          <Navigator onNavigationStateChange={null} />
        </AlertProvider>
      </Provider>
    );
  }
}
