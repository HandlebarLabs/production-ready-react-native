import React from 'react';
import DropdownAlert from './DropdownAlert';

const AlertContext = React.createContext({});

export const AlertConsumer = AlertContext.Consumer;

export class AlertProvider extends React.Component {
  alertWithType = (...args) => this.dropdown.alertWithType(...args);

  render() {
    return (
      <AlertContext.Provider
        value={{
          alertWithType: this.alertWithType,
        }}
      >
        {this.props.children}
        <DropdownAlert
          ref={(ref) => {
            this.dropdown = ref;
          }}
        />
      </AlertContext.Provider>
    );
  }
}
