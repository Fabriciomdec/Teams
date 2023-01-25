import {TouchableOpacityProps} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import * as StyledButtonIcon from './styles'

type PropsButtonIcon = TouchableOpacityProps & {
 icon: keyof typeof MaterialIcons.glyphMap
 type?: StyledButtonIcon.ButtonIconTypeStyleProps
}

export function ButtonIcon({icon, type = 'ADD', ...rest}: PropsButtonIcon){
 return(
   <StyledButtonIcon.Container {...rest}>
     <StyledButtonIcon.Icon name={icon} type={type}/>
    </StyledButtonIcon.Container>
 )
}