// import { useContext } from "react";
// import { AuthContext } from "../context/authContext";
import Header from "../components/Header";
import PostsSection from "../sections/PostsSection";
import MainBlogSection from "../sections/MainBlogSection";

const Home = () => {
	// const { currentUser } = useContext(AuthContext);

	return (
		<section className="mt-20 py-10">
			<div className="mb-10">
				<Header title={"TODAYS MAIN BLOG"} />
			</div>
			<MainBlogSection />
			{/* {currentUser ? (
				<>
					<div className="mt-20">
						<Header
							title={"TODAYS MAIN BLOG"}
							subtitle="What is new for you?"
						/>
					</div>
					<div className="mt-3 grid gap-5 lg:grid lg:grid-cols-4">
						<PostsSection />
					</div>
				</>
			) : (
				<div className="my-20 flex justify-center items-center">
					<h1 className="text-white text-3xl font-bold">
						<span className="underline underline-offset-4">
							SIGN IN
						</span>{" "}
						FOR MORE BLOGS
					</h1>
				</div>
			)} */}
			<div className="mt-20">
				<Header
					title={"TODAYS MAIN BLOG"}
					subtitle="What is new for you?"
				/>
			</div>
			<div className="mt-3 grid gap-5 lg:grid lg:grid-cols-4">
				<PostsSection />
			</div>
		</section>
	);
};

export default Home;
