import React from "react";
import { createDrawerNavigator} from "@react-navigation/drawer";
import Inserir from './stack'
import Listar from "../Screens/Listar";
import Atualizar from '../Screens/Atualizar';
import Deletar from '../Screens/Deletar';

export default function Router(){
    const Drawer = createDrawerNavigator();
    return(
        <Drawer.Navigator>

            <Drawer.Screen name = 'Listar' component ={Listar}/>
            <Drawer.Screen name = 'Inserir' component ={Inserir}/>
            <Drawer.Screen name = 'Atualizar' component ={Atualizar}/>
            <Drawer.Screen name = 'Deletar' component ={Deletar}/>

        </Drawer.Navigator>
    )
}