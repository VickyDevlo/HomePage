import { useState, useEffect, useRef } from "react";
import DropDown from './DropDownList'

const MenuItems = ({item,depthLevel}) => {

    const [dropdown, setDropdown] = useState(false);

    let ref = useRef();

    useEffect(() => {
        const handler = (event) => {
            if (dropdown && ref.current && !ref.current.contains(event.target)) {
                setDropdown(false);
            }
        };
        document.addEventListener("mousedown", handler);
        document.addEventListener("touchstart", handler);
        return () => {
            // Cleanup the event listener
            document.removeEventListener("mousedown", handler);
            document.removeEventListener("touchstart", handler);
        };
    }, [dropdown]);

    const onMouseEnter = () => {
        window.innerWidth > 960 && setDropdown(true);
    };

    const onMouseLeave = () => {
        window.innerWidth > 960 && setDropdown(false);
    };

    return ( 
        <div>
        <li className = "menu-items" ref = { ref } onMouseEnter = { onMouseEnter } onMouseLeave = {onMouseLeave }>
            
                items.submenu ?
                  
                        <>
                        <button type = "button" aria-haspopup = "menu" aria-expanded = {dropdown ? "true" : "false"} 
                        onClick = {
                            () => setDropdown((prev) => !prev)
                        }
                        >
                        {
                            item.title
                        }
                        {
                            depthLevel > 0 ? < span > & raquo; </span> : <span className="arrow" />
                        } 
                        
                        </button>

                        <DropDown depthLevel = { depthLevel } submenus = { item.submenu } dropdown = {dropdown }/>
                        ) : (<a href = "/#" > { item.title } </a> 
                        </>
                    
            
            </li>
        </div>
    );
}


export default MenuItems;