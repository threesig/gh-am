import React from "react";
import * as I from "../../global/interfaces";
import * as UI from "./ui";

const Button: React.FC<I.ButtonProps> = ({children, callback = () => {}, enabled= true}) => {

    const buttonProps = {
        onClick: (e:Event) => callback(e),
        disabled: !enabled
    }
    return <UI.Button {...buttonProps}>{children}</UI.Button>;
}
export default Button;