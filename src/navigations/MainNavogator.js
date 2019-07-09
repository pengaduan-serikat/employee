import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from '../containers/login';
import Register from '../containers/register';

const AppSwitchNavigator = createSwitchNavigator({
  Login,
  Register,
});

const AppContainer = createAppContainer(AppSwitchNavigator);
export default AppContainer;
