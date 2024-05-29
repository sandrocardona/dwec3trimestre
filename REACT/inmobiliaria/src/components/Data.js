import axios from 'axios';
import { useEffect, useState } from 'react';
import { GETDATA } from './url';


const Data = () => {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            GETDATA
          );
          setData(response.data);
          console.log(response.data);
        } catch (error) {
          console.error("Error al obtener datos:", error);
        }
      };
  
      fetchData();
    }, []);
  
    return data;
  };

  export default Data;