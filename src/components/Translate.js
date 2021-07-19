import { Divider, Input } from 'antd'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import DropDown from './DropDown'
const languages = [
    {
        label: 'Africans',
        value: 'af'
    },
    {
        label: 'Hindi',
        value: 'hi'
    },
    {
        label: 'Arabic',
        value: 'ar'
    }

]
export default function Translate() {
    const [text, setText] = useState("")
    const [debouncetext, setDebounceText] = useState("")
    const [translatedText, setTranslatedtext] = useState("")
    const [language, setLanguage] = useState(languages[1].value)

    useEffect(() => {
        const translated = async () => {
            const {data} = await axios.post("https://translation.googleapis.com/language/translate/v2",
                {},
                {
                    params: {
                        q: text,
                        target: language,
                        key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
                    },
                });

            console.log(data)
            setTranslatedtext(data.data.translations[0].translatedText)
        }
        if(debouncetext)
        translated()
        console.log("useeefct ------", debouncetext)
    }, [language, debouncetext])


    useEffect(() => {
        const timeid = setTimeout(() => {
            console.log("line 31")
            setDebounceText(text)
        }, 500);
        return () => {
            clearTimeout(timeid)
        }
    }, [text])


    console.log("Befor ender debounce", debouncetext)
    return (
        <div>
            <Input
                value={text}
                onChange={(e) => setText(e.target.value)}
                type="text"
                placeholder="Text to translate"
            ></Input>
            <Divider></Divider>
            <DropDown options={languages} selected={language} selectState={setLanguage} title={"Select a Language"}></DropDown>
            <div>{translatedText}</div>
    </div>
    )
}
