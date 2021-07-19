import axios from 'axios'
import { Input } from 'antd';
import React, { useState, useEffect } from 'react'
function Search() {
    const [term, setTerm] = useState('')
    const [results, setResults] = useState([])
    const [onload, setLoad] = useState(false)
    let timeoutId;
    useEffect(() => {
        const search = async () => {
            console.log("Line no 11")
            // setLoad(!onload);
            // console.log("in search method",onload)
            const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term
                },

            });
            console.log("Line 24")
            if (data) {
                console.log("Line no 26", onload)
                setLoad(false);
                setLoad(!onload);
                // setLoad(!onload);
                console.log("Line no 28", onload)
            }
            console.log(data.query.search)
            setResults(data.query.search)
            console.log("####################")
        }
        if (term) {
            // setLoad(true);
            console.log("line 38")
            setLoad(!onload);
            console.log("Line no 40", onload)
            search();
            console.log("after search method-------",onload)   
            // timeoutId = setTimeout(() => {
            //         search();
            //         console.log("after search method-------",onload)   
            // }, 2000);
        }
        return () => {
            console.log("At useeffect cleanup Return")
            clearTimeout(timeoutId)
        }

    }, [term])
    const renderdResult = results.map((result) => {
        return (
            <div key={result.pageid} className="item">
                <div className="right floated content">
                    <a className="ui button"
                        href={`https://en.wikipedia.org?curid=${result.pageid}`}
                    >
                        GO
                    </a>
                </div>
                <div className="content">
                    <div className="header">{result.title}</div>
                    <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
                </div>
            </div>
        );
    })

    console.log("befor render method", onload)
    return (
        <div>
            <Input.Search
                value={term}
                onChange={e => setTerm(e.target.value)}
                placeholder={`input search loading `} loading={onload} />
            <div className="ui celled list">{renderdResult}</div>
        </div>
    )
}
export default Search;