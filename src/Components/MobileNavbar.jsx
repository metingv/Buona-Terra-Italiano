import {  useState } from 'react';
import Dropdown from "./DropDown.jsx";


function MobileNavbar() {
    const [toggle, setToggle] = useState(true)
    return (
        <>
            <div className="MobileNavbar">
                Menu
                {
                    toggle ? <span class="material-symbols-outlined" onClick={() => setToggle((t) => !t)}>
                        menu
                    </span> : <span class="material-symbols-outlined" onClick={() => setToggle((t) => !t)}>
                        close
                    </span>
                }
                {/* {!toggle && (
                    <>
                        <Dropdown toggle={toggle} /> 
                        isin icine animasiya girende bezen serti render istifade uygun deyil display none block etdiyi ucun
                    </>
                )} */}
                   <Dropdown toggle={toggle} />



            </div>

        </>

    );
}

export default MobileNavbar;
