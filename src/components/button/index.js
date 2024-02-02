import React from "react";
import { ButtonContainer } from './style';

function Button(props) {
    return (
        <ButtonContainer onClick={props.onClick}>
            Buscar
        </ButtonContainer>
    );
}

export default Button;
