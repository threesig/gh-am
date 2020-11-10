import React from "react";
import * as I from "../../global/interfaces";
import * as UI from "./ui";

const Button: React.FC<I.ButtonProps> = ({
                                             children,
                                             callback = () => {},
                                             enabled= true,
                                             hilited= false,
}) => {

    const buttonProps = {
        onClick: (e:Event) => callback(e),
        disabled: !enabled,
        hilited
    }
    return <UI.Button {...buttonProps}>{children}</UI.Button>;
}
export default Button;