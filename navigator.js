import { createStackNavigator, createAppContainer } from "react-navigation";
import Splash from "./views/splash";
import Signup from "./views/Signup";
import Signin from "./views/Signin";
import Homepage from "./views/Homepage";
import SchedulePage from "./views/Schedulepage";
import SearchGroup from "./views/Searchgroups";

console.log(Signin, SearchGroup);

const Navigator = createStackNavigator({
  Home: { screen: Signup },
  Signin: { screen: Signin },
  Signup: { screen: Signup },
  HomePage: { screen: Homepage },
  SchedulePage: { screen: SchedulePage },
  Search: { screen: SearchGroup }
});

export default createAppContainer(Navigator);
