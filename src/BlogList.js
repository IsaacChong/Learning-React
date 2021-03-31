import {useState} from 'react';

const BlogList = ({blogs, title, handleDelete}) => {

    // const blogs = props.blogs;
    // const title = props.title;

    return (  
        <div class="blog-list">
            <h1>{title}</h1>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h3>{blog.title}</h3>
                    <p>This is written by {blog.author}.</p>
                    <button onClick={() => handleDelete(blog.id)}>delete blog</button>
                </div>
            ))}
        </div>
    );
}
 
export default BlogList;