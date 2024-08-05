import { useContext } from "react";
import BlogBanner from "../components/BlogBanner";
import MainBanner from "../components/MainBanner";
import { AuthContext } from "../context/authContext";
import Header from "../components/Header";

const Home = () => {
	const { currentUser } = useContext(AuthContext);

	return (
		<section className="mt-20 py-10">
			<div className="mb-10">
				<Header title={"TODAYS MAIN BLOG"} />
			</div>
			<MainBanner
				title={"NEWS TITL"}
				subtitle={
					"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur ipsam magnam odit at maiores aut dolorem iste exercitationem pariatur, enim, adipisci molestias! Culpa ratione neque rerum commodi quidem corporis eos?"
				}
				image={
					"https://img.olympics.com/images/image/private/t_s_pog_staticContent_hero_xl_2x/f_auto/primary/ngdjbafv3twathukjbq2"
				}
				author={"ISHOWSPEED"}
				created_at={"18-10-2003"}
			/>
			{currentUser ? (
				<>
					<div className="mt-20">
						<Header
							title={"TODAYS MAIN BLOG"}
							subtitle="What is new for you?"
						/>
					</div>
					<div className="mt-3 grid gap-5 lg:grid lg:grid-cols-4">
						<BlogBanner
							title={"BLOG TITLE"}
							subtitle={
								"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur ipsam magnam odit at maiores aut dolorem iste exercitationem pariatur, enim, adipisci molestias! Culpa ratione neque rerum commodi quidem corporis eos?"
							}
							image={
								"https://cdn.europop.ge/45ae33ff-440e-4e49-8d95-c2b5bf8014ea"
							}
							author={"Nika Tchitava"}
							created_at={"18-08-2003"}
						/>
						<BlogBanner
							title={"BLOG TITLE"}
							subtitle={
								"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur ipsam magnam odit at maiores aut dolorem iste exercitationem pariatur, enim, adipisci molestias! Culpa ratione neque rerum commodi quidem corporis eos?"
							}
							image={
								"https://cdn.europop.ge/45ae33ff-440e-4e49-8d95-c2b5bf8014ea"
							}
							author={"Nika Tchitava"}
							created_at={"18-08-2003"}
						/>
						<BlogBanner
							title={"BLOG TITLE"}
							subtitle={
								"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur ipsam magnam odit at maiores aut dolorem iste exercitationem pariatur, enim, adipisci molestias! Culpa ratione neque rerum commodi quidem corporis eos?"
							}
							image={
								"https://cdn.europop.ge/45ae33ff-440e-4e49-8d95-c2b5bf8014ea"
							}
							author={"Nika Tchitava"}
							created_at={"18-08-2003"}
						/>
						<BlogBanner
							title={"BLOG TITLE"}
							subtitle={
								"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur ipsam magnam odit at maiores aut dolorem iste exercitationem pariatur, enim, adipisci molestias! Culpa ratione neque rerum commodi quidem corporis eos?"
							}
							image={
								"https://cdn.europop.ge/45ae33ff-440e-4e49-8d95-c2b5bf8014ea"
							}
							author={"Nika Tchitava"}
							created_at={"18-08-2003"}
						/>
						<BlogBanner
							title={"BLOG TITLE"}
							subtitle={
								"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur ipsam magnam odit at maiores aut dolorem iste exercitationem pariatur, enim, adipisci molestias! Culpa ratione neque rerum commodi quidem corporis eos?"
							}
							image={
								"https://cdn.europop.ge/45ae33ff-440e-4e49-8d95-c2b5bf8014ea"
							}
							author={"Nika Tchitava"}
							created_at={"18-08-2003"}
						/>
						<BlogBanner
							title={"BLOG TITLE"}
							subtitle={
								"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur ipsam magnam odit at maiores aut dolorem iste exercitationem pariatur, enim, adipisci molestias! Culpa ratione neque rerum commodi quidem corporis eos?"
							}
							image={
								"https://cdn.europop.ge/45ae33ff-440e-4e49-8d95-c2b5bf8014ea"
							}
							author={"Nika Tchitava"}
							created_at={"18-08-2003"}
						/>
						<BlogBanner
							title={"BLOG TITLE"}
							subtitle={
								"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur ipsam magnam odit at maiores aut dolorem iste exercitationem pariatur, enim, adipisci molestias! Culpa ratione neque rerum commodi quidem corporis eos?"
							}
							image={
								"https://cdn.europop.ge/45ae33ff-440e-4e49-8d95-c2b5bf8014ea"
							}
							author={"Nika Tchitava"}
							created_at={"18-08-2003"}
						/>
						<BlogBanner
							title={"BLOG TITLE"}
							subtitle={
								"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur ipsam magnam odit at maiores aut dolorem iste exercitationem pariatur, enim, adipisci molestias! Culpa ratione neque rerum commodi quidem corporis eos?"
							}
							image={
								"https://cdn.europop.ge/45ae33ff-440e-4e49-8d95-c2b5bf8014ea"
							}
							author={"Nika Tchitava"}
							created_at={"18-08-2003"}
						/>
						<BlogBanner
							title={"BLOG TITLE"}
							subtitle={
								"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur ipsam magnam odit at maiores aut dolorem iste exercitationem pariatur, enim, adipisci molestias! Culpa ratione neque rerum commodi quidem corporis eos?"
							}
							image={
								"https://cdn.europop.ge/45ae33ff-440e-4e49-8d95-c2b5bf8014ea"
							}
							author={"Nika Tchitava"}
							created_at={"18-08-2003"}
						/>
						<BlogBanner
							title={"BLOG TITLE"}
							subtitle={
								"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur ipsam magnam odit at maiores aut dolorem iste exercitationem pariatur, enim, adipisci molestias! Culpa ratione neque rerum commodi quidem corporis eos?"
							}
							image={
								"https://cdn.europop.ge/45ae33ff-440e-4e49-8d95-c2b5bf8014ea"
							}
							author={"Nika Tchitava"}
							created_at={"18-08-2003"}
						/>
						<BlogBanner
							title={"BLOG TITLE"}
							subtitle={
								"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur ipsam magnam odit at maiores aut dolorem iste exercitationem pariatur, enim, adipisci molestias! Culpa ratione neque rerum commodi quidem corporis eos?"
							}
							image={
								"https://cdn.europop.ge/45ae33ff-440e-4e49-8d95-c2b5bf8014ea"
							}
							author={"Nika Tchitava"}
							created_at={"18-08-2003"}
						/>
						<BlogBanner
							title={"BLOG TITLE"}
							subtitle={
								"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur ipsam magnam odit at maiores aut dolorem iste exercitationem pariatur, enim, adipisci molestias! Culpa ratione neque rerum commodi quidem corporis eos?"
							}
							image={
								"https://cdn.europop.ge/45ae33ff-440e-4e49-8d95-c2b5bf8014ea"
							}
							author={"Nika Tchitava"}
							created_at={"18-08-2003"}
						/>
						<BlogBanner
							title={"BLOG TITLE"}
							subtitle={
								"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur ipsam magnam odit at maiores aut dolorem iste exercitationem pariatur, enim, adipisci molestias! Culpa ratione neque rerum commodi quidem corporis eos?"
							}
							image={
								"https://cdn.europop.ge/45ae33ff-440e-4e49-8d95-c2b5bf8014ea"
							}
							author={"Nika Tchitava"}
							created_at={"18-08-2003"}
						/>
						<BlogBanner
							title={"BLOG TITLE"}
							subtitle={
								"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur ipsam magnam odit at maiores aut dolorem iste exercitationem pariatur, enim, adipisci molestias! Culpa ratione neque rerum commodi quidem corporis eos?"
							}
							image={
								"https://cdn.europop.ge/45ae33ff-440e-4e49-8d95-c2b5bf8014ea"
							}
							author={"Nika Tchitava"}
							created_at={"18-08-2003"}
						/>
						<BlogBanner
							title={"BLOG TITLE"}
							subtitle={
								"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur ipsam magnam odit at maiores aut dolorem iste exercitationem pariatur, enim, adipisci molestias! Culpa ratione neque rerum commodi quidem corporis eos?"
							}
							image={
								"https://cdn.europop.ge/45ae33ff-440e-4e49-8d95-c2b5bf8014ea"
							}
							author={"Nika Tchitava"}
							created_at={"18-08-2003"}
						/>
						<BlogBanner
							title={"BLOG TITLE"}
							subtitle={
								"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur ipsam magnam odit at maiores aut dolorem iste exercitationem pariatur, enim, adipisci molestias! Culpa ratione neque rerum commodi quidem corporis eos?"
							}
							image={
								"https://cdn.europop.ge/45ae33ff-440e-4e49-8d95-c2b5bf8014ea"
							}
							author={"Nika Tchitava"}
							created_at={"18-08-2003"}
						/>
						<BlogBanner
							title={"BLOG TITLE"}
							subtitle={
								"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur ipsam magnam odit at maiores aut dolorem iste exercitationem pariatur, enim, adipisci molestias! Culpa ratione neque rerum commodi quidem corporis eos?"
							}
							image={
								"https://cdn.europop.ge/45ae33ff-440e-4e49-8d95-c2b5bf8014ea"
							}
							author={"Nika Tchitava"}
							created_at={"18-08-2003"}
						/>
						<BlogBanner
							title={"BLOG TITLE"}
							subtitle={
								"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur ipsam magnam odit at maiores aut dolorem iste exercitationem pariatur, enim, adipisci molestias! Culpa ratione neque rerum commodi quidem corporis eos?"
							}
							image={
								"https://cdn.europop.ge/45ae33ff-440e-4e49-8d95-c2b5bf8014ea"
							}
							author={"Nika Tchitava"}
							created_at={"18-08-2003"}
						/>
						<BlogBanner
							title={"BLOG TITLE"}
							subtitle={
								"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur ipsam magnam odit at maiores aut dolorem iste exercitationem pariatur, enim, adipisci molestias! Culpa ratione neque rerum commodi quidem corporis eos?"
							}
							image={
								"https://cdn.europop.ge/45ae33ff-440e-4e49-8d95-c2b5bf8014ea"
							}
							author={"Nika Tchitava"}
							created_at={"18-08-2003"}
						/>
						<BlogBanner
							title={"BLOG TITLE"}
							subtitle={
								"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur ipsam magnam odit at maiores aut dolorem iste exercitationem pariatur, enim, adipisci molestias! Culpa ratione neque rerum commodi quidem corporis eos?"
							}
							image={
								"https://cdn.europop.ge/45ae33ff-440e-4e49-8d95-c2b5bf8014ea"
							}
							author={"Nika Tchitava"}
							created_at={"18-08-2003"}
						/>
						<BlogBanner
							title={"BLOG TITLE"}
							subtitle={
								"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur ipsam magnam odit at maiores aut dolorem iste exercitationem pariatur, enim, adipisci molestias! Culpa ratione neque rerum commodi quidem corporis eos?"
							}
							image={
								"https://cdn.europop.ge/45ae33ff-440e-4e49-8d95-c2b5bf8014ea"
							}
							author={"Nika Tchitava"}
							created_at={"18-08-2003"}
						/>
						<BlogBanner
							title={"BLOG TITLE"}
							subtitle={
								"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur ipsam magnam odit at maiores aut dolorem iste exercitationem pariatur, enim, adipisci molestias! Culpa ratione neque rerum commodi quidem corporis eos?"
							}
							image={
								"https://cdn.europop.ge/45ae33ff-440e-4e49-8d95-c2b5bf8014ea"
							}
							author={"Nika Tchitava"}
							created_at={"18-08-2003"}
						/>
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
			)}
		</section>
	);
};

export default Home;
