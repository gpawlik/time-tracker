import {
  Platform,
  StyleSheet
} from 'react-native';

const navButton = {
  height: 54,
  paddingRight: 15,
  paddingLeft: 15,
  alignItems: 'center',
  justifyContent: 'center',
  alignContent: 'center'
};

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
    borderBottomWidth: StyleSheet.hairlineWidth,
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
    ...navButton,
    position: 'absolute',
    ...Platform.select({
      ios: {
        top: 0
      },
      android: {
        top: 8
      },
      windows: {
        top: 8
      }
    }),
    left: 0
  },
  rightButton: {
    ...navButton,
    position: 'absolute',
    ...Platform.select({
      ios: {
        top: 0
      },
      android: {
        top: 8
      },
      windows: {
        top: 8
      }
    }),
    right: 0
  },
  logoBox: {
    flexDirection: 'row',
    margin: 20
  },
  logoTitle: {
    fontFamily: 'Dosis',
    fontWeight: '100',
    fontSize: 28,
    marginLeft: 10
  }
});
