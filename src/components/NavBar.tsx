import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { useContext, useEffect, useState } from "react";
import LoginFormModal from "./LoginFormModal";
import Modal from "./Modal";
import RegisterFormModal from "./RegisterFormModal";
import { AuthContext } from "../context/authContext";

const NavBar = () => {
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

	const { currentUser, logout } = useContext(AuthContext);

	return (
		<>
			<Modal open={isLoginModalOpen} onClose={handleLoginModal}>
				<LoginFormModal />
			</Modal>
			<Modal open={isRegisterModalOpen} onClose={handleRegisterModal}>
				<RegisterFormModal />
			</Modal>
			<header className="flex justify-between items-center py-4">
				<div>
					<Link to={"/"}>
						<h1 className="text-2xl font-bold text-white">
							story<span className="text-primary">L</span>
							ens
						</h1>
					</Link>
				</div>
				<div className="hidden lg:block">
					<SearchBar />
				</div>
				{currentUser && (
					<p className="cursor-pointer text-white" onClick={logout}>
						Log out
					</p>
				)}
				{!currentUser && (
					<div className="flex gap-4 items-center text-white">
						<p
							className="cursor-pointer"
							onClick={handleLoginModal}
						>
							Log in
						</p>
						<p
							className="cursor-pointer"
							onClick={handleRegisterModal}
						>
							Register
						</p>
					</div>
				)}
			</header>
		</>
	);
};

export default NavBar;
