import { useContext, useEffect, useState } from "react";
import { IPosts } from "../Interface/IPosts";
import { AuthContext } from "../context/authContext";
import MyBlogCard from "../components/MyBlogCard";
import { useNavigate } from "react-router-dom";
import { Oval } from "react-loader-spinner";
import { makeRequest } from "../utils/axios";

const MyBlogsSection = () => {
	const [myBlogs, setMyBlogs] = useState<IPosts[]>();

	const { currentUser } = useContext(AuthContext);
	const userID = currentUser && currentUser.userID;

	const fetchPosts = async () => {
		try {
			const response = await makeRequest.get(`posts/myposts/${userID}`);
			setMyBlogs(response.data);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		fetchPosts();
		setTimeout(() => {
			setIsLoading(false);
		}, 1000);
	}, [userID]);

	const onClickDelete = async (postID: number) => {
		try {
			const response = await makeRequest.delete(
				`posts/deletepost/${postID}`
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

	const [isLoading, setIsLoading] = useState(true);

	return (
		<>
			{isLoading ? (
				<div className="flex justify-center items-center">
					<Oval
						visible={true}
						height="80"
						width="80"
						color="#ff0000"
						ariaLabel="oval-loading"
						wrapperStyle={{}}
						wrapperClass=""
					/>
				</div>
			) : (
				<div className="grid gap-4 justify-center lg:grid-cols-3">
					{myBlogs?.length != 0 ? (
						myBlogs?.map((post) => (
							<MyBlogCard
								key={post.postID}
								title={post.title}
								subtitle={post.content}
								// image={`http://localhost:3000/images/${post.coverImage}`}
								image={`https://fastly.picsum.photos/id/951/500/500.jpg?hmac=oBFs-4cE-LhZrfVUmB0SXDHRlvngLb9-51Hry42_uXE`}
								author={post.author}
								created_at={post.created_at}
								onClickEdit={() =>
									post.postID && onClickEdit(post.postID)
								}
								onClickDelete={() =>
									post.postID && onClickDelete(post.postID)
								}
							/>
						))
					) : (
						<h1 className="text-white">
							You dont have any blogs yet.{" "}
						</h1>
					)}
				</div>
			)}
		</>
	);
};

export default MyBlogsSection;
