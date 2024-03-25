import { createStackNavigator } from "@react-navigation/stack";
import Login from "../modules/login/screens/Login";
import Home from "../modules/home/screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import TabRoutes from "./tab.routes";
import Profile from "../modules/profile/screens/Profile";

const Stack = createStackNavigator();

const StackRoutes = () => {
    return (
        
            <Stack.Navigator 
                screenOptions={{
                    headerShown: false,
                    }}>
                <Stack.Screen 
                    options={{title: ""}} 
                    name="Login" 
                    component={Login}/>
                <Stack.Screen 
                    options={{title: "Home"}} 
                    name="HomeStack" 
                    component={TabRoutes}/>
                <Stack.Screen 
                    options={{title: "Profile"}} 
                    name="ProfileStack" 
                    component={Profile}/>
            </Stack.Navigator>
    )
}

export default StackRoutes;