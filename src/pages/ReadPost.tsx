import { useContext, useEffect, useState } from "react";
import { IPosts } from "../Interface/IPosts";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { Oval } from "react-loader-spinner";
import { AuthContext } from "../context/authContext";
import { TextInput } from "flowbite-react";
import { LuSendHorizonal } from "react-icons/lu";
import CommentCart from "../components/CommentCart";
import SimilarPostCard from "../components/SimilarPostCard";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import moment from "moment";

interface INewComment {
	comment: string;
	postID: string;
	userID: number;
}

const ReadPost = () => {
	const [blog, setBlog] = useState<IPosts[]>();
	const [similarPosts, setSimilarPosts] = useState<IPosts[]>();

	const fetchSimilarPosts = async () => {
		try {
			const response = await axios.get("http://localhost:3000/posts");
			setSimilarPosts(response.data);
		} catch (err) {
			console.log(err);
		}
	};

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
		fetchSimilarPosts();
	}, [postID]);

	const [isLoading, setIsLoading] = useState(true);
	const { currentUser } = useContext(AuthContext);

	const [comment, setComment] = useState("");

	const { data, error } = useQuery({
		queryKey: ["comments"],
		queryFn: async () => {
			const response = await axios.get(
				"http://localhost:3000/comments?postID=" + postID
			);
			return response.data;
		},
	});

	const queryClient = useQueryClient();

	const mutationKey = ["comments"];

	const mutation = useMutation({
		mutationKey,
		mutationFn: (newComment: INewComment) => {
			return axios.post("http://localhost:3000/comments", newComment);
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["comments"] });
		},
	});

	const handleClick = async (e: any) => {
		e.preventDefault();
		if (comment && postID && currentUser?.userID) {
			mutation.mutate({ comment, postID, userID: currentUser?.userID });
			setComment("");
		}
	};

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
					<div className="flex gap-16 justify-center">
						<div className="lg:w-[70%] flex flex-col gap-6">
							<img
								src={`http://localhost:3000/images/${blog[0].coverImage}`}
								alt=""
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
										{data.length} Comments
									</h1>
									<div className="flex flex-col gap-8">
										{error
											? "Something went wrong"
											: isLoading
											? "loading"
											: data.map(
													(
														comment: any,
														index: number
													) => (
														<CommentCart
															key={index}
															image={
																"https://fastly.picsum.photos/id/869/500/500.jpg?hmac=33L-Aq-Oi1OdqudA1Sk5DIiYBrjdwxb3TJ7xgoJRlyo"
															}
															name={comment.name}
															desc={comment.desc}
															created_at={moment(
																comment.createdAt
															).fromNow()}
														/>
													)
											  )}
									</div>
									<hr />
									<div className="flex gap-6 items-center mt-4 ">
										<TextInput
											placeholder={"Leave your comment"}
											className="w-full"
											value={comment}
											onChange={(e) =>
												setComment(e.target.value)
											}
										/>
										<LuSendHorizonal
											size={24}
											color="white"
											className="cursor-pointer"
											onClick={handleClick}
										/>
									</div>
								</div>
							</div>
						</div>
						<div className="hidden flex-1 w-full bg-lightblack rounded-xl lg:flex flex-col gap-2 p-2 max-h-[500px] overflow-auto">
							{similarPosts &&
								similarPosts.map((similarpost) => (
									<Link to={`/post/${similarpost.postID}`}>
										<SimilarPostCard
											key={similarpost.postID}
											title={similarpost.title}
											created_at={moment(
												similarpost.created_at
											).fromNow()}
											author={similarpost.author}
										/>
									</Link>
								))}
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
