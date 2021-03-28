import {useState} from 'react';
    
    const Home = () => {
        //The useState function returns 2 values; a variable and a function
        //The "name" variable can be rendered in the page as a reactive value.
        //The "setName" function can be used to change the "name" variable.

        //Array destructuring is used to assign names to the returned variable and returned function from the useState function.
        //For example: useState("Obi-Wan") returns a variable first, followed by a function to change that variable.
        //The variable is then assigned a name called "name" and the function assigned a name called "setName".
    const [name, setName] = useState("Obi-Wan");
    const [age, setAge] = useState(37);


    const handleClick = () => {
        setName("Grievous");
        setAge(51);
    }

    const handleSecondClick = (name, e) => {
        console.log("Hello there! General " + name + "!", e.target);
    }

    return (  
        <div className="home">
            <h2>Homepage</h2>
            <p>{ name } is around { age } years old.</p>
            <button onClick = {handleClick}>Click Me</button>
            <button onClick = {(e) => handleSecondClick("Kenobi", e)}>Click me for weird stuff</button>
        </div>
    );
}
 
export default Home;