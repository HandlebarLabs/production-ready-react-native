import React, { Component } from 'react';
import { ScrollView, StatusBar, Linking } from 'react-native';
import { ListItem, Separator, Icon } from '../components/List';
import { AlertConsumer } from '../components/Alert';

const ICON_COLOR = '#868686';
const ICON_SIZE = 23;

class Options extends Component {
  handlePressThemes = () => {
    this.props.navigation.navigate('Themes');
  };

  handlePressSite = () => {
    Linking.openURL('http://fixer.io').catch(() =>
      this.props.alertWithType('error', 'Sorry!', "Fixer.io can't be opened right now."));
  };

  render() {
    return (
      <ScrollView>
        <StatusBar barStyle="default" />
        <ListItem
          text="Themes"
          onPress={this.handlePressThemes}
          customIcon={
            <Icon
              visible
              iconName="arrow-forward"
              iconSize={ICON_SIZE}
              iconColor={ICON_COLOR}
              iconBackground="transparent"
            />
          }
        />
        <Separator />
        <ListItem
          text="Fixer.io"
          onPress={this.handlePressSite}
          customIcon={
            <Icon
              visible
              iconName="link"
              iconSize={ICON_SIZE}
              iconColor={ICON_COLOR}
              iconBackground="transparent"
            />
          }
        />
        <Separator />
      </ScrollView>
    );
  }
}
export default props => (
  <AlertConsumer>
    {context => <Options alertWithType={context.alertWithType} {...props} />}
  </AlertConsumer>
);
