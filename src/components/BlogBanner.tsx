import { FaCommentDots } from "react-icons/fa";
import { FaShare } from "react-icons/fa";

import { IBlogCardProps } from "../Interface/IBlogCardProps";
import "animate.css";
import { Link } from "react-router-dom";

import { BiLike } from "react-icons/bi"; // like stroke
import { AiFillLike } from "react-icons/ai"; // like fill
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import { makeRequest } from "../utils/axios";

const BlogBanner: React.FC<IBlogCardProps> = ({
	postID,
	title,
	subtitle,
	image,
	author,
	created_at,
}) => {
	const { currentUser } = useContext(AuthContext);

	const { isPending, data } = useQuery({
		queryKey: ["likes", postID],
		queryFn: async () => {
			const response = await makeRequest.get("/likes?postID=" + postID);
			return response.data;
		},
	});

	const queryClient = useQueryClient();

	const mutationKey = ["likes"];

	const mutation = useMutation({
		mutationKey,
		mutationFn: (liked: boolean) => {
			if (liked) {
				return makeRequest.delete(
					`/likes?postID=${postID}&userID=${currentUser?.userID}`
				);
			}
			return makeRequest.post("/likes", {
				userID: currentUser?.userID,
				postID: postID,
			});
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["likes"] });
		},
	});

	const handleLike = () => {
		mutation.mutate(data.includes(currentUser?.userID));
	};

	return (
		<div className="bg-lightblack p-2 rounded-xl lg:p-4 animate__animated animate__fadeIn ">
			<Link to={`/post/${postID}`}>
				<div className="flex gap-4 lg:flex-col">
					<div className="flex w-[250px] lg:w-full">
						<img
							src={image}
							alt=""
							className="rounded-lg w-full h-[250px]"
							loading="lazy"
						/>
					</div>
					<div className="flex flex-col justify-between">
						<h1 className="text-primary font-bold text-sm ">
							{title}
						</h1>
						<p className="text-[12px] text-white">
							{subtitle?.substring(0, 30)}.....
						</p>
					</div>
				</div>
			</Link>
			<hr className="my-4" />
			<div className="flex justify-between items-center mt-4">
				<div>
					<p className="text-white text-sm">Author: {author}</p>
					<p className="text-[12px] text-secondary font-bold">
						{created_at}
					</p>
				</div>
				<div className="flex gap-4">
					{isPending ? (
						"Loading"
					) : (
						<div className="flex gap-2">
							{data.includes(currentUser?.userID) ? (
								<BiLike
									color="white"
									size={20}
									onClick={handleLike}
									className="cursor-pointer"
								/>
							) : (
								<AiFillLike
									color="white"
									size={20}
									onClick={handleLike}
									className="cursor-pointer"
								/>
							)}

							<p className="text-white font-bold text-sm">
								{data.length}
							</p>
						</div>
					)}
					<FaCommentDots color="white" size={20} />
					<FaShare color="white" size={20} />
				</div>
			</div>
		</div>
	);
};

export default BlogBanner;
