import React, {useState} from 'react'
import * as WebBrowser from 'expo-web-browser';
import { Input, Button } from 'react-native-elements';
import axios from 'react-native-axios'
import {View, Text} from 'react-native';
export default function Signup(props){
    const [details, setDetails] = useState({surname: null, lastname: null, email: null})
    const signup = () => {
        axios.post('http://192.168.0.15:8080/user/add', details)
        .then(res => props.setUser(res.data))
    }
    return(
            <View >
                <Input inputStyle={{color:'white'}}label='Surname' 
                    onChange={e => 
                    setDetails({...details, surname: e.nativeEvent.text})}/>
                <Input inputStyle={{color:'white'}}label='Lastname'
                                onChange={e => 
                                    setDetails({...details, lastname: e.nativeEvent.text})}/>
                <Input inputStyle={{color:'white'}}label='Email'
                                onChange={e => 
                                    setDetails({...details, email: e.nativeEvent.text})}/>
                <Button style={{margin:10}}title='Submit' onPress={signup}/>
               
            </View>
    )
    

}