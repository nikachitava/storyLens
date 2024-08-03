import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";

const RegisterFormModal = () => {
	return (
		<form className="flex max-w-lg flex-col gap-4 p-8 bg-lightblack lg:w-[500px]">
			<div className="flex justify-between items-center gap-4">
				<div>
					<div className="mb-2 block">
						<Label value="Name" />
					</div>
					<TextInput
						id="email2"
						type="email"
						placeholder=""
						required
						shadow
					/>
				</div>
				<div>
					<div className="mb-2 block">
						<Label value="Surname" />
					</div>
					<TextInput
						id="email2"
						type="email"
						placeholder=""
						required
						shadow
					/>
				</div>
			</div>

			<div>
				<div className="mb-2 block">
					<Label htmlFor="email2" value="Your email" />
				</div>
				<TextInput
					id="email2"
					type="email"
					placeholder=""
					required
					shadow
				/>
			</div>
			<div>
				<div className="mb-2 block">
					<Label value="Your password" />
				</div>
				<TextInput type="password" required shadow />
			</div>
			<div>
				<div className="mb-2 block">
					<Label value="Repeat password" />
				</div>
				<TextInput type="password" required shadow />
			</div>

			<div className="flex items-center gap-2">
				<Checkbox id="agree" />
				<Label htmlFor="agree" className="flex">
					I agree with the&nbsp;
					<Link
						to={"#"}
						className="text-cyan-600 hover:underline dark:text-cyan-500"
					>
						terms and conditions
					</Link>
				</Label>
			</div>
			<Button type="submit">Register new account</Button>
		</form>
	);
};

export default RegisterFormModal;
