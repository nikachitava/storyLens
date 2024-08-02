import CustomInput from "../components/CustomInput";

const Login = () => {
	return (
		<div className="my-10">
			<div className="h-screen flex flex-col gap-8 justify-center items-center bg-lightblack">
				<CustomInput placeholder="Email" />
				<CustomInput placeholder="Password" />
			</div>
		</div>
	);
};

export default Login;
