import { useContext, useEffect, useState } from "react";
import { IPosts } from "../Interface/IPosts";
import { AuthContext } from "../context/authContext";
import axios from "axios";
import MyBlogCard from "../components/MyBlogCard";
import { useNavigate } from "react-router-dom";

const MyBlogsSection = () => {
	const [myBlogs, setMyBlogs] = useState<IPosts[]>();

	const { currentUser } = useContext(AuthContext);
	const userID = currentUser && currentUser.userID;

	const fetchPosts = async () => {
		try {
			const response = await axios.get(
				`http://localhost:3000/posts/myposts/${userID}`
			);
			setMyBlogs(response.data);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		fetchPosts();
	}, [userID]);

	const onClickDelete = async (postID: number) => {
		try {
			const response = await axios.delete(
				`http://localhost:3000/posts/deletepost/${postID}`
			);
			fetchPosts();
			console.log(response.data);
		} catch (err) {
			console.log(err);
		}
	};

	const navigate = useNavigate();

	const onClickEdit = (postID: number) => {
		navigate(`/mypost/${postID}`);
	};

	return (
		<div className="grid gap-4 justify-center lg:grid-cols-3">
			{myBlogs?.length != 0 ? (
				myBlogs?.map((post) => (
					<MyBlogCard
						key={post.postID}
						title={post.title}
						subtitle={post.content}
						image={`http://localhost:3000/images/${post.coverImage}`}
						author={post.author}
						created_at={post.created_at}
						onClickEdit={() => onClickEdit(post.postID)}
						onClickDelete={() => onClickDelete(post.postID)}
					/>
				))
			) : (
				<h1 className="text-white">You dont have any blogs yet. </h1>
			)}
		</div>
	);
};

export default MyBlogsSection;
