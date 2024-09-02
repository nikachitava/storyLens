import { useContext, useEffect, useState } from "react";
import { IPosts } from "../Interface/IPosts";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Oval } from "react-loader-spinner";
import { AuthContext } from "../context/authContext";
import { TextInput } from "flowbite-react";
import { LuSendHorizonal } from "react-icons/lu";
import CommentCart from "../components/CommentCart";

const ReadPost = () => {
	const [blog, setBlog] = useState<IPosts[]>();

	const { postID } = useParams();

	const fetchPosts = async () => {
		try {
			const response = await axios.get(
				`http://localhost:3000/posts/mypost/${postID}`
			);
			setBlog(response.data);
		} catch (err) {
			console.log(err);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		fetchPosts();
	}, [postID]);

	const [isLoading, setIsLoading] = useState(true);
	const { currentUser } = useContext(AuthContext);

	return (
		<div className="my-10">
			{isLoading ? (
				<div className="flex justify-center items-center">
					<Oval
						visible={true}
						height="80"
						width="80"
						color="#fff"
						ariaLabel="oval-loading"
						wrapperStyle={{}}
						wrapperClass=""
					/>
				</div>
			) : currentUser ? (
				blog && (
					<div className="flex gap-16">
						<div className="w-[70%] flex flex-col gap-6">
							<img
								src={`http://localhost:3000/images/${blog[0].coverImage}`}
								alt=""
								className=""
							/>
							<div>
								<h1 className="text-primary text-2xl font-sans text-left">
									{blog[0].title}
								</h1>
								<p className="text-white">{blog[0].content}</p>
							</div>
							<div>
								<div className="bg-lightblack p-8 flex flex-col gap-4">
									<h1 className="text-white font-bold text-2xl">
										0 Comments
									</h1>
									<div className="flex flex-col gap-8">
										<CommentCart />
										<CommentCart />
									</div>
									<hr />
									<div className="flex gap-6 items-center mt-4 ">
										<TextInput
											placeholder={"Leave your comment"}
											className="w-full"
										/>
										<LuSendHorizonal
											size={24}
											color="white"
											className="cursor-pointer"
										/>
									</div>
								</div>
							</div>
						</div>
						<div className="flex-1 w-full bg-lightblack rounded-xl">
							<h1>similar posts</h1>
						</div>
					</div>
				)
			) : (
				<h1 className="text-2xl font-bold text-white text-center">
					To see post you need to sing up/in
				</h1>
			)}
		</div>
	);
};

export default ReadPost;
