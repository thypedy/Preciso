import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Header from '../../componentes/header';
import Icon from 'react-native-vector-icons/Ionicons';

const ProductDetailScreen = ({ route, navigation }) => {
  const { product } = route.params;
  const { image, companyName, location, description, valor } = product;

  const screenWidth = Dimensions.get('window').width;

  return (
    <View style={styles.container}>
      <Header/>

      <View style={styles.customHeader}>
        <TouchableOpacity onPress={() => navigation.navigate('TelaPrincipal')} style={styles.goBackButton}>
          <Icon name="chevron-back-outline" size={30} color="#000" />
          <Text style={styles.goBackText}>voltar</Text>
        </TouchableOpacity>
        <View style={styles.headerIcons}>
          <Icon name="heart-outline" size={30} color="#000" style={styles.heartIcon} />
          <Icon name="ellipsis-horizontal" size={30} color="#000" />
        </View>
      </View>

      <Image source={image} style={[styles.image, { width: screenWidth }]} />
      
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>{description}</Text>
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.locationContainer}>
          <Icon name="location-outline" size={20} color="#000" />
          <Text style={styles.locationText}>{location}</Text>
        </View>
        <Text style={styles.productName}>{companyName}</Text>
      </View>

      <View style={[styles.bottomContainer, { alignItems: 'flex-start' }]}>
        <Text>Text 1</Text>
        <Text>{valor}</Text>
        <TouchableOpacity style={styles.button}>
          <Text>Button 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>Button 2</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    height: 300,
    marginBottom: 20,
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  locationText: {
    fontSize: 16,
    marginRight: 5,
  },
  descriptionContainer: {
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
  },
  goBackButton: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  customHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 10,
    marginTop: 10,
  },
  goBackButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  goBackText: {
    fontSize: 16,
    marginLeft: 5,
  },
  headerIcons: {
    flexDirection: 'row',
  },
  heartIcon: {
    marginRight: 15,
  },
  bottomContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor:'#000',
    margin:15,
    borderRadius:10,
    paddingBottom:30,
    paddingTop:30,
  },
  button: {
    width:250,
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#73B9F1',
    borderRadius: 8,
  },
});

export default ProductDetailScreen;