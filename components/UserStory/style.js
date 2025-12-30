import { StyleSheet } from 'react-native';
import { getFontFamily } from '../../assets/fonts/helper';

const style = StyleSheet.create({
  storyContainer: {
    marginRight: 20,
  },
  userImageContainer: {
    borderColor: '#F35BAC',
    borderWidth: 1,
    borderRadius: 65,
    padding: 3,
  },
  image: {
    width: 65,
    height: 65,
  },
  firstName: {
    fontFamily: getFontFamily('Inter', '500'),
    fontSize: 14,
    color: '#022150',
    marginTop: 8,
    textAlign: 'center',
  },
});

export default style;
