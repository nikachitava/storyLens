import { Link } from "react-router-dom";
import { IBlogCardProps } from "../Interface/IBlogCardProps";

const SearchCard: React.FC<IBlogCardProps> = ({
	postID,
	image,
	title,
	subtitle,
	author,
	onClick,
}) => {
	return (
		<Link to={`/post/${postID}`} onClick={onClick}>
			<div className="w-full flex gap-4 bg-lightblack p-2 rounded-lg">
				<img
					src={`http://localhost:3000/images/${image}`}
					alt=""
					className="w-[200px] h-[150px]"
				/>
				<div className="flex flex-col justify-between">
					<div>
						<h1 className="text-primary font-bold">{title}</h1>
						<p className="text-secondary">
							{subtitle.substring(0, 50)}....
						</p>
					</div>
					<div>
						<p className="text-secondary text-sm">{author}</p>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default SearchCard;
