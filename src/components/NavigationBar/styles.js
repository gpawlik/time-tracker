import {
  Platform,
  StyleSheet
} from 'react-native';

export default StyleSheet.create({
  container: {
    paddingTop: 0,
    top: 0,
    ...Platform.select({
      ios: {
        height: 74
      },
      android: {
        height: 74
      },
      windows: {
        height: 64
      }
    }),
    right: 0,
    left: 0,
    borderBottomWidth: 0.5,
    borderBottomColor: '#828287',
    position: 'absolute'
  },
  content: {
    flex: 1,
    borderTopColor: '#ccc',
    backgroundColor: '#EFEFF2',
    alignSelf: 'stretch',
    justifyContent: 'center',
    ...Platform.select({
      ios: {
        borderTopWidth: 20
      },
      android: {
        borderTopWidth: 0
      },
      windows: {
        borderTopWidth: 10
      }
    })
  },
  backButton: {
    position: 'absolute',
    ...Platform.select({
      ios: {
        top: 14
      },
      android: {
        top: 24
      },
      windows: {
        top: 24
      }
    }),

    left: 10
  },
  rightButton: {
    position: 'absolute',
    ...Platform.select({
      ios: {
        top: 4
      },
      android: {
        top: 14
      },
      windows: {
        top: 14
      }
    }),
    right: 0,
    height: 37,
    padding: 8
  },
  logoBox: {
    flexDirection: 'row',
    margin: 20
  },
  logo: {
  },
  logoTitle: {
    fontFamily: 'Dosis',
    fontWeight: '100',
    fontSize: 28,
    marginLeft: 10
  }
});
