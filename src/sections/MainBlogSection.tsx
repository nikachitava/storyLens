import { useEffect, useState } from "react";
import MainBanner from "../components/MainBanner";
import { Link } from "react-router-dom";
import { makeRequest } from "../utils/axios";

interface IMainBlog {
	postID?: number;
	mainBlogID?: string;
	title: string;
	author: string;
	content: string;
	coverImage: string;
	created_at?: string;
	updated_at?: string;
}

const MainBlogSection = () => {
	const [mainBlog, setMainBlog] = useState<IMainBlog[] | null>(null);

	const getMainBlog = async () => {
		try {
			const response = await makeRequest.get("posts/getmainblog");

			setMainBlog(response.data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getMainBlog();
	}, []);

	return (
		<>
			{mainBlog ? (
				<Link to={`/post/${mainBlog[0].postID}`}>
					<MainBanner
						title={mainBlog[0].title}
						subtitle={`${mainBlog[0].content.substring(
							0,
							500
						)}.......`}
						// image={`http://localhost:3000/images/${mainBlog[0].coverImage}`}
						image={`https://fastly.picsum.photos/id/951/500/500.jpg?hmac=oBFs-4cE-LhZrfVUmB0SXDHRlvngLb9-51Hry42_uXE`}
						author={mainBlog[0].author}
						created_at={mainBlog[0].created_at}
					/>
				</Link>
			) : (
				<h1 className="text-white text-2xl">
					Today's Main Blog Not Found
				</h1>
			)}
		</>
	);
};

export default MainBlogSection;
