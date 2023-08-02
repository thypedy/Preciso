import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import the hook for navigation
import ProductItem from './ProductItem'; // Import the ProductItem component
import styles from './TelaPrincipalStyle';
import productsData from './ProductsData'; // Sample data for products
import Header from '../../componentes/header';

const TelaPrincipal = () => {
    const navigation = useNavigation(); // Get the navigation object using the hook

    const handleProductPress = (product) => {
      // Navigate to the ProductDetailScreen with the selected product as a parameter
      navigation.navigate('ProductDetail', { product });
    };

  return (
    <View style={styles.container}>
      
      <Header/>

        <Text style={styles.texto}>5.840 plantas gratuitas</Text>

        <FlatList
          data={productsData}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleProductPress(item)}>
              <ProductItem product={item} />
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
    </View>
  );
};

export default TelaPrincipal;
