import { createContext, useEffect, useState } from "react"
import { createClient } from 'contentful';

const DefaultContext = createContext()

const DefaultProvider = ({children}) => {

    const [cards, setCards] = useState([]);

    const client = createClient({
        space: '85iynf6xw7x7',
        accessToken: 'TN9HVY7Wu8NIDBpO3NE6C3jH3MUPl_fHXd6-3L9E3sE',
      });
    
      useEffect(() => {
        const consultarApi = async () => {
          try {
            const res = await client.getEntries({
              content_type: 'card',
            });
            setCards(res.items);
          } catch (error) {
            console.log(error);
          }
        };
        consultarApi();
      }, []);

    return(
        <DefaultContext.Provider
            value={{
                cards
            }}
        >
            {children}
        </DefaultContext.Provider>
    )
}

export{
    DefaultProvider
}

export default DefaultContext