import React, { createContext, useState } from 'react';

export const ConfirmationContext = createContext();


const ConfirmationContextProvider = (props) => {

    const [showConfirmation, setShowConfirmation] = useState(false);

    const showConfirmationWindow = () => {
        setShowConfirmation(true);
    }

    console.log(showConfirmation)
    return (
        <ConfirmationContext.Provider value={{ showConfirmation, setShowConfirmation, showConfirmationWindow }}>
            {props.children}
        </ConfirmationContext.Provider>
    )
}

export default ConfirmationContextProvider;