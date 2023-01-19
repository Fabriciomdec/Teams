import { TouchableOpacityProps } from 'react-native'
import * as StyledButton from './styles'

type ButtonProps = TouchableOpacityProps & {
    title: string
    type?: StyledButton.ButtonTypeStyleProps
}

export function Button({title, type = 'CREATE', ...rest}: ButtonProps) {
 return(
 <StyledButton.Container type = {type} {...rest}>
    <StyledButton.Title>{title}</StyledButton.Title>
 </StyledButton.Container>
 )
}