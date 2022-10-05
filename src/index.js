import { AppRegistry } from "react-native";
import UserScreen from "./components/user";

AppRegistry.registerComponent("UserScreen", () => UserScreen);

AppRegistry.runApplication("UserScreen", {
  rootTag: document.getElementById("root")
});
