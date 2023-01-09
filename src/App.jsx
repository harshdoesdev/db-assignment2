import { useState } from 'react';
import './App.css';

const countries = [
  "world wide","Croatia","United Kingdom","Belgium","Spain","Malta","Poland","Cyprus","Latvia","Slovakia","Lithuania","Sweden","Portugal","Romania","Bulgaria","Finland","Slovenia","France","Estonia","Slovakia","Latvia","Sweden","Portugal","Romania","Bulgaria","Finland","Slovenia","France","Estonia","Slovakia"
];

function App() {
  const [state, setState] = useState(countries.reduce((state, country) => {
    state[country] = false;
    
    return state;
  }, {}));

  const [value, setValue] = useState('');

  const handleForm = e => {
    e.preventDefault();

    if(state[value] == null) {
      return;
    }

    setState(state => ({ ...state, [value]: true }));
  };
  
  return (
    <div className="container">
      <div className="box">
        <form onSubmit={handleForm}>
          <div className="search-bar-container">
            <input 
              type="search"
              value={value}
              onChange={e => setValue(e.target.value)}
              className='search-bar'
            />
            <span className="search-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"/></svg>
            </span>
            <span className="close-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"/></svg>
            </span>
          </div>
        </form>
        <div className="bar">COUNTRIES</div>
        <div className="countries">
          {
            countries.map((country, key) => {
              return (
                <label className="country-label" key={key}>
                  <input 
                    checked={state[country]} 
                    type="checkbox" 
                    name="country[]" 
                    onChange={() => setState(state => ({ ...state, [country]: !state[country] }))} 
                  />
                  {country}
                </label>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default App
