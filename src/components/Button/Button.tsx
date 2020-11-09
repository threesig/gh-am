import React from "react";
import * as I from "../../global/interfaces";
import * as UI from "./ui";

const Button: React.FC<I.ButtonProps> = ({children, callBack = () => {}}) => {

    const buttonProps = {
        onClick: (e:Event) => callBack(e)
    }
    return <UI.Button {...buttonProps}>{children}</UI.Button>;
}
export default Button;
