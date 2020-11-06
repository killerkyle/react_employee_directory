import React, {useEffect, useState} from "react";
import "./style.css";
// import { storiesOf } from '@storybook/react';
// import data from '../constants/sampleMovieData';
import DataTable, { createTheme } from 'react-data-table-component';
import API from "../../utils/API";

function SearchResults(props)
 { 
   const [data, setData] = useState([]);

   useEffect(() => {
     API.getRandomEmployees().then(employees => {
       console.log(employees.data.results);
       setData(employees.data.results)
     })
   },[])
  const columns = [
    {
      name: 'Name',
      selector: row => row.name.first + " " + row.name.last,
      sortable: true,
    },
    {
      name: 'Email',
      selector: 'email',
      sortable: true,
    },
    {
      name: 'Gender',
      selector: 'gender',
      sortable: true,
    },
  ];
  return (
    
  
      <DataTable
        title="Employee"
        columns={columns}
        data={data}
        defaultSortField="title"
      />
    )
    
   
};


export default SearchResults;