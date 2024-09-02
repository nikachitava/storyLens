interface ICommentProps {
	image: string;
	name: string;
	desc: string;
	created_at: string;
}

const CommentCart: React.FC<ICommentProps> = ({
	image,
	name,
	desc,
	created_at,
}) => {
	return (
		<div className="flex items-start gap-4 bg-darkblack p-4 rounded-xl">
			<img
				src={`http://localhost:3000/images/${image}`}
				alt="icon"
				className="w-[30px] object-contain rounded-full"
			/>
			<div>
				<div className="flex items-end gap-2">
					<h1 className="text-primary text-sm font-bold">{name}</h1>
					<p className="text-white text-[10px]">{created_at}</p>
				</div>
				<p className="text-white">{desc}</p>
			</div>
		</div>
	);
};

export default CommentCart;
