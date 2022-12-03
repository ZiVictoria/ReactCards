import { useState } from 'react';
import Cards from '../Card/Card.jsx';
import data from '../../data/data.json';
import style from '../App/app.module.scss'

function App() {
  const [count, setCount] = useState();

  const getIndex = (id) => {
    if (id === count) {
      return setCount(null);
    }
    return setCount(id);
  }
  return (
    <div className={style.app}>{
      data.map((data) =>
        <Cards 
        onClick={getIndex}
        key={data.id}
        id={data.id}
        title={data.title} 
        price={data.prices} 
        coverage={data.coverage}
        styles={data.style}
        isSelected={data.id === count}/>
      )
    }        
    </div>
  );
}

export default App;
