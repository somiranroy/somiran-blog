import { useState } from "react";

const SimpleHome = () => {

    const handleClick = () => {
        console.log("Hello Somiran - How are you?");
    }
    
    const handleClickAgain = (name1) => {
        console.log("Hello" + name1 + " - How are you?");
        setName(name1);
    }

    const [name, setName] = useState("My Name is Somiran");



    return ( 
        <div className='home'>
            <h1> HomePage</h1>
            {name}
            <button onClick={handleClick}>Click me</button>
            <button onClick={    // Only 1 brace and thats to say its dynamic content here
                () => {
                    handleClickAgain("Tanishi");
                } 
            }>Click me Again</button>
        </div>
     );
}
 
export default SimpleHome;