import { useState } from 'react'
import { Cont, SearchBar, Bar, BG} from './styled-components';
import './App.css'

function App() {
  const [results, setResults] = useState("");
  let timer;
  let timerOn = false;

  async function searchItems(searching){
      timerOn = false;
      const linkApi = "https://api.github.com/search/issues?q=repo:facebook/react+"+ searching +":in:title";
      const response = await fetch(linkApi);
      const responseJSON = await response.json();
      if(responseJSON.total_count == 0){
        setResults(<Bar failed>no results :C</Bar>);
      }
      else{
        const searchResults = responseJSON.items.slice(0,5).map((e,i)=> <Bar key={i}>{searching} {'=>'} {e.title}</Bar>);
        setResults(searchResults);
      }
  }
  
  function starTimerForSearch(search){
    if(timerOn){
      clearTimeout(timer);
    }
    timer = setTimeout(searchItems.bind(null, search), 1000);
    timerOn = true;
  }

  return (
    <BG>
      <Cont>
        <SearchBar type="text" placeholder="Search" onChange={ 
          (event) =>{
              starTimerForSearch(event.target.value);
          }}/>
          {results}
      </Cont>
    </BG>
  )
}

export default App
