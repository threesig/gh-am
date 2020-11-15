import React from "react";
import {ThemeProvider} from 'styled-components';
import buttonThemes from './ui/themes';
import * as I from "./declare/interfaces";
import * as UI from "./ui";

const Button: React.FC<I.Button> = ({
                                      children,
                                      callback = () => {},
                                      isEnabled= true,
                                      volume= 0,
                                      colorScheme= 'default'
}) => {

    const buttonProps = {
        onClick: (e:Event) => callback(e),
        disabled: !isEnabled,
        volume,
        colorScheme,
        'data-testid': 'button'
    }
    return (
      <ThemeProvider theme={buttonThemes}>
        <UI.Button {...buttonProps}>{children}</UI.Button>
      </ThemeProvider>
    );
}
export default Button;