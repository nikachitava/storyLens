import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { IPosts } from "../Interface/IPosts";
import { Button, Label, Textarea, TextInput } from "flowbite-react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Oval } from "react-loader-spinner";
import { AuthContext } from "../context/authContext";
import PageNotFound from "../components/PageNotFound";

type EditPostFormInputs = {
	title: string;
	content: string;
};

const MyPost = () => {
	const { postID } = useParams();

	const [myBlog, setMyBlog] = useState<IPosts[]>();

	const fetchBlog = async () => {
		try {
			const response = await axios.get(
				`http://localhost:3000/posts/mypost/${postID}`
			);
			setMyBlog(response.data);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		fetchBlog();
	}, []);

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<EditPostFormInputs>({});

	const navigate = useNavigate();

	const onSubmit: SubmitHandler<EditPostFormInputs> = async (data) => {
		setIsLoading(true);
		try {
			await axios.patch(
				`http://localhost:3000/posts/mypost/edit/${postID}`,
				data
			);
		} catch (error) {
			console.log(error);
		} finally {
			setIsLoading(false);
			navigate("/profile");
		}
	};

	const watchTitle = watch("title");
	const watchContent = watch("content");

	const checkIfBlogEdit = () => {
		if (myBlog) {
			const titleInitialValue = myBlog[0].title;
			const contentInitialValue = myBlog[0].content;

			if (
				watchTitle != titleInitialValue ||
				watchContent != contentInitialValue
			) {
				return false;
			}
			return true;
		}
	};

	const [isLoading, setIsLoading] = useState(false);
	const { currentUser } = useContext(AuthContext);

	const isMyPost = myBlog && currentUser?.userID == myBlog[0].userID;

	return (
		<>
			{myBlog && isMyPost ? (
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="flex gap-4 my-10"
				>
					<img
						src={`http://localhost:3000/images/${myBlog[0].coverImage}`}
						alt={myBlog[0].coverImage}
						className="w-1/2"
					/>
					<div className="flex flex-col justify-between w-full">
						<div>
							<Label value={"Title"} />
							<TextInput
								defaultValue={myBlog[0].title}
								color={errors.title ? "failure" : "gray"}
								{...register("title", {
									required: {
										value: true,
										message: "Title is required",
									},
									minLength: {
										value: 10,
										message: "Title min value 10 simbols",
									},
									maxLength: {
										value: 50,
										message: "Title max value 50 simbols",
									},
								})}
								helperText={
									errors.title && (
										<>
											<span className="font-medium">
												{errors.title.message}
											</span>
										</>
									)
								}
							/>
						</div>
						<div>
							<Label value={"Content"} />
							<Textarea
								rows={10}
								defaultValue={myBlog[0].content}
								color={errors.content ? "failure" : "gray"}
								{...register("content", {
									required: {
										value: true,
										message: "Content is required",
									},
									minLength: {
										value: 10,
										message: "Title min value 10 simbols",
									},
								})}
								helperText={
									errors.content && (
										<>
											<span className="font-medium">
												{errors.content.message}
											</span>
										</>
									)
								}
							/>
						</div>
						<div>
							<Label
								value={`Created date: ${
									myBlog[0].created_at.split("T")[0]
								}`}
							/>
						</div>
						<Button type="submit" disabled={checkIfBlogEdit()}>
							{isLoading ? (
								<Oval
									visible={true}
									height="20"
									width="20"
									color="#ff0000"
									ariaLabel="oval-loading"
									wrapperStyle={{}}
									wrapperClass=""
								/>
							) : (
								"Edit"
							)}
						</Button>
					</div>
				</form>
			) : (
				<PageNotFound />
			)}
		</>
	);
};

export default MyPost;
