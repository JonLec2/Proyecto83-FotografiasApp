import * as React from "react";
import {createDrawerNavigator} from "@react-navigation/drawer"
import BottomTabNavigator from "./TabNavigation";
import Profile from "../Screens/Profile";

const Drawer =createDrawerNavigator()

const DrawerNavigator = () => {
    return(
      <Drawer.Navigator>
       <Drawer.Screen name="Home" component={BottomTabNavigator} />
       <Drawer.Screen name="Profile" component={Profile} />
      </Drawer.Navigator>  
    )
}

export default DrawerNavigator