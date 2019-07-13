import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Auth from '../containers/auth';

const AppSwitchNavigator = createSwitchNavigator({
  Auth,
  // Register,
});

const AppContainer = createAppContainer(AppSwitchNavigator);
export default AppContainer;
