import React from 'react'
import "./Style.css"
import Menu from './menuApi'
import { useState } from 'react';
import MenuCard from './MenuCard'
import Options from './Options'


const uniqueList = [
    ...new Set(Menu.map((curElement) => {
    return curElement.category;
        })
    ),
        "All",
];

console.log(uniqueList);




function Resturant() {
const [menuData, setMenuData] = useState(Menu);

const [menuList, setMenuList] = useState(uniqueList);

const filterItem = (category) => {

    if(category === "All")
    {
        setMenuData(Menu);
        return;
    }

    const updatedList = Menu.filter((curElement) => {
        return curElement.category === category; 
    });

    setMenuData(updatedList);
}

    return (
        <>
        <Options filterItem={filterItem} menuList={menuList}/>
          <MenuCard menuData={menuData}/>
        </>
    )
}

export default Resturant
