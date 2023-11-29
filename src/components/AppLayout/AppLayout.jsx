import { NavLink, Outlet } from 'react-router-dom';
import Home from 'pages/Home/Home';
import Movies from 'pages/Movies/Movies';
import './appLayout.css';
import { Suspense } from 'react';

const AppLayout = () => {
  return (
    <div className="main-container">
      <header className="header">
        <nav>
          <NavLink to="/" element={<Home />}>
            HOME
          </NavLink>
          <NavLink to="/movies" element={<Movies />}>
            MOVIES
          </NavLink>
        </nav>
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default AppLayout;
