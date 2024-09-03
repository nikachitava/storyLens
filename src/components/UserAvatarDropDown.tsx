import { useRef, useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import { IoMdArrowDropdown } from "react-icons/io";

export const UserAvatarDropDown: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);
	const dropdownRef = useRef<any>(null);

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	const handleClickOutside = (event: any) => {
		if (
			dropdownRef.current &&
			!dropdownRef.current.contains(event.target)
		) {
			setIsOpen(false);
		}
	};

	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	const { logout, currentUser } = useContext(AuthContext);

	const handleLogOut = async () => {
		await logout();
	};

	return (
		<div className="relative inline-block text-left" ref={dropdownRef}>
			<div className="flex justify-between items-center">
				<p className="text-white">{currentUser?.nickname}</p>
				<div onClick={toggleDropdown} className="cursor-pointer">
					<IoMdArrowDropdown size={24} color="white" />
				</div>
			</div>
			{/* Dropdown menu */}
			{isOpen && (
				<div
					id="DropDown"
					className="z-10 absolute right-0 mt-2 w-44 bg-white divide-y divide-gray-100 rounded-lg dark:bg-gray-700 shadow-lg"
				>
					<ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
						<li>
							<Link to={"/profile"}>
								<p className="block px-4 py-2 dark:hover:bg-gray-600 dark:hover:text-white">
									<span className="font-bold text-green-400">
										Profile
									</span>
								</p>
							</Link>
						</li>

						<li onClick={handleLogOut}>
							<p className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer">
								Log Out
							</p>
						</li>
					</ul>
				</div>
			)}
		</div>
	);
};
