"use strict"

//import react and reactDom for browser rendering
import React from "react"
import ReactDom from "react-dom"

import Moment from "moment"

//import the react-json-view component (installed with npm)
import JsonViewer from "./../../src/js/index"

const App = () => {
    const [search, setSearch] = React.useState('')

    return <div>
        Search: <input value={search} onChange={e => setSearch(e.target.value)} />
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
        "medications":[{
                "aceInhibitors":[{
                    "name":"lisinopril",
                    "strength":"10 mg Tab",
                    "dose":"1 tab",
                    "route":"PO",
                    "sig":"daily",
                    "pillCount":"#90",
                    "refills":"Refill 3"
                }],
                "antianginal":[{
                    "name":"nitroglycerin",
                    "strength":"0.4 mg Sublingual Tab",
                    "dose":"1 tab",
                    "route":"SL",
                    "sig":"q15min PRN",
                    "pillCount":"#30",
                    "refills":"Refill 1"
                }],
                "anticoagulants":[{
                    "name":"warfarin sodium",
                    "strength":"3 mg Tab",
                    "dose":"1 tab",
                    "route":"PO",
                    "sig":"daily",
                    "pillCount":"#90",
                    "refills":"Refill 3"
                }],
                "betaBlocker":[{
                    "name":"metoprolol tartrate",
                    "strength":"25 mg Tab",
                    "dose":"1 tab",
                    "route":"PO",
                    "sig":"daily",
                    "pillCount":"#90",
                    "refills":"Refill 3"
                }],
                "diuretic":[{
                    "name":"furosemide",
                    "strength":"40 mg Tab",
                    "dose":"1 tab",
                    "route":"PO",
                    "sig":"daily",
                    "pillCount":"#90",
                    "refills":"Refill 3"
                }],
                "mineral":[{
                    "name":"potassium chloride ER",
                    "strength":"10 mEq Tab",
                    "dose":"1 tab",
                    "route":"PO",
                    "sig":"daily",
                    "pillCount":"#90",
                    "refills":"Refill 3"
                }]
            }
        ],
        "labs":[{
            "name":"Arterial Blood Gas",
            "time":"Today",
            "location":"Main Hospital Lab"      
            },
            {
            "name":"BMP",
            "time":"Today",
            "location":"Primary Care Clinic"    
            },
            {
            "name":"BNP",
            "time":"3 Weeks",
            "location":"Primary Care Clinic"    
            },
            {
            "name":"BUN",
            "time":"1 Year",
            "location":"Primary Care Clinic"    
            },
            {
            "name":"Cardiac Enzymes",
            "time":"Today",
            "location":"Primary Care Clinic"    
            },
            {
            "name":"CBC",
            "time":"1 Year",
            "location":"Primary Care Clinic"    
            },
            {
            "name":"Creatinine",
            "time":"1 Year",
            "location":"Main Hospital Lab"  
            },
            {
            "name":"Electrolyte Panel",
            "time":"1 Year",
            "location":"Primary Care Clinic"    
            },
            {
            "name":"Glucose",
            "time":"1 Year",
            "location":"Main Hospital Lab"  
            },
            {
            "name":"PT/INR",
            "time":"3 Weeks",
            "location":"Primary Care Clinic"    
            },
            {
            "name":"PTT",
            "time":"3 Weeks",
            "location":"Coumadin Clinic"    
            },
            {
            "name":"TSH",
            "time":"1 Year",
            "location":"Primary Care Clinic"    
            }
        ],
        "imaging":[{
            "name":"Chest X-Ray",
            "time":"Today",
            "location":"Main Hospital Radiology"    
            },
            {
            "name":"Chest X-Ray",
            "time":"Today",
            "location":"Main Hospital Radiology"    
            },
            {
            "name":"Chest X-Ray",
            "time":"Today",
            "location":"Main Hospital Radiology"    
            }
        ]
    }
}