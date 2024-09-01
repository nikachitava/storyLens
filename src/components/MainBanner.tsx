import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
import { FaCommentDots } from "react-icons/fa";
import { FaShare } from "react-icons/fa";
import { IBlogCardProps } from "../Interface/IBlogCardProps";

const MainBanner: React.FC<IBlogCardProps> = ({
	title,
	subtitle,
	image,
	author,
	created_at,
}) => {
	return (
		<div className="flex flex-col gap-4 bg-lightblack rounded-b-xl lg:flex-row">
			<img
				src={image}
				alt={image}
				className="w-[60%] max-h-[600px]"
				loading="lazy"
			/>
			<div className="flex flex-col justify-between p-4 ">
				<div>
					<h1 className="text-primary font-bold">{title}</h1>
					<p className="text-secondary mt-4">{subtitle}</p>
				</div>
				<div className="flex justify-between items-center mt-4">
					<div>
						<p className="font-bold text-white">Author: {author}</p>
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
		</div>
	);
};

export default MainBanner;
