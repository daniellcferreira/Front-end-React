import { Header } from './components/Header/Header';
import './styles/global.css'
import { Tasks } from './components/Tasks/Tasks';
import { TaksProvider } from './context/TaskContext';



function App() {
  return (
    <TaksProvider>
      <Header />
      <Tasks />
    </TaksProvider>
  );
}

export default App;
