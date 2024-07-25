
// css imports

import './App.css'

// img imports

import _moneyIcon from './images/dollar.svg'

// js imports

import Global from './components/global/index.js'

function App() {
  return(
    <div className="App">
      <header>
        <p>Controle Financeiro</p>
      </header>

      <div className="App-Body">
          <Global 
            title = "Entrada" 
            value = {0}
            moneyIcon = {_moneyIcon}
            />
          <Global 
            title = "Saídas"
            value = {0}
            moneyIcon = {_moneyIcon}
          />
          <Global 
            title = "Total"
            value = {0}
            moneyIcon = {_moneyIcon}
          />
      </div>

    </div>
  );
}

export default App;
