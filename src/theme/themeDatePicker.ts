// імпортуємо декларацію розширення theme'а для @mui/x-date-pickers
import '@mui/x-date-pickers/themeAugmentation';

import { createTheme } from '@mui/material/styles';

export const themeDatePicker = createTheme({
  components: {
    MuiPickersSectionList: {
      styleOverrides: {
        root: {},
        section: {},
        sectionContent: {},
      },
    },
  },
});
