import axios from 'axios';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import { API_URL } from '../utils/constant';

const sendRegist = async (NIK, email) => {
  try {
    const body = {
      NIK,
      email,
    };
    const { data } = await axios.post(`${API_URL}employees/register`, body);
    console.log(data);
  } catch (error) {
    console.log(error.response.data);
  }
};

const RegisterForm = ({ type }) => {
  const [NIK, setNIK] = useState('');
  const [email, setEmail] = useState('');
  const [err, setErr] = useState('');
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputBox}
        underlineColorAndroid="rgba(0,0,0,0)"
        placeholder="NIK"
        placeholderTextColor="#ffffff"
        selectionColor="#fff"
        onChangeText={text => setNIK(text)}
        value={NIK}
        // onSubmitEditing={() => this.password.focus()}
      />
      <TextInput
        style={styles.inputBox}
        underlineColorAndroid="rgba(0,0,0,0)"
        placeholder="Email"
        placeholderTextColor="#ffffff"
        onChangeText={text => setEmail(text)}
        value={email}
        // ref={(input) => this.password = input}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => sendRegist(NIK, email)}
      >
        <Text style={styles.buttonText}>{type}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  inputBox: {
    width: 300,
    backgroundColor: 'rgba(255, 255,255,0.2)',
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#ffffff',
    marginVertical: 10
  },
  button: {
    width: 300,
    backgroundColor: '#1c313a',
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 13
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center'
  }

});

export default RegisterForm;
