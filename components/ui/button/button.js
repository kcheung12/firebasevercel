
// import styled from 'styled-components'

// const ButtonBase = styled.button`
//     box-shadow:0 0 3px 1px grey;
//     padding:0.5rem 1rem;
//     color:grey;
//     background-color: treansparent;
//     border:none;
//     border-radius: 4px;
// `

import {ButtonBase} from "./styles"

function Button ({children, bgcolor, color, ...props}){
    return (
    <ButtonBase bgcolor={bgcolor} color={color}>
        {children}
    </ButtonBase>
    )
}

export default Button

