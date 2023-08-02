import { View, TextInput, TouchableOpacity } from 'react-native';
import styles from './headerStyle';
import Icon from 'react-native-vector-icons/Ionicons';

const Header = () => {
  
    return (
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="person-circle-outline" size={50} color="#ccc" />
          </TouchableOpacity>
  
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search"
            />
            <Icon
              name="search-outline"
              size={25}
              color="#73B9F1"
              style={styles.searchIcon}
            />
          </View>
  
          <TouchableOpacity>
            <Icon
              name="reorder-three"
              size={45}
              color="#73B9F1"
              style={styles.reorderIcon}
            />
          </TouchableOpacity>
        </View>
  
      </View>
    );
  };

export default Header;