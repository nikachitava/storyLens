import { TextInput, Button, Textarea, FileInput, Label } from "flowbite-react";
import { useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { AuthContext } from "../context/authContext";
import { makeRequest } from "../utils/axios";

type CreateBlogInputs = {
	title: string;
	content: string;
	coverImage: FileList;
	userID: number;
};

const CreateBlogSection = () => {
	const { currentUser } = useContext(AuthContext);

	const {
		register,
		handleSubmit,

		formState: { errors },
	} = useForm<CreateBlogInputs>();

	const onSubmit: SubmitHandler<CreateBlogInputs> = async (data) => {
		try {
			const formData = new FormData();
			if (currentUser) {
				formData.append("title", data.title);
				formData.append("content", data.content);
				formData.append("userID", currentUser.userID.toString());
				formData.append("coverImage", data.coverImage[0]);
			}

			const response = await makeRequest.post(
				"posts/addnewblog",
				formData,
				{
					headers: {
						"Content-Type": "multipart/form-data",
					},
				}
			);
			console.log(response.data);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className="grid gap-4">
				<div className="">
					<Label value="Title" />
					<TextInput
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

				<div className="">
					<Label value="Content" />
					<Textarea
						placeholder="Write a blog..."
						rows={10}
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
				<div className="">
					<FileInput
						color={errors.content ? "failure" : "gray"}
						{...register("coverImage", {
							required: {
								value: true,
								message: "Image is required",
							},
						})}
						helperText={
							errors.coverImage && (
								<>
									<span className="font-medium">
										{errors.coverImage.message}
									</span>
								</>
							)
						}
					/>
				</div>
				<div className="">
					<Button type="submit">Create</Button>
				</div>
			</div>
		</form>
	);
};

export default CreateBlogSection;
