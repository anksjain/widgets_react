import { Button, Select } from 'antd';
import React,{useEffect} from 'react'
const { Option } = Select;
function DropDown({ options, selected, selectState, title }) {
    useEffect(()=>{
        console.log("use effeci in dropedown component")
    },[selected])
    const Myoptions = options.map((val, index) => {
        return (
            <Option
             key={index}
              value={val.value}
              >{val.label}</Option>
              );
            })
            console.log("In dropdown component")
            console.log("In dropdown Component",selected)
            return (
                <div>
            <Select onChange={(e)=>selectState(e)} defaultValue={selected}>
                {Myoptions}
            </Select>
            </div>
    )
}

export default DropDown;
