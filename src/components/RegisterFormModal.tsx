import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { useEffect, useState } from "react";
import { makeRequest } from "../utils/axios";

type RegisterFormType = {
	username: string;
	surname: string;
	email: string;
	password: string;
	confPassword: string;
	agree: boolean;
};

const RegisterFormModal = () => {
	const {
		register,
		handleSubmit,
		watch,
		reset,
		formState,
		formState: { errors },
	} = useForm<RegisterFormType>();

	const watchPassword = watch("password");

	const [errorMessage, setErrorMessage] = useState("");

	const onSubmit: SubmitHandler<RegisterFormType> = (data) => {
		makeRequest
			.post("user/register", data)
			.then((response) => {
				if (response.status === 200) {
					window.location.reload();
				}
			})
			.catch((error) => {
				if (error.response && error.response.data) {
					setErrorMessage(error.response.data.message);
				} else {
					setErrorMessage(
						"An error occurred while processing your request."
					);
				}
			});
	};

	useEffect(() => {
		if (formState.isSubmitSuccessful) {
			reset();
		}
	}, [formState, reset]);

	return (
		<form
			className="flex max-w-lg flex-col gap-4 p-8 bg-lightblack lg:w-[500px]"
			onSubmit={handleSubmit(onSubmit)}
		>
			<div className="flex justify-between items-center gap-4">
				<div>
					<div className="mb-2 block">
						<Label value="Name" />
					</div>
					<TextInput
						type="text"
						shadow
						color={errors.username ? "failure" : "gray"}
						{...register("username", {
							required: {
								value: true,
								message: "name field is required",
							},
							pattern: {
								value: /^[A-Za-z]+$/,
								message: "Use only latin alphabet",
							},
							maxLength: {
								value: 15,
								message: "Name max lenght 15",
							},
						})}
						helperText={
							errors.username && (
								<>
									<span className="font-medium">
										{errors.username.message}
									</span>
								</>
							)
						}
					/>
				</div>
				<div>
					<div className="mb-2 block">
						<Label value="Surname" />
					</div>
					<TextInput
						type="text"
						placeholder=""
						shadow
						color={errors.surname ? "failure" : "gray"}
						{...register("surname", {
							required: {
								value: true,
								message: "Surname field is required",
							},
							pattern: {
								value: /^[A-Za-z]+$/,
								message: "Use only latin alphabet",
							},
							maxLength: {
								value: 30,
								message: "Surname max lenght 30",
							},
						})}
						helperText={
							errors.surname && (
								<>
									<span className="font-medium">
										{errors.surname.message}
									</span>
								</>
							)
						}
					/>
				</div>
			</div>

			<div>
				<div className="mb-2 block">
					<Label value="Your email" />
				</div>
				<TextInput
					type="email"
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
					shadow
					color={errors.password ? "failure" : "gray"}
					{...register("password", {
						required: {
							value: true,
							message: "Password field is required",
						},
						pattern: {
							value: /^[A-Za-z0-9]+$/,
							message: "Use only latin alphabet and numbers",
						},
						minLength: {
							value: 8,
							message: "Min lenght is 8",
						},
						maxLength: {
							value: 30,
							message: "Max lenght is 30",
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
			<div>
				<div className="mb-2 block">
					<Label value="Repeat password" />
				</div>
				<TextInput
					type="password"
					shadow
					color={errors.confPassword ? "failure" : "gray"}
					{...register("confPassword", {
						required: {
							value: true,
							message: "Password confirmation is required",
						},
						validate: {
							passwordMatch: (value) =>
								value === watchPassword ||
								"Password doesnt Match",
						},
					})}
					helperText={
						errors.confPassword && (
							<>
								<span className="font-medium">
									{errors.confPassword.message}
								</span>
							</>
						)
					}
				/>
			</div>

			<div className="flex items-center gap-2">
				<Checkbox
					id="agree"
					color={errors.agree ? "failure" : "gray"}
					{...register("agree", {
						required: {
							value: true,
							message: "Agree the terms and conditions",
						},
					})}
				/>
				<Label
					htmlFor="agree"
					className="flex "
					color={errors.agree && "failure"}
				>
					I agree with the&nbsp;
					<Link
						to={"#"}
						className="text-cyan-600 hover:underline dark:text-cyan-500"
					>
						terms and conditions
					</Link>
				</Label>
			</div>
			<h1 className="text-red-500">{errorMessage}</h1>
			<Button type="submit">Register new account</Button>
		</form>
	);
};

export default RegisterFormModal;
