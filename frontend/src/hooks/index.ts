import { useState, useEffect } from "react";
import { BACKEND_URL } from "../../config";
import axios from "axios";

export const useBlogs = () => {
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState([]);

    useEffect(()=>{
        axios.get(BACKEND_URL + "/api/v1/blog/bulk",{
            headers:{
                Authorization: localStorage.getItem('token')
            }
        })
        .then((response) => {
            setBlogs(response.data.blog);
            setLoading(false);
        })
    }, [])

    return {
        loading,
        blogs
    }
}

export const useBlog = ({ id } : { id: string }) => {
    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState();

    useEffect(()=>{
        axios.get(BACKEND_URL + `/api/v1/blog/${id}`,{
            headers:{
                Authorization: localStorage.getItem('token')
            }
        })
        .then((response) => {
            setBlog(response.data.blog);
            setLoading(false);
            console.log(blog)
        })
    }, [id])

    return {
        loading,
        blog
    }
}