
// css imports

import './App.css'

// img imports

import _moneyIcon from './images/dollar.svg'
import _upIcon from './images/up.svg'
import _down from './images/down.svg'

// js imports

import Global from './components/global/index.js'
import AddForm from './components/add-form/index.js'

function App() {
  return(
    <div className="App">
      <header>
        <p>Controle Financeiro</p>
      </header>

      <div className="App-Body">

        <div className='App-Body-Components'>
          <div className='App-Body-Global'>
            <Global 
                title = "Entrada" 
                value = {0}
                typeIcon = {_upIcon}
                moneyIcon = {_moneyIcon}
                />
            <Global 
                title = "Saídas"
                value = {0}
                typeIcon = {_down}
                moneyIcon = {_moneyIcon}
                />
            <Global 
                title = "Total"
                value = {0}
                typeIcon = {_moneyIcon}
                moneyIcon = {_moneyIcon}
                />
          </div>

          <AddForm />
        </div>

      </div>

    </div>
  );
}

export default App;
