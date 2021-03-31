import {useState} from 'react';
import BlogList from './BlogList';
    
    const Home = () => {
        //The useState function returns 2 values; a variable and a function
        //The "name" variable can be rendered in the page as a reactive value.
        //The "setName" function can be used to change the "name" variable.

        //Array destructuring is used to assign names to the returned variable and returned function from the useState function.
        //For example: useState("Obi-Wan") returns a variable first, followed by a function to change that variable.
        //The variable is then assigned a name called "name" and the function assigned a name called "setName".
    const [blogs, setBlogs] = useState([
        {title: "Blog1", body: "This is about blog1", author: "Ben", id: 1},
        {title: "Blog2", body: "This is about blog2", author: "Sara", id: 2},
        {title: "Blog3", body: "This is about blog3", author: "Tod", id: 3},
        {title: "Blog4", body: "This is about blog4", author: "Sara", id: 4},
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    return (  
        <div className="home">
            <BlogList blogs={blogs} title="This is a cat" handleDelete={handleDelete}/> 
            <BlogList blogs={blogs.filter((blog) => blog.author === "Sara")} title="These are written by Sara"/> 
        </div>
    );
}
 
export default Home;