import React, { useEffect, useState } from 'react'
import DropDown from './DropDown'
const DropDownOptions = [
    {
        value: "red",
        label: "This is red"
    },
    {
        value: "blue",
        label: "This is blue"
    },
    {
        value: "green",
        label: "This is green"
    }
]
export default function ChangeColour() {
    const [dropOption, setDropOption] = useState(DropDownOptions[0].value)
    useEffect(() => {
        console.log("From change color in useeffect")
    }, [dropOption])
    console.log("From change color in ", dropOption)
    return (
        <div>
             <DropDown options={DropDownOptions}
                selected={dropOption}
                selectState={setDropOption}
                title="select a color"
            ></DropDown>
            <h3 style={{color:`${dropOption}`}}>color of a text</h3>
        </div>
    )
}
