import React, { useState, useContext } from 'react'
import sublinks from './data'

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
    const [isSideBarOpen, setIsSideBarOpen] = useState(false)
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false)
    const [location, setLocation] = useState({})
    const [page, setPage] = useState({page:'',links:[]})
    const openSidebar = () => {
        setIsSideBarOpen(true)
    }
    const closeSidebar = () => {
        setIsSideBarOpen(false)
    }
    const openSubmenu = (text, coordin) => {
        const page = sublinks.find((link) => link.page === text)
        setPage(page)
        setLocation(coordin)
        setIsSubmenuOpen(true)
    }
    const closeSubmenu = () => {
        setIsSubmenuOpen(false)
    }
    return <AppContext.Provider value = {{isSideBarOpen,isSubmenuOpen,openSidebar,closeSidebar,openSubmenu,closeSubmenu,location,page}}>{children }</AppContext.Provider>
}

const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppContext, AppProvider, useGlobalContext}