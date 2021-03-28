const Home = () => {
    const handleClick = (e) => {
        console.log("Hello there", e);
    }

    const handleSecondClick = (name, e) => {
        console.log("Hello there! General " + name + "!", e.target);
    }

    return (  
        <div className="home">
            <h2>Homepage</h2>
            <button onClick = {handleClick}>Click Me</button>
            <button onClick = {(e) => handleSecondClick("Kenobi", e)}>Click me for weird stuff</button>
        </div>
    );
}
 
export default Home;