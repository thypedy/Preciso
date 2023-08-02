import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './Tela1'

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.Container}>
      <Image
        source={require('./Dapta.png')}
        style={styles.image}
      />

      <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.btnLogin}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Cadastro')}
        >
          <Text style={styles.btnCadastro}>Cadastro</Text>
        </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;