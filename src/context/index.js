import { createContext, useEffect, useState } from "react";

const DataContext = createContext();

const DataProvider = ({ children }) => {

    const [data, setData] = useState([]);
    const [isDone, setIsDone] = useState(false);

    useEffect(() => {
        fetchData();
    }, [data]);

    const fetchData = async () => {
        const fetched = [];
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=50');
        const body = await response.json();
        const results = await body.results;
        let id = 1;
        for (const e of results) {
            const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
            const capitalized = e.name.charAt(0).toUpperCase();
            const name = capitalized.concat(e.name.substring(1, e.name.length));
            const url = e.url;
            fetched.push({ name, image, url });
            id++;
        }
        setData(fetched);
        setIsDone(true);
    }

    return (
        <DataContext.Provider value={{ data, isDone }}>
            {children}
        </DataContext.Provider>
    );
}

export { DataContext, DataProvider };