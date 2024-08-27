import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
import { FaCommentDots } from "react-icons/fa";
import { FaShare } from "react-icons/fa";
import { IBlogCardProps } from "../Interface/IBlogCardProps";
import "animate.css";
import { Link } from "react-router-dom";

const BlogBanner: React.FC<IBlogCardProps> = ({
	postID,
	title,
	subtitle,
	image,
	author,
	created_at,
}) => {
	return (
		<Link to={`/post/${postID}`}>
			<div className="bg-lightblack p-2 rounded-xl lg:p-4 animate__animated animate__fadeIn ">
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
							{subtitle.substring(0, 30)}.....
						</p>
					</div>
				</div>
				<hr className="my-4" />
				<div className="flex justify-between items-center mt-4">
					<div>
						<p className="text-white text-sm">Author: {author}</p>
						<p className="text-[12px] text-secondary font-bold">
							{created_at}
						</p>
					</div>
					<div className="flex gap-4">
						<AiFillLike color="white" />
						<AiFillDislike color="white" />
						<FaCommentDots color="white" />
						<FaShare color="white" />
					</div>
				</div>
			</div>
		</Link>
	);
};

export default BlogBanner;
