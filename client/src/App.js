import './App.css';
import Header from './header';
import AddNotes from './addNotes';
import ListNotes from './listNotes';

const App = () => {
  return (
    <>
    <Header />
    <AddNotes></AddNotes>
    <ListNotes></ListNotes>
    </> 
  );
};

export default App;
