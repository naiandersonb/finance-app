import { useEffect, useState } from 'react';
import { BsGithub } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';
import * as C from './App.styles';
import { InfoArea } from './components/InfoArea';
import { InputArea } from './components/InputArea';
import { TableArea } from './components/TableArea';
import { categories } from './data/categories';
import { items } from './data/items';
import { filterListBYMonth, getCurrentMonth } from './helpers/dateFilter';
import { Item } from './types/Item';

export function App() {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  }

  const handleAddItem = (item: Item) => {
    let newList = [...list];
    newList.push(item);
    setList(newList);
  }

  useEffect(() => {
    setFilteredList(filterListBYMonth(list, currentMonth));
  }, [list, currentMonth]);

  useEffect(() => {
    let incomeCount = 0;
    let expenseCount = 0;
    for (let i in filteredList) {
      if (categories[filteredList[i].category].expense) {
        expenseCount += filteredList[i].value;
      } else {
        incomeCount += filteredList[i].value;
      }
    }

    setIncome(incomeCount);
    setExpense(expenseCount);

  }, [filteredList]);

  return (
    <C.Container>
      <C.Header>
        <div className="header-container">
          <C.headerText>Finance.<span>app</span> </C.headerText>
          <C.SocialArea>
            <C.SocialLink href="https://github.com/naiandersonb/finance-app" target='_blank' rel='noreferrer'>
              <BsGithub />
            </C.SocialLink>
            <C.SocialLink href="https://www.linkedin.com/in/naianderson-bruno-franca/" target='_blank' rel='noreferrer'>
              <FaLinkedinIn />
            </C.SocialLink>
          </C.SocialArea>
        </div>
      </C.Header>
      <C.Body>
        <div className="info-area">
          <h3>Resumo do mês</h3>
          <InfoArea
            currentMonth={currentMonth}
            onMonthChange={handleMonthChange}
            income={income}
            expense={expense}
          />
        </div>

        <div className="input-area">
          <h3>Novo dado</h3>
          <InputArea onAdd={handleAddItem} />
        </div>

        <div className="table-area">
          <TableArea list={filteredList} />
        </div>



      </C.Body>
    </C.Container>
  )
}
