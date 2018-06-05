import React from 'react';
import { Provider } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import codePush from 'react-native-code-push';

import Navigator from './config/routes';
import { AlertProvider } from './components/Alert';
import store from './config/store';

class App extends React.Component {
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

export default codePush(App);
