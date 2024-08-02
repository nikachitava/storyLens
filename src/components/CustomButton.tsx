import { ICustomButtonProps } from "../Interface/ICustomButtonProps";

const CustomButton: React.FC<ICustomButtonProps> = () => {
	return (
		<div className="px-8 py-4 bg-primary rounded-full cursor-pointer">
			<span className="font-bold text-white">LOGIN</span>
		</div>
	);
};

export default CustomButton;
