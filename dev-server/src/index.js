"use strict"

//import react and reactDom for browser rendering
import React from "react"
import ReactDom from "react-dom"

import Moment from "moment"

//import the react-json-view component (installed with npm)
import JsonViewer from "./../../src/js/index"

const App = () => {
    const [search, setSearch] = React.useState('');

    const operationCallback = (editProps) => {
        return true;
    };

    const searchTextKeydown = (event) => {
        if (event.key === 'Enter') {
            var enteredvalue = event.target.value;
            // add space with the text to search again with the same TCA
            if (search === enteredvalue) {
                enteredvalue += " ";
            }
            setSearch(enteredvalue);
        }
    };

    return <div>
        Search: <input onKeyDown={searchTextKeydown} />
        <JsonViewer
            highlightSearch={search}
            highlightSearchColor={"yellow"}
            style={{ padding: "30px", backgroundColor: "white" }}
            src={getExampleJson1()}
            collapseStringsAfterLength={12}
            displayObjectSize={true}
            name={false}
            displayDataTypes={false}
            collapsed={1}
            onEdit={operationCallback}
            onAdd={operationCallback}
            onDelete={operationCallback}
            defaultValue=""
            theme={{
                base00: 'rgba(0, 0, 0, 0)',
                base01: 'rgb(245, 245, 245)',
                base02: 'rgb(235, 235, 235)',
                base03: '#9e9e9e',
                base04: 'rgba(0, 0, 0, 0.3)',
                base05: '#616161',
                base06: '#424242',
                base07: '#212121',
                base08: '#880e4f', // No idea!!
                base09: '#304FFE', // String
                base0A: '#880e4f', // Null
                base0B: '#00A4D3', // float
                base0C: '#212121', // Array numbers
                base0D: '#616161', // Date and open
                base0E: '#c224ff',
                base0F: '#00A4D3',
            }}
        /></div>
}

//render 2 different examples of the react-json-view component
ReactDom.render(
    <App />,
    document.getElementById("app-container")
)

/*-------------------------------------------------------------------------*/
/*     the following functions just contain test json data for display     */
/*-------------------------------------------------------------------------*/

//just a function to get an example JSON object
function getExampleJson1() {
    return {
        "glossary": {
            "title": "example glossary",
            "GlossDiv": {
                "title": "S",
                "GlossList": {
                    "GlossEntry": {
                        "ID": "SGML",
                        "SortAs": "SGML",
                        "GlossTerm": "Standard Generalized Markup Language",
                        "Acronym": "SGML",
                        "Abbrev": "ISO 8879:1986",
                        "GlossDef": {
                            "para": "A meta-markup language, used to create markup languages such as DocBook.",
                            "GlossSeeAlso": ["GML", "XML"]
                        },
                        "GlossSee": "markup"
                    }
                }
            }
        }
    };
}