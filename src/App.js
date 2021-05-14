import './App.css';
import Filters from './Components/Filters';
import Display from './Components/Display';
import { useState , useEffect } from 'react';

function App() {
const [years , setYears] = useState(["2006","2007","2008","2009","2010","2011","2012","2013","2014","2015","2016","2017","2018","2019","2020"])
const [selectedYear, setSelectedYear]=useState("2006");
const [isLanded , setIsLanded]=useState(true);
const [isLaunched , setIsLaunched]=useState(true);
const [data , setData] = useState([]);

const fetchdata =()=>{
    const newdata = fetch(`https://api.spacexdata.com/v4/launches?limit=100`).then( res => res.json());
    newdata.then(res =>{
      console.log("fetched data",res);
      setData(res);
    }) 
}

const fetchdataYear =()=>{
  const newdata = fetch(`https://api.spacexdata.com/v4/launches?limit=100&launch_success=true&land_success=true&launch_year=${selectedYear}`).then( res => res.json());
  newdata.then(res =>{
    console.log("fetched data",res);
    setData(res);
  }) 
}


useEffect(()=>{
    fetchdata();
},[])

useEffect(()=>{
  fetchdataYear();
},[selectedYear]);


  return (
    <div className="main">
        <div className="main-heading">
          SpaceEX Launch Programs
        </div>

        <div className="main-view">
          <div className="filter-view">
              <Filters years={years} setSelectedYear={setSelectedYear} setIsLanded={setIsLanded} setIsLaunched={setIsLaunched}/> 
          </div>
          <div className="display-view"> 
              <Display data={data}/>
          </div>
        </div>

    </div>
  );
}

export default App;
