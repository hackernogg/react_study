import { useState } from "react"
import { useQuery } from '@tanstack/react-query'

const fetchPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    if (!response.ok) throw new Error("Error fetching data");
    return response.json();
};

function Posts() {
    const { data, isLoading, error } = useQuery({
        queryKey: ["posts"],
        queryFn: fetchPosts,
        staleTime: 5000,
    });

    if (isLoading) return <p> Loading</p>;

    if (error) return <p> Error occured: {error.message}</p>;

    return (
        <>
            {" "}
            {data.map((post) => (<p>{post.title}</p>))}
        </>
    );
}

export default Posts;