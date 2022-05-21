import { Button, NumberInput, Select, TextInput } from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import { useState } from 'react';
import { FiCalendar, FiPlus, FiX } from 'react-icons/fi';
import { categories } from '../../data/categories';
import { Item } from '../../types/Item';
import * as C from './styles';

type Props = {
  onAdd: (item: Item) => void;
}
export function InputArea({ onAdd }: Props) {
  const [showForm, setShowForm] = useState('none');
  const [dateField, setDateField] = useState(new Date());
  const [categoryField, setCategoryField] = useState('');
  const [titleField, setTitleFieldField] = useState('');
  const [valueField, setValueField] = useState(0);
  const [listCategories, setListCategories] = useState(() => {
    let list: string[] = [];
    Object.keys(categories).forEach(function (item) {
      list.push(categories[item].title);
    });
    return list;
  });

  let categoryKeys: string[] = Object.keys(categories);

  const handleSetDisplayMenu = () => {
    if (showForm === 'none') {
      setShowForm('flex');
    } else {
      setShowForm('none');
    }
  }

  // ref: https://www.horadecodar.com.br/2021/02/09/como-percorrer-um-objeto-em-javascript/
  Object.keys(categories).forEach(function (item) {
    if (categoryField === categories[item].title) {
      setCategoryField(item);
    }
  });

  const handleAddEvent = () => {
    let errors: string[] = [];

    if (!dateField) {
      errors.push('A data é obrigatória');
    } else if (isNaN(dateField.getTime())) {
      errors.push('Data inválida');
    }

    if (!categoryField) {
      errors.push('Selecione uma categoria');
    }

    if (!titleField) {
      errors.push('O título é obrigatório');
    }

    if (valueField <= 0) {
      errors.push('O valor deve sr superior a zero');
    }

    if (errors.length > 0) {
      alert(errors.join('\n'));
    } else {
      let newItem: Item = {
        date: dateField,
        category: categoryField,
        title: titleField,
        value: valueField,
      };

      onAdd(newItem);
      clearFields();
    }
  }

  const clearFields = () => {
    setDateField(new Date());
    setCategoryField('');
    setTitleFieldField('');
    setValueField(0);
    setShowForm('none');
  }
  return (
    <>
      <C.Background display={showForm}>
        <C.Container display={showForm}>
          <DatePicker
            className='width100'
            placeholder="Definir a data"
            label='Data'
            onChange={(e: Date) => setDateField(e)}
            icon={<FiCalendar size={16} />}
          />
          <Select
            className='width100'
            label='Categoria'
            placeholder='Defina a categoria'
            onChange={(e: string) => setCategoryField(e)}
            data={listCategories}
          />

          <TextInput
            className='width100'
            label='Título'
            value={titleField}
            onChange={e => setTitleFieldField(e.target.value)}
          />

          <NumberInput
            className='width100'
            placeholder='Quanto custou'
            label='Valor'
            value={valueField}
            onChange={(e: number) => setValueField(e)}
            defaultValue={0}
          />

          <Button onClick={handleAddEvent} className='width100'>
            Adicionar
          </Button>

        </C.Container>
      </C.Background>
      <C.Button onClick={handleSetDisplayMenu}>
        {showForm === 'none' ? <FiPlus /> : <FiX />}
      </C.Button>
    </>
  )
}
