import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#f0f0f0',
    elevation: 5,
    marginTop: 30
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
  

export default styles;