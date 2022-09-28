import  {useState} from 'react'
import {Header} from './components/Header';
import {Footer} from './components/Footer';

const App = () => {
  
  
  const [name,setName] = useState('Pedro');
  const [bg,setBg] = useState('#FF0000');
  const [age,setAge] = useState(90);

  const [list, setList] = useState([
    "O rato roeu a roupa do rei de roma",
    "Aqui é uma frase poética",
    "Tenho pouca criatividade"
  ]);

  

  const handle20 = () =>{
    setAge(20);
    setBg('#00FF00');
  }
  const handle90 = () =>{
    setAge(90);
    setBg('#FF0000');
  }

  return(
    <div style={{backgroundColor:bg}}>
      <Header name={name} age={age}/>
      
      {age === 90 &&
        <button onClick={handle20}>Tenho 20 anos</button>
      }

      {age===20 &&
        <button onClick={handle90}>Tenho 90 anos</button>
      }

      <hr/>
      <ul>
        {list.map((item,index)=>(
          <li key={index}>{item}</li>
        ))}
      </ul>

      
      <Footer/>
    </div>
  );
}

export default App;