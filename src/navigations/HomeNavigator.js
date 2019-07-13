import { createAppContainer, createStackNavigator } from 'react-navigation';

import Home from '../containers/home';

const AppStackNavigator = createStackNavigator({
  Home,
});

const HomeContainer = createAppContainer(AppStackNavigator);
export default HomeContainer;
