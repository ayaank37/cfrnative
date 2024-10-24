import React, {createContext, useState} from 'react';

export const EnergyContext = createContext();

export const EnergyProvider = ({children}) =>{
    const [energyUsage, setEnergyUsage] = useState(
        Array(12).fill({
            homeUsage: '',
            driveUsage:'',
            trashUsage:''
        })
    );

    return (
        <EnergyContext.Provider value ={{ energyUsage, setEnergyUsage}}>
            {children}
        </EnergyContext.Provider>
    );
};