import { IBlogCardProps } from "../Interface/IBlogCardProps";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin6Fill } from "react-icons/ri";

const MyBlogCard: React.FC<IBlogCardProps> = ({
	title,
	subtitle,
	image,
	author,
	created_at,
	onClickEdit,
	onClickDelete,
}) => {
	return (
		<div className="max-w-lg bg-lightblack p-4">
			<img
				src={image}
				alt={image}
				className="object-cover rounded-md w-full h-[300px]"
			/>
			<div className="my-4">
				<h1 className="text-primary font-bold text-lg">{title}</h1>
				<p className="text-secondary text-sm">
					{subtitle.substring(0, 20)}
					<span className="underline ml-2 font-bold">
						{" "}
						...READ MORE
					</span>
				</p>
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
					<CiEdit
						color="white"
						className="cursor-pointer"
						onClick={onClickEdit}
					/>
					<RiDeleteBin6Fill
						color="white"
						className="cursor-pointer"
						onClick={onClickDelete}
					/>
				</div>
			</div>
		</div>
	);
};

export default MyBlogCard;
