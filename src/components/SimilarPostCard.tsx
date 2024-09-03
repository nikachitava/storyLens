import { IPosts } from "../Interface/IPosts";

const SimilarPostCard: React.FC<IPosts> = ({ title, author, created_at }) => {
	return (
		<div className="rounded-sm bg-darkblack p-2">
			<h1 className="text-primary">{title}</h1>
			<div className="flex items-center text-greytext text-sm gap-4">
				<p>{author}</p>
				<p>{created_at}</p>
			</div>
		</div>
	);
};

export default SimilarPostCard;
