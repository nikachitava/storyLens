import { Button, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { LoginFormInputs } from "../Interface/LoginFormInputs";

const LoginFormModal = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginFormInputs>();

	const onSubmit: SubmitHandler<LoginFormInputs> = (data) =>
		console.log(data);

	return (
		<form
			className="flex max-w-lg flex-col gap-4 p-8 bg-lightblack lg:w-[500px]"
			onSubmit={handleSubmit(onSubmit)}
		>
			<div>
				<div className="mb-2 block">
					<Label value="Your email" />
				</div>
				<TextInput
					shadow
					color={errors.email ? "failure" : "gray"}
					{...register("email", {
						required: {
							value: true,
							message: "Email field is required",
						},
						pattern: {
							value: /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/,
							message: "Enter correct email address",
						},
					})}
					helperText={
						errors.email && (
							<>
								<span className="font-medium">
									{errors.email.message}
								</span>
							</>
						)
					}
				/>
			</div>
			<div>
				<div className="mb-2 block">
					<Label value="Your password" />
				</div>
				<TextInput
					type="password"
					color={errors.password ? "failure" : "gray"}
					shadow
					{...register("password", {
						required: {
							value: true,
							message: "Password field is required",
						},
					})}
					helperText={
						errors.password && (
							<>
								<span className="font-medium">
									{errors.password.message}
								</span>
							</>
						)
					}
				/>
			</div>

			<div className="flex items-center gap-2">
				<Label htmlFor="agree" className="flex">
					<Link
						to={""}
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
