import React from 'react';
import { DarkTheme, NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Friend from './screens/Friend';
import Single from './screens/Single';

const Stack = createNativeStackNavigator()
const Index = () => {
    return (
        <React.Fragment>
            <NavigationContainer theme={DarkTheme}>
                <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Friend" component={Friend}/>
                <Stack.Screen name="Single" component={Single}/>
                </Stack.Navigator>
            </NavigationContainer>
        </React.Fragment>
    )
}

export default Index;