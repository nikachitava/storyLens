import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
import { FaCommentDots } from "react-icons/fa";
import { FaShare } from "react-icons/fa";

const BlogBanner = () => {
	return (
		<div className="bg-lightblack p-2 rounded-xl lg:p-4">
			<div className="flex gap-4 lg:flex-col">
				<div className="flex w-[250px] lg:w-full">
					<img
						src="https://cdn.europop.ge/45ae33ff-440e-4e49-8d95-c2b5bf8014ea"
						alt=""
						className="rounded-lg"
					/>
				</div>
				<div className="flex flex-col justify-between">
					<h1 className="text-primary font-bold text-sm ">
						BLOG HEADER
					</h1>
					<p className="text-[12px] text-white">
						Lorem, ipsum dolor sit amet consectetur adipisicing
						elit. Eaque eius cumque natus libero? Ut eos doloremque
						ipsam. Culpa sed dolorum veritatis fuga, numquam sit
						nihil adipisci odit quidem dolores harum.
					</p>
				</div>
			</div>
			<hr className="my-4" />
			<div className="flex justify-between items-center mt-4">
				<div>
					<p className="text-white text-sm">Author: Nika Tchitava</p>
					<p className="text-[12px] text-secondary font-bold">
						18-08-2003
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
	);
};

export default BlogBanner;
