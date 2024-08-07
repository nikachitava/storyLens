import { createContext, ReactNode, useEffect, useState } from "react";

export interface IModalContext {
	isLoginModalOpen: boolean;
	setIsLoginModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
	isRegisterModalOpen: boolean;
	setIsRegisterModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
	handleLoginModal: () => void;
	handleRegisterModal: () => void;
}

export const ModalContext = createContext<IModalContext>({
	isLoginModalOpen: false,
	setIsLoginModalOpen: () => {},
	isRegisterModalOpen: false,
	setIsRegisterModalOpen: () => {},
	handleLoginModal: () => {},
	handleRegisterModal: () => {},
});

interface IModalContextProviderProps {
	children: ReactNode;
}

export const ModalContextProvider = ({
	children,
}: IModalContextProviderProps) => {
	const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
	const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

	const handleLoginModal = () => {
		setIsLoginModalOpen((isLoginModalOpen) => !isLoginModalOpen);
	};

	const handleRegisterModal = () => {
		setIsRegisterModalOpen((isRegisterModalOpen) => !isRegisterModalOpen);
	};

	useEffect(() => {
		if (isLoginModalOpen || isRegisterModalOpen) {
			document.body.classList.add("no-scroll");
		} else {
			document.body.classList.remove("no-scroll");
		}
	}, [isLoginModalOpen, isRegisterModalOpen]);

	return (
		<ModalContext.Provider
			value={{
				isLoginModalOpen,
				setIsLoginModalOpen,
				isRegisterModalOpen,
				setIsRegisterModalOpen,
				handleLoginModal,
				handleRegisterModal,
			}}
		>
			{children}
		</ModalContext.Provider>
	);
};
