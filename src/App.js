import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import { useState } from 'react';
import Form from './Components/Form';

function App() {
  
  const [ showAddForm, setAddForm ] = useState(false)

  return (
    <div className='body d-flex flex-column'>
      <Header onAdd={() => setAddForm(!showAddForm)} onShow={showAddForm}/>
      <div className='container'>
        {showAddForm && <Form/>}
        <h4 className='text-center'>
          This is my practice project with react
        </h4>
      </div>
      <Footer/>
    </div>
  );
}

export default App;