import React from 'react';
import Header from './Header';
import Navbar from './Navbar';
import CocktailList from './CocktailList';
import UserProfile from './UserProfile';
import OrderCocktails from './OrderCocktails';
import SearchComponent from './SearchComponent';

function Dashboard() {
  return (
    <main>
      <Header />
      <Navbar />
      <div className="dashboard-body">
        <SearchComponent />
        <div className="dashboard-content">
          <CocktailList />
          <UserProfile />
          <OrderCocktails />
        </div>
      </div>
    </main>
  );
}

export default Dashboard;
