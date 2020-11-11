import React from "react";
import * as I from "../../global/interfaces";
import * as UI from "./ui";

const Button: React.FC<I.Button> = ({
                                             children,
                                             callback = () => {},
                                             isEnabled= true,
                                             isHilited= false,
}) => {

    const buttonProps = {
        onClick: (e:Event) => callback(e),
        disabled: !isEnabled,
        isHilited: isHilited
    }
    return <UI.Button {...buttonProps}>{children}</UI.Button>;
}
export default Button;