import {StyleSheet} from 'react-native';

import Colors from '../../style/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.GREEN,
  },
  touchableOpacityContainer: {
    flexDirection: 'row',
    width: '100%',
  },
  chevron: {
    width: 12,
    height: 12,
    marginLeft: 'auto',
  },
  title: {
    marginBottom: 20,
  },
  description: {
    marginBottom: 10,
  },
});

export default styles;
