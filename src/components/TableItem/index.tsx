import { Colors } from '../../assests/styles/colors';
import { categories } from '../../data/categories';
import { formatDate } from '../../helpers/dateFilter';
import { Item } from '../../types/Item';
import * as C from './styles';

type Props = {
  item: Item;
}

export function TableItem({ item }: Props) {
  return (
    <C.Card>
      <C.DateCell>
        {formatDate(item.date)}
      </C.DateCell>
      <C.CategoryCell>
        <C.Category
          color={categories[item.category].color}
          background={categories[item.category].background}
        >
          {categories[item.category].title}
        </C.Category>
      </C.CategoryCell>
      <C.TitleCell>
        {item.title}
      </C.TitleCell>
      <C.ValueCell>
        <C.Value color={categories[item.category].expense ? `${Colors.expenseColor}` : `${Colors.successColor}`}>
          R$ {item.value}
        </C.Value>
      </C.ValueCell>
    </C.Card>
  )
}
