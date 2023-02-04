import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderRadius: 4,
    borderWidth: 1,
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
