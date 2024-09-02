const CommentCart = () => {
	return (
		<div className="flex items-start gap-4 bg-darkblack p-4 rounded-xl">
			<img
				src="https://fastly.picsum.photos/id/30/500/500.jpg?hmac=25alSLvhfNMgaegkObmJOUwn1Y7cJeSL2fvnvcoE4Qw"
				alt="icon"
				className="w-[30px] object-contain rounded-full"
			/>
			<div>
				<h1 className="text-primary text-sm font-bold">Nika Chitava</h1>
				<p className="text-white">Very goooood</p>
			</div>
		</div>
	);
};

export default CommentCart;
