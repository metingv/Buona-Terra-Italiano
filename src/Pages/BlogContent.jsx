import { useState ,useEffect} from 'react'
import { useParams } from "react-router-dom";
import  axios  from "axios"

function BlogContent() {
    const [inputs, setInputs] = useState([]);

    let { id } = useParams();
     
      useEffect(() => {
        getUser();
        console.log(id)
    }, []);

    function getUser() {
        axios.get(`http://localhost/www.buonaterraitaliona.com/api/${id}`).then(function(response) {
            console.log(response.data);
            setInputs(response.data);
        });
    }
    
return (
        <>
       <section>
        bloff
       </section>

  
        </>
    );
}

export default BlogContent;
