import axios from 'axios';
import { useEffect, useState } from 'react';
import { PHPURL } from './url';


const Data = () => {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            PHPURL
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

/*   const Data = ({setData}) => {
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            PHPURL
          );
          setData(response.data);
        } catch (error) {
          console.error("Error al obtener datos:", error);
        }
      };
  
      fetchData();
    }, [setData]);
  
    return null;
  }; */


  export default Data;