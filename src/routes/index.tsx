import { NavigationContainer, TabRouter } from "@react-navigation/native"
import Login from "../modules/login/screens/Login"
import TabRoutes from "./tab.routes"
import StackRoutes from "./stack.routes"

const Routes = () => {
    return (
        <NavigationContainer>
            {/* <TabRoutes/> */}
            <StackRoutes/>
            {/* <TabRoutes/> */}
        </NavigationContainer>
    )
}

export default Routes;