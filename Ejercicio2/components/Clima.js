import React,{useEffect, useState} from "react";
import { StyleSheet, View, Text } from "react-native";
import {Card} from 'react-native-elements';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Clima = ({resultado}) =>{
    const [info,setInfo] = useState([]);
    const [nombre,setNombre] = useState([]);
    const [climaActual,setClima] = useState([]);
    const [temperatura,setTemp] = useState([]);
    const [minimo,setMinimo] = useState([]);
    const [maximo,setMaximo] = useState([]);
    const [humedad,setHumedad] = useState([]);
    const [viento,setViento] = useState([]);

    useEffect(()=>{
        
        setInfo(resultado);
        Object.values(info).map(() => {
            setNombre(info.name);
            setClima(info.weather[0].description);
            setTemp(info.main.temp);
            setMinimo(info.main.temp_min);
            setMaximo(info.main.temp_max);
            setHumedad(info.main.humidity);
            setViento(info.wind.speed);
        });
    });

    return(
       <Card>
           <Entypo name="location" color="#121211" size={30} style={{marginLeft:75}}>
                <Card.Title fontSize={324}>{nombre}</Card.Title>
           </Entypo>
           <Card.Divider />
           <View style={{justifyContent:'center',marginHorizontal:80,marginVertical:0}}>
                <MaterialCommunityIcons name='temperature-celsius' size={28}>
                    <Text>{temperatura}</Text>
                </MaterialCommunityIcons>
          <Card.Divider />
                
                <Text style={style.data}>Máximo °C: {maximo}</Text>
                <Card.Divider />
                <Text style={style.data}>Mínimo °C: {minimo}</Text>
                <Card.Divider />
                <Text style={style.data}>Humedad %: {humedad}</Text>
                <Card.Divider />
                <Text style={style.data}>Viento(km/h): {viento} </Text>
           </View>
       </Card> 
    );
};

export default Clima;

const style = StyleSheet.create({
    data:{
        marginLeft:15,
        fontSize:17,
        
    }
})