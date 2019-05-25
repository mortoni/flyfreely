interface Colors {
  disabledColor: string;
  primaryColor: string;
  secundaryColor: string;
}

export interface ThemeInterface {
  colors: Colors;
}

const theme: ThemeInterface = {
  colors: {
    disabledColor: '#bdc3c7',
    primaryColor: '#fb8c00',
    secundaryColor: '#616161',
  },
};

export default theme;
