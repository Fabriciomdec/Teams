import {TouchableOpacityProps} from 'react-native'
import * as StyleGroupCard from './styles'

type Props = TouchableOpacityProps & {
    title: string
}

export function GroupCard({title, ...rest}: Props) {
    return(
        <StyleGroupCard.Container {...rest}>
            <StyleGroupCard.Icon/>
            <StyleGroupCard.Title>{title}</StyleGroupCard.Title>
        </StyleGroupCard.Container>
    )
}