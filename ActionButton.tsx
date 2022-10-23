import * as React from "react";
import { useActionSheet } from "@expo/react-native-action-sheet";
import { View, Button, Alert } from "react-native";
const { showActionSheetWithOptions } = useActionSheet();

// #1 Importamos el createnavigator
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// #2 Lo que veremos
import { AppinfoPage } from "./pages/AppinfoPage";

const HomeStackNavigator = createNativeStackNavigator();

function MyStack(){
  return(
    <HomeStackNavigator.Navigator>
      <HomeStackNavigator.Screen 
        name="Info"
        component={ AppinfoPage }
      />
    </HomeStackNavigator.Navigator>
  )
}

const openSheet = () => {
  const options = ["Delete", "Save", "Cancel"];
  const destructiveButtonIndex = 0; //the first element in 'options' will denote the Delete option
  const cancelButtonIndex = 2; //Element number 2 in the array will be the 'Cancel' button

  showActionSheetWithOptions(
    {
      options,
      cancelButtonIndex, //the third button will be the 'Cancel' button
      destructiveButtonIndex, //the first button will be the 'Delete' option
    },
    (buttonIndex) => {
      switch (buttonIndex) {
        case 1:
          // {showAlert}
        break;
        case 2:
          // Delete
          break;

        case 3:
          // Canceled
      }
    }
  );

return (
  <View>
    <Button title="Dame clic" onPress={() => openSheet()} />
  </View>
);
}

export default function ActionButton() {
  return (
    <View>
      <Button title="More actions" onPress={() => openSheet()} />
    </View>
  );
}