import { useState } from 'react';
import data from '../data.json'
import Header from "./components/Header"
import JobList from './components/JobList'


function App() {

  const [selectedFilters, setSelectedFilters] = useState([]);

  const updatedSelectedFilters  = (filter) => {
    if(!selectedFilters.includes(filter)){
      setSelectedFilters([...selectedFilters, filter]);
    }
  }

  const clearFilters = () => {
    setSelectedFilters([]);
  };

  const clearFilter = (filterToRemove) => {
    setSelectedFilters(selectedFilters.filter(filter => filter !== filterToRemove));
  };


  return (
    <div className="min-h-screen font-league-spartan bg-light-grayish-cyan-bg">
      <div role='banner'>
        <Header filters={selectedFilters} clearFilters={clearFilters} clearFilter={clearFilter} />
      </div>
      
      <div role='main' className='p-4 mt-10'>
        <JobList data={data} selectedFilters={selectedFilters} updatedSelectedFilters={updatedSelectedFilters} />
      </div>
      
    </div>
  )
}

export default App
