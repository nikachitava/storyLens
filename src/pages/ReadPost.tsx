import { useEffect, useState } from "react";
import { IPosts } from "../Interface/IPosts";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Oval } from "react-loader-spinner";

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

	return (
		<div className="my-10">
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
				<div className="flex justify-center flex-col p-4 gap-4">
					<img
						src={`http://localhost:3000/images/${
							blog && blog[0].coverImage
						}`}
						alt=""
						className="w-[800px] m-auto"
					/>

					<div>
						<h1 className="text-primary text-2xl font-sans text-left">
							{blog && blog[0].title}
						</h1>

						<p className="text-white">{blog && blog[0].content}</p>
					</div>
				</div>
			)}
		</div>
	);
};

export default ReadPost;
