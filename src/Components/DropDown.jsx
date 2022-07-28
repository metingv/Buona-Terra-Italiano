/* eslint-disable */
import {  useState } from 'react'
export default function DropDown({ height, padding, visible }) {
    const [li1,setLi1] = useState(["about","menu","gallery","accolades","contact"])
    return (
      <>
      <div className="dropDown" >
        <ul>
            
                {
                    li1.map((li) => {
                        return(
                            <li>{li} </li>
                        )
                    })
                }
           
        </ul>
        </div>
      </>
    );
  }
  