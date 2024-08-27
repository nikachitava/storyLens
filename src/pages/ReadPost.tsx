import { useParams } from "react-router-dom";

const ReadPost = () => {
	const { postID } = useParams();

	return <h1 className="text-primary">{postID}</h1>;
};

export default ReadPost;
