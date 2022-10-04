import {useState,useEffect} from 'react'
import * as C from './App.styles';
import {Item} from './types/Item';
import {Category} from './types/Category';
import { categories } from './data/categories';
import { items } from './data/item';
import {getCurrentMonth,FilterListListByMonth} from './helpers/dateFilter';
import {TableArea} from './components/TableArea';

export const App = () =>{
  const [list,setList] = useState(items);
  
  const [filteredList,setFilteredList] = useState<Item[]>([]);

  const [currentMonth,setCurrentMonth] = useState(getCurrentMonth());
  
  useEffect(()=>{
    setFilteredList( FilterListListByMonth(list,currentMonth) );
  },[list,currentMonth]);

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>
        {/*Area de iformações */}

        {/*Area de inserção */}

        <TableArea list={filteredList}/>
        
        ...
      </C.Body>
    </C.Container>
  );
}

export default App;
