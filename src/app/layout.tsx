import React from "react";

export const metadata = {
  title: "Invoice",
  description: "Invoice Generator",
};

import ResponsiveAppbar from "../components/ResponsiveAppBar";
import { Box } from "@mui/material";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const lightMode = useSelector((root: RootState) => root.app.light_mode);

  // const darkTheme = createTheme({
  //   palette: {
  //     // mode: lightMode,
  //     background: {
  //       default: "#ececec",
  //     },
  //   },
  // });

  return (
    <html lang="en">
      <body>
        <React.StrictMode>
          {/* <Provider store={store}> */}
          {/* <ThemeProvider theme={darkTheme}> */}
          {/* <CssBaseline /> */}

          {/* <IntlProvider
              // messages={messagesInFrench}
              locale="fr"
              defaultLocale="en"
            > */}
          {/* <AlertProvider> */}
          <ResponsiveAppbar />
          <Box sx={{ mt: 8 }}>{children}</Box>
          {/* </AlertProvider> */}
          {/* </IntlProvider> */}
          {/* </ThemeProvider> */}

          {/* <App /> */}
          {/* </Provider> */}
        </React.StrictMode>
      </body>
    </html>
  );
}
