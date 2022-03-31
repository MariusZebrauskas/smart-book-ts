import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './pages/home/Home';
import SignUp from './pages/register/SignUp';
import Login from './pages/login/Login';
import Dashbord from './pages/dashbord/Dashbord';
import NoteBook from './pages/notebook/NoteBook';

import Nav from './components/nav/Nav';
import { Container } from '@mui/material';

function App() {
  // navigate betwean pages
  const navigate = useNavigate();
  const navigateRoutes = (params: string) => {
    setTimeout(() => {
      navigate(`${params}`);
    }, 350);
  };

  // user declaration for
  const user = {
    name: 'John',
    todos: [{ all: 'clean', custom: [{ name: 'kid', monday: '4h to school' }] }],
    doneTodos: [],
    callendarReminders: [],
  };
  return (
    <>
      <Nav navigateRoutes={navigateRoutes} />
      <Container maxWidth='lg'>
        <Routes>
          {/* home */}
          <Route path='/' element={<Home navigateRoutes={navigateRoutes} />} />

          {/* register */}
          <Route path='/register' element={<SignUp />} />

          {/* login */}
          <Route path='/login' element={<Login />} />

          {/* main pannel */}
          <Route
            path='/dashbord'
            element={<Dashbord user={user} navigateRoutes={navigateRoutes} />}
          />

          {/* todo list */}
          <Route path='/dashbord/notebook' element={<NoteBook />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
