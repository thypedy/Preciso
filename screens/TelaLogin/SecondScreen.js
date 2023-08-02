import { useState } from 'react';
import { View, Text, TextInput, Alert, TouchableOpacity } from 'react-native';
import styles from './LoginStyle';

const SecondScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    if (!validateEmail(email)) {
      Alert.alert('Error', 'Please enter a valid email address.');
      return;
    }

    if (password.length < 6) {
      Alert.alert('Error', 'Password must be at least 6 characters long.');
      return;
    }

    navigation.navigate('TelaPrincipal');
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <View style={styles.Container}>
      <View style={styles.backDiv}>
        <Text style={styles.textCadastro}>Login</Text>

        {/* Email */}
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="E-mail"
        />

        {/* Password */}
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholder="Senha"
          secureTextEntry
        />

        <TouchableOpacity onPress={handleRegister}>
          <Text style={styles.btnCadastro}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SecondScreen;
