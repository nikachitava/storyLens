import BlogBanner from "../components/BlogBanner";
import MainBanner from "../components/MainBanner";

const Home = () => {
	return (
		<section className="mt-20 py-10">
			<MainBanner />
			<div className="mt-20 grid gap-5 lg:grid lg:grid-cols-4">
				<BlogBanner />
				<BlogBanner />
				<BlogBanner />
				<BlogBanner />
				<BlogBanner />
			</div>
		</section>
	);
};

export default Home;
