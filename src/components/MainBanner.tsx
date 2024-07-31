import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
import { FaCommentDots } from "react-icons/fa";
import { FaShare } from "react-icons/fa";

const MainBanner = () => {
	return (
		<div className="flex flex-col gap-4 bg-lightblack rounded-b-xl lg:flex-row">
			<div>
				<img
					src="https://img.olympics.com/images/image/private/t_s_pog_staticContent_hero_xl_2x/f_auto/primary/ngdjbafv3twathukjbq2"
					alt=""
					className="w-full h-auto"
				/>
			</div>
			<div className="flex flex-col justify-between p-4">
				<div>
					<h1 className="text-primary font-bold">NEWS HEADER</h1>
					<p className="text-secondary mt-4">
						Lorem ipsum dolor sit amet consectetur, adipisicing
						elit. Laboriosam qui ut obcaecati labore ex fuga
						sapiente, earum sunt tempora vitae maiores voluptatibus
						beatae consequuntur repellendus, doloribus, unde neque
						recusandae asperiores!
					</p>
				</div>
				<div className="flex justify-between items-center mt-4">
					<div>
						<p className="font-bold text-white">
							Author: Nika Tchitava
						</p>
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
		</div>
	);
};

export default MainBanner;
