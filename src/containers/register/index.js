import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import RegisterForm from '../../components/RegisterForm';

const App = (props) => {
  const { navigation: { navigate } } = props;
  return (
    <View style={styles.container}>
      <RegisterForm type="Signup" />
      <View style={styles.signupTextCont}>
        <Text style={styles.signupText}>Sudah memiliki akun?</Text>
        <TouchableOpacity onPress={() => navigate('Login')}>
          <Text style={styles.signupButton}> Sign in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#455a64',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
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
