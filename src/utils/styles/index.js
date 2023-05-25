import { grey, indigo } from "@mui/material/colors";

export const gStyles = {
  full: {
    flex: 1,
  },
  textRed: {
    color: '#CF1701',
    fontWeight: 'bold',
  },
  uppercase: {
    textTransform: 'uppercase',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  height: value => {
    return {height: value};
  },
  row_2: {
    display: 'flex',
    flexDirection: 'row',
  },
  col: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  mgpdScrollView: {
    marginBottom: 120,
    padding: 8,
  },
  formInput: {
    marginBottom: 16,
  },
  label: {
    fontWeight: '600',
    fontSize: 14,
    marginBottom: 6,
    color: '#1E1E1F',
  },
  fieldBorder: {
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 4,
    fontSize: 14,
    color: '#092540',
    borderColor: '#D1D5DC',
  },
  textareaWrapper: {
    height: 84,
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderColor: '#D1D5DC',
  },
  textarea: {
    color: '#092540',
  },
  primaryButton: {
    backgroundColor: '#CF1701',
    paddingVertical: 13,
    // marginTop: 20,
    borderRadius: 8,
  },
  textPrimaryButton: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: '700',
  },
  text: (size, weight, color) => {
    return {
      fontSize: size,
      fontWeight: weight,
      color: color,
    };
  },
  space: value => {
    return {
      height: value,
    };
  },
  paddingTop: value => {
    return {
      paddingTop: value,
    };
  },
  marginTop: value => {
    return {
      marginTop: value,
    };
  },
  marginRight: value => {
    return {
      marginRight: value,
    };
  },
  marginLeft: value => {
    return {
      marginLeft: value,
    };
  },
  marginVertical: value => {
    return {
      marginVertical: value,
    };
  },
  line: (color, height) => {
    return {
      borderTopColor: color,
      borderTopWidth: height,
    };
  },
  padding: value => {
    return {
      padding: value,
    };
  },
  pLeft: value => {
    return {
      paddingLeft: value,
    };
  },
  capitalize: {
    textTransform: 'capitalize',
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
  },
  textTitleScreen: {
    color: '#687083',
    fontSize: 18,
    fontWeight: '600',
    padding: 16,
    backgroundColor: '#fff',
  },
  imageWrapper: {
    marginBottom: 8,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  textWrapper: {marginBottom: 8, flexDirection: 'row'},
  textLabel: {
    color: '#687083',
    fontSize: 14,
    fontWeight: '400',
    width: 95,
    marginRight: 12,
  },
  textValue: {
    color: '#092540',
    fontSize: 14,
    fontWeight: '600',
    flex: 1,
  },
  textAppName: {fontSize: 14, marginTop: 8, fontWeight: '700'},
};
export const pickerStyle = {
  inputIOS: {
    color: '#092540',
    backgroundColor: 'white',
    borderRadius: 5,
  },
  placeholder: {
    color: '#092540',
  },
  inputAndroid: {
    color: '#092540',
    backgroundColor: 'white',
    borderRadius: 5,
  },
};


export const colors = (color) => {
  switch (color) {
    case 'primary':
      return {
        primary: indigo,
        secondary: 'white',
        text: indigo,
      };
    case 'default':
      return {
        primary: grey,
        secondary: 'white',
        text: 'black',
      };
    case 'secondary':
      return {
        primary: indigo,
        secondary: 'white',
        text: indigo,
      };
    default:
      return {
        primary: indigo,
        secondary: 'white',
        text: indigo,
      };
  }
};

export const darkTheme = {
  mode: 'dark',
  backgroundColor: '#212121',
  secondaryBackgroundColor: '#282828',
  headerBackgroundColor: colors.darkDefault,
  loginBackgroundColor: '#F8F9FC',
  headerTextColor: '#fff',
  iconColor: '#aaa',
  textColor: '#ffffff',
  secondaryTextColor: '#aaa',
  buttonColor: colors.light,
  buttonTextColor: '#ffffff',
  statusBarStyle: 'light-content',
};

export const lightTheme = {
  mode: 'light',
  backgroundColor: '#fff',
  secondaryBackgroundColor: colors.light,
  headerBackgroundColor: colors.default,
  loginBackgroundColor: '#F8F9FC',
  headerTextColor: '#fff',
  iconColor: '#687083',
  activeIconColor: '#CF1701',
  textColor: '#212121',
  secondaryTextColor: '#aaa',
  buttonColor: colors.default,
  buttonTextColor: '#ffffff',
  statusBarStyle: 'default',
};
