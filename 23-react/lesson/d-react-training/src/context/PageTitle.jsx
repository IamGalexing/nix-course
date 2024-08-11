import {createContext, useContext, useState} from "react";
import PropTypes from "prop-types";


export const PageTitleContext = createContext(null);


export const usePageTitle = () => {
    const context =  useContext(PageTitleContext);

    if (context === null) {
        throw new Error("You foget to provide PageTitleProvider");
    }

    return context;
}


export const PageTitleProvider = ({ children }) => {
    const [title, _setTitle] = useState("Hi page");

    const setTitle = (newTitle) => {
        _setTitle(newTitle);
    }

    return (
        <PageTitleContext.Provider value={{title, setTitle}}>
            {children}
        </PageTitleContext.Provider>
    )
};

PageTitleProvider.propTypes = {
    children: PropTypes.node.isRequired,
}

