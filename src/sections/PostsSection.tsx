import { useEffect, useState } from "react";
import BlogBanner from "../components/BlogBanner";
import { IPosts } from "../Interface/IPosts";
import { makeRequest } from "../utils/axios";

const PostsSection = () => {
	const [posts, setPost] = useState<IPosts[]>();

	const fetchPosts = async () => {
		try {
			const response = await makeRequest.get("posts/");
			setPost(response.data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchPosts();
	}, []);

	return (
		<>
			{posts ? (
				posts.map((post) => (
					<BlogBanner
						key={post.postID}
						postID={post.postID}
						title={post.title}
						subtitle={post.content}
						// image={`http://localhost:3000/images/${post.coverImage}`}
						image={`https://fastly.picsum.photos/id/951/500/500.jpg?hmac=oBFs-4cE-LhZrfVUmB0SXDHRlvngLb9-51Hry42_uXE`}
						author={post.author}
						created_at={post.created_at}
					/>
				))
			) : (
				<h1 className="text-2xl text-white font-bold">
					There is no blogs founded
				</h1>
			)}
		</>
	);
};

export default PostsSection;
