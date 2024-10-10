import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [data, setData] = useState({skills: [], projects: [], experience: [], education: [], links: []});

    useEffect(() => {
        axios.get('api/portfolio')
        .then((response) => {
          setData(response.data)
        })
      .catch((error) => {
        console.log(error)
      })
      },[])
      
    return (
        <DataContext.Provider value={ data }>
            {children}
        </DataContext.Provider>
    )
}


