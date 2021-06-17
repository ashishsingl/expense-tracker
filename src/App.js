import './App.css';
import Header from './Components/Header'
import Balance from './Components/Balance'
import BalanceCalc from './Components/BalanceCalc'
import HistoryList from './Components/HistoryList'
import Transaction from './Components/Transaction'

function App() {
  return (
    <div className="App">
      <Header />
      <Balance />
      <BalanceCalc />
      <HistoryList />
      <Transaction />
    </div>
  );
}

export default App;
