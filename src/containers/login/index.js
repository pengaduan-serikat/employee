import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import LoginForm from '../../components/LoginForm';


const App = (props) => {
  const { navigation: { navigate } } = props;
  return (
    <View style={styles.container}>
      <LoginForm type="Login" />
      <View style={styles.signupTextCont}>
        <Text style={styles.signupText}>Belum registrasi akun?</Text>
        <TouchableOpacity onPress={() => navigate('Register')}>
          <Text style={styles.signupButton}> Daftar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#455a64',
    // backgroundColor: 'red',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signupTextCont: {
    flexGrow: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingVertical: 16,
    flexDirection: 'row',
  },
  signupText: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 16,
  },
  signupButton: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '500',
  }
});

export default App;
