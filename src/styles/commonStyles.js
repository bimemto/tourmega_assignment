import {StyleSheet} from 'react-native';
import * as Colors from './colors';

export default commonStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  line: {
    height: 1,
    backgroundColor: Colors.colorGray,
    marginHorizontal: 15,
    marginVertical: 25,
    opacity: 0.4,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  innerContainer: {
    flex: 1,
    marginHorizontal: 15,
  },
});
