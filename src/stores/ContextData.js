import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DataContext = createContext({});

export const DataContextProvider = ({ children }) => {
	const [data, _setData] = useState([])

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        let res = await AsyncStorage.getItem('DATA');
        if (res) _setData(JSON.parse(res));
    }

	const setData = (newData) => {
		_setData(newData);
		AsyncStorage.setItem('DATA', JSON.stringify(newData))
	}

	return (
		<DataContext.Provider value={{ data, setData }}>
			{children}
		</DataContext.Provider>
	);
};

export const useDataContext = () => {
	const values = useContext(DataContext);
	return values;
};
