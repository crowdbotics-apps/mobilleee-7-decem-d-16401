import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import CopyOfBlankScreen015556Navigator from '../features/CopyOfBlankScreen015556/navigator';
import CopyOfBlankScreen215555Navigator from '../features/CopyOfBlankScreen215555/navigator';
import CopyOfBlankScreen015553Navigator from '../features/CopyOfBlankScreen015553/navigator';
import BlankScreen215551Navigator from '../features/BlankScreen215551/navigator';
import BlankScreen115548Navigator from '../features/BlankScreen115548/navigator';
import BlankScreen015547Navigator from '../features/BlankScreen015547/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
CopyOfBlankScreen015556: { screen: CopyOfBlankScreen015556Navigator },
CopyOfBlankScreen215555: { screen: CopyOfBlankScreen215555Navigator },
CopyOfBlankScreen015553: { screen: CopyOfBlankScreen015553Navigator },
BlankScreen215551: { screen: BlankScreen215551Navigator },
BlankScreen115548: { screen: BlankScreen115548Navigator },
BlankScreen015547: { screen: BlankScreen015547Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
