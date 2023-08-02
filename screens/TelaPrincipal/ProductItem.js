import { View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './ProductItemStyle'; // Create the style file for product items

const ProductItem = ({ product }) => {
  const { image, companyName, location, description } = product;

  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />

      <View style={styles.productInfo}>
        <Text style={styles.companyName}>{companyName}</Text>
        <View style={styles.locationContainer}>
          <Icon name="location-outline" size={20} color="#000" />
          <Text style={styles.location}>{location}</Text>
        </View>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

export default ProductItem;
