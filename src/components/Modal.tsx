import { IoClose } from "react-icons/io5";

interface ModalProps {
	open: boolean;
	onClose: () => void;
	children: JSX.Element;
}

const Modal: React.FC<ModalProps> = ({ open, onClose, children }) => {
	return (
		<div
			onClick={onClose}
			className={`
        fixed inset-0 flex justify-center items-center transition-colors
        ${open ? "visible bg-black/20 backdrop-blur-sm" : "invisible"}
      `}
		>
			<div
				onClick={(e) => e.stopPropagation()}
				className={`
          bg-lightblack rounded-xl shadow p-6 transition-transform
          ${open ? "slide-down" : "scale-125 opacity-0"}
        `}
			>
				<button
					onClick={onClose}
					className="absolute top-2 right-2 p-2 rounded-lg text-gray-400 bg-darkblack hover:bg-lightblack hover:text-gray-600"
				>
					<IoClose />
				</button>
				{children}
			</div>
		</div>
	);
};

export default Modal;
