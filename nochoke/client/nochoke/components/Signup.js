import React, { useState } from 'react'
import axios from 'react-native-axios'
import { View, Text, StyleSheet, TextInput, KeyboardAvoidingView, ScrollView } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import BackendServerIP from "../BackendServerIP"
import AppNavigator from '../navigation/AppNavigator';
export default function Signup(props) {
    const [details, setDetails] = useState({ surname: null, lastname: null, email: null, password: null })
    const signup = () => {
        axios.post(BackendServerIP+'/register', details)
        .then(res => {
            redirectUser(res.data.token)
            /*saveToStore(res.data.token)*/
        })
    }
    /*const saveToStore = async(data) =>{
        await SecureStore.setItemAsync('token',data);
        const token = await SecureStore.getItemAsync('token');
        redirectUser()
    }*/
    const redirectUser = (token) =>{
        axios.defaults.headers.common['Authorisation'] = "Token " +token;
        props.setLoggedin(true)
        props.setShow(false)
    }


    const styles = StyleSheet.create({
        submitButton: {
            textAlign: 'center',
            marginTop: 50,
            fontWeight: "500",
            fontSize: 25
        },
        inputField: {
            borderBottomWidth: 1,
            paddingTop: 10,
            paddingBottom: 5,
            paddingLeft: 20,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            fontSize: 20
        },
        wrapper: {
            display: "flex",
            flex: 1,
            backgroundColor: 'orange'
        },
        label: {
            fontSize: 20,
            marginTop: 5,
            marginBottom: 8,
            marginLeft: 20,
            fontWeight: "600"
        },
    })


    return (


        <KeyboardAvoidingView style={styles.wrapper} behavior="padding">
                    <ScrollView style={styles.scrollView}>

            <View style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto' }}>
                <View style={[styles.wrapper]}>

                    <Text style={[{ color: 'white' }, styles.label]}>Förnamn</Text>
                    <TextInput
                        selectionColor='white'
                        autoCorrect={false}
                        onChange={e =>
                            setDetails({ ...details, surname: e.nativeEvent.text })}
                        style={[
                            { color: 'white', borderBottomColor: 'white' },
                            styles.inputField
                        ]}
                    />
                </View>
                <View style={[styles.wrapper]}>
                    <Text style={[{ color: 'white' }, styles.label]}>Efternamn</Text>
                    <TextInput
                        selectionColor='white'
                        autoCorrect={false}
                        onChange={e =>
                            setDetails({ ...details, lastname: e.nativeEvent.text })}
                        style={[
                            { color: 'white', borderBottomColor: 'white' },
                            styles.inputField
                        ]}
                    />
                </View>
                <View style={[styles.wrapper]}>
                    <Text style={[{ color: 'white' }, styles.label]}>Email</Text>
                    <TextInput
                        selectionColor='white'
                        autoCorrect={false}
                        onChange={e =>
                            setDetails({ ...details, email: e.nativeEvent.text })}
                        style={[
                            { color: 'white', borderBottomColor: 'white' },
                            styles.inputField
                        ]}
                    />
                </View>
                <View style={[styles.wrapper]}>
                    <Text style={[{ color: 'white' }, styles.label]}>Lösenord</Text>
                    <TextInput
                        selectionColor='white'
                        autoCorrect={false}
                        onChange={e =>
                            setDetails({...details, password: e.nativeEvent.text})}
                        style={[
                            { color: 'white', borderBottomColor: 'white' },
                            styles.inputField
                        ]}
                    />
                </View>

                <Text style={[{ color: 'white' }, styles.submitButton]}
                    onPress={() => signup()}
                >Skapa</Text>

                {/*

            <Input rounded inputStyle={{ color: 'gray'}} placeholder='Surname'
                onChange={e =>
                    setDetails({ ...details, surname: e.nativeEvent.text })} />
            <Input rounded inputStyle={{ color: 'gray' }} placeholder='Lastname'
                onChange={e =>
                    setDetails({ ...details, lastname: e.nativeEvent.text })} />
            <Input rounded inputStyle={{ color: 'gray' }} placeholder='Email'
                onChange={e =>
                    setDetails({ ...details, email: e.nativeEvent.text })} />
            <Button buttonStyle={{borderRadius: 10,backgroundColor: 'orange'}} style={{ margin: 10 }} title='Submit' onPress={signup} />

            */}


            </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )


}