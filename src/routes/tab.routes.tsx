import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';
import Login from "../modules/login/screens/Login";
import Home from "../modules/home/screens/Home";
import Profile from "../modules/profile/screens/Profile";
import { theme } from "../themes/theme";
import HomeList from "../modules/homeList/screens/HomeList";
// import Profile from "";

const Tab = createBottomTabNavigator();

const TabRoutes = () => {
    return (
        <Tab.Navigator screenOptions={{headerShown: false}}>

            <Tab.Screen 
                name="HomeTab" 
                component={HomeList}
                options={{
                    title: "Home", 
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home" color={color} size={size} />
                    ),
                    tabBarActiveTintColor: theme.colors.neutralTheme.primary,
                }} 
                />
            <Tab.Screen 
                name="Profile" 
                component={Profile} 
                options={{
                    title: "Profile",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="person" color={color} size={size} />
                    ),
                    tabBarActiveTintColor: theme.colors.neutralTheme.primary,
                }}
            />
            
        </Tab.Navigator>
    )
}

export default TabRoutes;