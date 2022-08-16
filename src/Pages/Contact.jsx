import Navbar from "../Components/Navbar";
import Footer from '../Components/Footer'
import emailjs from "emailjs-com";
import { useState }  from "react"

function Contact() {

    const [inputs, setInputs] = useState({});
    const [alert, setAlert] = useState(false);


const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}));
}

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.send("buonaterraitaliano@info","template_syqnvp6",{
            to_name: inputs.name,
            to_email: inputs.email,
            },'KR4W0Gjl2rlCZLnur')
        .then(res  => { console.log(res); setAlert(true) })
        .then(err  => console.log(err))
      
        setInputs({name:"",email:"",contact:"",message:""})
    }


    return (
        <>
            <div className="Contact">
                <header>
                    <Navbar />
                </header>
                <section className="Globalcss GlobalComponent">
                    <h1>CONTACT US</h1>
                    <div className="figure">
                        <span>DROP US AN ENQUIRY</span>

                        <form onSubmit={sendEmail} >
                            <label htmlFor="name">Full Name:</label>
                            <input type="input" name="name" id="name" value={inputs.name} onChange={handleChange}  required />
                            <label htmlFor="email">Email Address:</label>
                            <input type="input" name="email" id="email" value={inputs.email} onChange={handleChange}  pattern="[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-zA-Z]{2,4}" required />
                            <label htmlFor="contact" >Contact Number:</label>
                            <input type="number" name="contact" maxLength={20} value={inputs.contact} onChange={handleChange}  id="contact" required />
                            <label htmlFor="message">Message</label>
                            <textarea id="message" value={inputs.textarea} onChange={handleChange} name="message"></textarea>
                            <button >Submit</button>
                        </form>
                    {
                        alert && <span style={{fontSize:"30px",border:"0px solid "}}>Thank you for your message. It has been sent.</span>
                    }
                        <span>Buona Terra complies with Personal Data Protection Act (PDPA) 2012 of Singapore.</span>
                    </div>

                </section>
                
                <iframe title="buonaterralocation" class="gmap_iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=600&amp;hl=en&amp;q=29 Scotts Rd, Singapur 228224&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
            </div>
            <Footer />
        </>
    );
}

export default Contact;
