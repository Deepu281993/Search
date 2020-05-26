import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
export default {
  mainView: {
    marginTop: hp(10),
    height: hp(100),
    width: wp(100),
  },
  cardView: {
    width: wp(85),
    alignSelf: 'center',
  },
  flexDir: {
    flexDirection: 'row',
  },
  searchView: {
    height: hp(7),
    alignItems: 'center',
  },
  iconStyle: {
    marginLeft: wp(2),
  },
  textInputStyle: {
    marginLeft: wp(2),
  },
  resultView: {
    marginTop: hp(2),
  },
};
