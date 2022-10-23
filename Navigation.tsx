// EXCLUSIVO PARA NAVIGATION
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import { DrawerNavigation } from "./src/navigation/DrawerNavigation";
// SCREENS
import { HomeScreen } from "./src/screens/HomeScreen";
import { SettingsScreen } from "./src/screens/SettingsScreen";
import { TareasScreen } from "./src/screens/TareasScreen";
import { ProductivityScreen } from "./src/screens/ProductivityScreen";


// Almacenamos en una variable la funcion -createBottomTabNavigator-, lo cual nos permitira crear la -Bottom Tab Navigation-
const Tab = createBottomTabNavigator();

// Creamos una funcion para nuestro TAB NAVIGATOR
function MyTab() {
    // Retornara: 
    return(

        // Abrimos nuestro TAB.Navigator -> Para generar el navigator
            // Con: -initialRouteName="Home"- ==> Para determinar la Screen inicial
        <Tab.Navigator 
            initialRouteName="Home"
            // Agregar configuraciones especificas para el TabBar
            screenOptions={{
                // Definicmos el color que adoptara el btn al estar activo
                tabBarActiveTintColor: 'black',
            }}
        >
            
            {/* 
                Creamos las SCREENS de nuestras Screens importadas, y les asignamos un nombre, puede ser el que nosotros queramos, pero de preferencia debe de ser un nombre descriptivo
            */}
            <Tab.Screen 
                name="Proyetos" 
                component={HomeScreen}
                options={{
                    //Permite definir el texto de nuestro btn
                    tabBarLabel: 'Poyectos',
                    // Agregar notificaciones al btn encuestion
                    tabBarBadge: 2,
                    // Ocultar header -titulo del navigation para la screen-
                    // headerShown: false,
                }}
            />
            <Tab.Screen 
                name="Habitos"
                component={SettingsScreen}
                options={{
                    tabBarLabel: 'Habitos'
                }} 
            />
            <Tab.Screen 
                name="Tareas"
                component={ TareasScreen }
                options={{
                    tabBarLabel: 'Tareas'
                }} 
            />
            <Tab.Screen 
                name="Productividad"
                component={ ProductivityScreen }
                options={{
                    tabBarLabel: 'Productividad'
                }} 
            />
        </Tab.Navigator>
    );
}


export default function Navigation() {
    return (
        <NavigationContainer>
            <MyTab />
            {/* <DrawerNavigation /> */}
            
        </NavigationContainer>
    );
}