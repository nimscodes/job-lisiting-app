import data from '../data.json'
import Header from "./components/Header"
import JobList from './components/JobList'
import JobListItem from './components/JobListItem'

function App() {

  return (
    <div className="min-h-screen font-league-spartan bg-light-grayish-cyan-bg">
      <Header />
      <div className='p-4 mt-10'>
        <JobList data={data} />
      </div>
      
    </div>
  )
}

export default App
