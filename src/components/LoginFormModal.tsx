import { Button, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";

const LoginFormModal = () => {
	return (
		<form className="flex max-w-lg flex-col gap-4 p-8 bg-lightblack lg:w-[500px]">
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

			<div className="flex items-center gap-2">
				<Label htmlFor="agree" className="flex">
					<Link
						to={"#"}
						className="text-cyan-600 hover:underline dark:text-cyan-500"
					>
						Forgot password?
					</Link>
				</Label>
			</div>
			<Button type="submit">LOGIN</Button>
		</form>
	);
};

export default LoginFormModal;
