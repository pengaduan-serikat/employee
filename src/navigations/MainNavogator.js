import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Auth from '../containers/auth';
import HomeContainer from '../containers/home';

const AppSwitchNavigator = createSwitchNavigator({
  Auth,
  Home: HomeContainer,
});

const AppContainer = createAppContainer(AppSwitchNavigator);
export default AppContainer;
