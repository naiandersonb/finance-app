import { Item } from '../../types/Item';
import { TableItem } from '../TableItem';
import * as C from './styles';

type Props = {
  list: Item[];
}

export function TableArea({ list }: Props) {
  return (
    <C.TableContainer>
      <C.Header>
        <C.HeaderTitle>Data</C.HeaderTitle>
        <C.HeaderTitle>Categoria</C.HeaderTitle>
        <C.HeaderTitle>Título</C.HeaderTitle>
        <C.HeaderTitle justifyContent='flex-end'>Valor</C.HeaderTitle>
      </C.Header>
      <C.Body>
        {list.map((item, index) => (
          <TableItem key={index} item={item} />
        ))}
      </C.Body>
    </C.TableContainer>
  )
}
