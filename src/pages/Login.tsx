import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";

const Login = () => {
	return (
		<div className="my-10 flex justify-center items-center">
			<div className="h-1/2 w-full px-4 py-6 flex flex-col gap-8 justify-center items-center bg-lightblack lg:w-1/2 rounded-2xl">
				<h1 className="text-left text-white text-3xl font-bold">
					{" "}
					Welcome Back
				</h1>

				<CustomInput placeholder="Email" />
				<CustomInput placeholder="Password" />
				<CustomButton title="LOGIN" />
			</div>
		</div>
	);
};

export default Login;
