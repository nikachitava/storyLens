import { ICustomInputProps } from "../Interface/ICustomInputProps";

const CustomInput: React.FC<ICustomInputProps> = ({ placeholder }) => {
	return (
		<label className="relative cursor-pointer">
			<input
				type="text"
				placeholder="Input"
				className="h-16 w-96 px-6 text-2xl text-white bg-lightblack border-white border-2 rounded-lg border-opacity-50 outline-none focus:border-primary placeholder-gray-300 placeholder-opacity-0 transition duration-200"
			/>
			<span className="text-2xl text-white text-opacity-80 bg-lightblack absolute left-5 top-5 px-1 transition duration-200 input-text">
				{placeholder}
			</span>
		</label>
	);
};

export default CustomInput;
