import React, { useMemo } from 'react';
import { Text, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as ScreenObjects from '../screens';
import { DataContextProvider } from '../stores/ContextData';

// specify all navigation here
const Stack = Platform.OS === 'web' ? createStackNavigator() : createNativeStackNavigator();

const Navigation = () => {
  const { linking, screenArr } = (() => {
    const screenUrls = {};
    const screenArr = [];
    Object.keys(ScreenObjects).forEach((screenName) => {
      const screenObj = ScreenObjects[screenName];
      screenArr.push({ name: screenName, component: screenObj, title: screenObj.routeInfo.title });
      if (!screenUrls[screenName]) {
        screenUrls[screenName] = screenObj.routeInfo.path;
      }
    });
    return {
      linking: screenUrls,
      screenArr,
    };
  })();

  return (
    <DataContextProvider>
      <NavigationContainer
        linking={{ config: { screens: linking }, prefixes: [] }}
        documentTitle={{
          formatter: (options, route) => options.title || options.name,
        }}
        fallback={<Text>Loading...</Text>}
      >
        <Stack.Navigator screenOptions={{ header: () => null }}>
          {useMemo(() => {
            return screenArr.map((val, i) => (
              <Stack.Screen key={'screen-' + val + i} name={val.name} component={val.component} options={{ title: val.title }} />
            ));
          }, [])}
        </Stack.Navigator>
      </NavigationContainer>
    </DataContextProvider>
  );
};

export default Navigation;
