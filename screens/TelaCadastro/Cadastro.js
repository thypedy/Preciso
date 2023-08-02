import { useState } from 'react';
import { View, Text, TextInput, Alert, TouchableOpacity } from 'react-native';
import styles from './CadastroStyle';

const Cadastro = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    if (!validateEmail(email)) {
      Alert.alert('Error', 'Please enter a valid email address.');
      return;
    }

    if (name.trim() === '') {
      Alert.alert('Error', 'Please enter your name.');
      return;
    }

    if (password.length < 6) {
      Alert.alert('Error', 'Password must be at least 6 characters long.');
      return;
    }

    if (password !== confirmPassword) { // Check if passwords match
      Alert.alert('Error', 'Passwords do not match. Please confirm your password.'); // Show error message
      return;
    }

    Alert.alert('Cadastro Successful', 'Congratulations, your registration was successful!', [
      {
        text: 'OK',
        onPress: () => navigation.navigate('Login'), // Navigate to the Login screen after successful registration
      },
    ]);
  };

  // Function to validate email format
  const validateEmail = (email) => {
    // Regular expression to validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <View style={styles.Container}>
      <View style={styles.backDiv}>
        <Text style={styles.textCadastro}>Cadastro</Text>

        {/* Email */}
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="E-mail"
        />

        {/* Name */}
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Nome"
        />

        {/* Password */}
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholder="Senha"
          secureTextEntry
        />

        {/* Password check */}
        <TextInput
          style={styles.input}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          placeholder="Confirmar senha"
          secureTextEntry
        />

        <View style={styles.btnParaLogin}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.login}>Já cadastrei</Text>
        </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={handleRegister}
        >
          <Text style={styles.btnCadastro}>Cadastro</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Cadastro;