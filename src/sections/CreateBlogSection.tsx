import { TextInput, Button, Textarea, FileInput, Label } from "flowbite-react";

const CreateBlogSection = () => {
	return (
		<div className="grid gap-4">
			<div className="">
				<Label value="Title" />
				<TextInput />
			</div>
			<div className="">
				<Label value="Subtitle" />
				<TextInput />
			</div>
			<div className="">
				<Label value="Content" />
				<Textarea placeholder="Write a blog..." rows={10} />
			</div>
			<div className="">
				<Label value="Content" />
				<FileInput />
			</div>
			<div className="">
				<Button>Create</Button>
			</div>
		</div>
	);
};

export default CreateBlogSection;
