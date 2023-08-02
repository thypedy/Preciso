import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/Home/HomeScreen';
import SecondScreen from './screens/TelaLogin/SecondScreen';
import Cadastro from './screens/TelaCadastro/Cadastro';
import TelaPrincipal from './screens/TelaPrincipal/TelaPrincipal';
import ProductDetailScreen from './screens/TelaPrincipal/ProductDetailScreen';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator
        screenOptions={{
            headerShown:false
        }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Login" component={SecondScreen} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="TelaPrincipal" component={TelaPrincipal} />
      <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
    </Stack.Navigator>
  );
};

export default Routes;