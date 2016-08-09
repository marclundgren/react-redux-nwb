import React from 'react';
import Footer from '../containers/Footer';
import Header from './Header';
import Info from './Info';
import VisibleTodoList from '../containers/VisibleTodoList';

const App = () => (
  <div>
    <section className='todoapp'>
      <Header />
      <VisibleTodoList />
      <Footer />
    </section>
    <Info />
  </div>
);

export default App;
