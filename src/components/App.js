import React, { useState, useEffect } from 'react'
import Search from './Search'
import "./App.css"
import DropDown from './DropDown'
import Dragger from 'antd/lib/upload/Dragger'
import Translate from './Translate'
import ChangeColour from './ChangeColour'


function App() {
   
    return (
        <div>
            {/* <Translate></Translate> */}
           {/* <ChangeColour></ChangeColour> */}
            <Search></Search>
        </div>
    )
}
export default App;