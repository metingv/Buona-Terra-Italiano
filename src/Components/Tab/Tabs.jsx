import { Fragment, useState, useEffect, useRef } from "react";
import TabContent from "./TabContent";
import { Listbox } from '@headlessui/react'
import emailjs from "emailjs-com";



const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const [inputs, setInputs] = useState({});
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }));
  }

  console.log(activeTab)
  const people = [
    { id: 1, name: '1 Adult' },
    { id: 2, name: '2 Adults' },
    { id: 3, name: '3 Adults' },
    { id: 4, name: '4 Adults' },
    { id: 5, name: '5 Adults' },
    { id: 5, name: '6 Adults' },
    { id: 5, name: '7 Adults' },
  ]
  const people1 = [
    { id: 1, name: '0 Children' },
    { id: 2, name: '1 Child' },
    { id: 3, name: '2 Children' },
    { id: 4, name: '3 Children' },
    { id: 5, name: '4 Children' }
  ]
  const time = [
    { id: 1, name: '12:00 pm' },
    { id: 1, name: '12:15 pm' },
    { id: 1, name: '12:30 pm' },
    { id: 1, name: '12:45 pm' },
    { id: 1, name: '1:00 pm' },
    { id: 1, name: '1:15 pm' },
    { id: 1, name: '1:30 pm' },
    { id: 1, name: '1:45 pm' },
    { id: 1, name: '3:30 pm' },
    { id: 1, name: '4:30 pm' },
    { id: 1, name: '5:30 pm' },
    { id: 1, name: '6:30 pm' },
    { id: 1, name: '7:30 pm' },
    { id: 1, name: '8:30 pm' },
  ]
  const [selectedPerson, setSelectedPerson] = useState(people[1])
  const [selectedPerson1, setSelectedPerson1] = useState(people1[1])
  const [selectedTime, setSelectedTime] = useState(time[0])
  const [agree, setAgree] = useState(false)
  const [timevalue, setTimevalue] = useState("")
  const [scalevalue, setScaleValue] = useState("scaleX(0%)")
  const button = useRef();
  const li1 = useRef();
  const li2 = useRef();
  const li3 = useRef();
  // current history 
  useEffect(() => {
    var date = new Date();

    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;

    var today = year + "-" + month + "-" + day;
    setTimevalue(today)
  }, [])
  // disable button set in back
  useEffect(() => {
    if (button.current != null || undefined) {
      button.current.setAttribute("disabled", "disabled")
    }
    setAgree(false)
    setScaleValue("scaleX(0%)")

    if (activeTab == "tab1") {
      setScaleValue("scaleX(0%)")
      li1.current.classList.add("active")
      li2.current.classList.remove("active")
    }
    else if (activeTab == "tab2") {
      setScaleValue("scaleX(50%)")
      li2.current.classList.add("active")
    }
    else if (activeTab == "tab3") {
      setScaleValue("scaleX(100%)")
      li3.current.classList.add("active")
    }
  }, [activeTab])

  const onChangeTimeValue = (e) => {
    setTimevalue(e.target.value)
  }

  const onChangeChechbox = () => {
    setAgree((c) => !c)
    if (agree === true) {
      button.current.setAttribute("disabled", "disabled")
    }
    else {
      button.current.removeAttribute("disabled")
    }
  }

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.send("buonaterraitaliano@info","template_wzkdtoc",{
        to_name: inputs.name,
        to_email: inputs.email,
        },'KR4W0Gjl2rlCZLnur')
    .then(res  => { console.log(res) })
    .then(err  => console.log(err))
     setActiveTab("tab3")
   
}


  return (
    <div className="Tabs">
      <div className="TabsNav">
        <div className="progress"></div>
        <div className="progressstep" style={{ transform: `translate(-50%, -50%) ${scalevalue}` }}></div>
        <ul className="nav">
          <li ref={li1}>
            1 <br />
            <div className="title1">
              Reservation
            </div>
          </li>
          <li ref={li2}>
            2 <br />
            <div className="title1">
              Information
            </div>
          </li>
          <li ref={li3}>
            3 <br />
            <div className="title1">
              Confirmation
            </div>
          </li>

        </ul>
      </div>



      <div className="TabContent">

        <TabContent id="tab1" activeTab={activeTab}>
          <div className="tab1">
            <div className="inputs">
              <Listbox value={selectedPerson} onChange={setSelectedPerson} >
                <div className="ListBox">
                  <Listbox.Button className="ListboxButton">
                    <div>
                      <i class="fa-solid fa-user"></i>
                      {selectedPerson.name}
                    </div>
                    <i class="fa-solid fa-angle-down"></i>
                  </Listbox.Button>
                  <Listbox.Options className="ListboxOptions">
                    {people.map((person) => (
                      <Listbox.Option key={person.id} value={person} as={Fragment}>
                        <li>
                          {person.name}
                        </li>
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </div>
              </Listbox>
              <Listbox value={selectedPerson1} onChange={setSelectedPerson1} >
                <div className="ListBox">
                  <Listbox.Button className="ListboxButton">
                    <div>
                      <i class="fa-solid fa-user"></i>
                      {selectedPerson1.name}
                    </div>
                    <i class="fa-solid fa-angle-down"></i>
                  </Listbox.Button>
                  <Listbox.Options className="ListboxOptions">
                    {people1.map((person) => (
                      <Listbox.Option key={person.id} value={person} as={Fragment}>
                        <li>
                          {person.name}
                        </li>
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </div>
              </Listbox>
              <input type="date" value={timevalue} onChange={(e) => onChangeTimeValue(e)} />
              <Listbox value={selectedTime} onChange={setSelectedTime} >
                <div className="ListBox">
                  <Listbox.Button className="ListboxButton">
                    <div>
                      <i class="fa-solid fa-clock"></i>
                      {selectedTime.name}
                    </div>
                    <i class="fa-solid fa-angle-down"></i>
                  </Listbox.Button>
                  <Listbox.Options className="ListboxOptions">
                    {time.map((person) => (
                      <Listbox.Option key={person.id} value={person} as={Fragment}>
                        <li>
                          {person.name}
                        </li>
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </div>
              </Listbox>
            </div>

            <div className="overflowdiv">
              Please note that in order to be seated, all guests are required to show their vaccination status that is in line with the Singapore government's definition of <strong>fully vaccinated</strong> upon arrival. Restaurants reserve the right to turn away guests who fail to comply with prevailing dine-in regulations.<br /><br />

              Thank you for dining with us. For a seamless reservation experience, please note the following:<br /><br />

              • Greyed out dates indicate that either reservation is not available or all our time slots have taken up. Please contact us at +65 9456 3147 if your desired date and time is not available.<br />
              • Do inform us of any dietary intolerances or allergies by listing them under the “Special Requests” column. We will endeavour to accommodate but cannot promise that the food will be completely allergen-free.<br />
              • Dress Code: Smart Casual<br />
              • For a concise dining experience, we are offering a full course menu at the restaurant. Feel free to get in touch with us for customisation of our full course menu.<br />
              • Special requests are not guaranteed and are subject to availability and restaurant discretion. Notes stating an alternative timing or party-size will not be accommodated.<br />
            </div>
             
             <div>
            <input type="checkbox" id="agree" name="agree" value="agree" onChange={onChangeChechbox} />
            <label for="agree" id="agreelabel"> I have read and agree to the above terms and conditions. </label>
            </div>
            <button id="nextbutton" onClick={() => setActiveTab("tab2")} ref={button}  >NEXT</button>
          </div>
        </TabContent>

        <TabContent id="tab2" activeTab={activeTab}>
          <div className="tab2">
            <span>We have a table for you at Buona Terra for <strong>{selectedPerson.name}</strong> at <strong>{selectedTime.name} </strong>  on <strong>{timevalue} </strong> </span>
            <form onSubmit={sendEmail}>
            <div className="inputs">
              <input type="text" name="name" placeholder="name and surname" onChange={handleChange} required/>
              <input type="email" name="email" placeholder="email address" onChange={handleChange} pattern="[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-zA-Z]{2,4}"  required />
              <input type="number" name="contact" placeholder="phone number" onChange={handleChange} required />
            </div>
            <input type="checkbox" id="agree" name="agree" value="agree" onChange={onChangeChechbox} />
            <label for="agree" id="agreelabel"> <strong>Yes, I'd love to get updates, news and promotions from this restaurant! </strong></label><br />
            <div className="buttons">
          
              <button id="backbutton" onClick={() => setActiveTab("tab1")}>Back</button>
              <button  id="confirmbutton" >Confirm Booking</button>
          
            </div>
            </form>
          </div>
        </TabContent>


        <TabContent id="tab3" activeTab={activeTab}>
        <div className="tab3">
          <span> <strong>Your Reservation is Confirmed!</strong> Reservation details have been sent to <strong>{inputs.email}</strong> </span>
         </div>
        </TabContent>
      </div>
    </div>
  );
};
export default Tabs;
