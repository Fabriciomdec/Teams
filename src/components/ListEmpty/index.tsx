import * as StyleListEmpty from './styles'

type ListEmptyProps = {
    message: string
}

export function ListEmpty({message}: ListEmptyProps) {
return(
    <StyleListEmpty.Container>
        <StyleListEmpty.Message>{message}</StyleListEmpty.Message>
    </StyleListEmpty.Container>
)
}