import { BiLogoInstagramAlt } from "react-icons/bi";
import { BiLogoGmail } from "react-icons/bi";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
	return (
		<>
			<hr />
			<div className="bg-darkblack flex justify-between items-center py-4">
				<div className="">
					<p className="text-secondary">All right reserved</p>
				</div>
				<div className="flex flex-col gap-2">
					<div className="flex gap-2 items-center">
						<BiLogoInstagramAlt color="white" size={24} />
						<span className="text-secondary">@nikachitava18</span>
					</div>
					<div className="flex gap-2 items-center">
						<BiLogoGmail color="white" size={24} />
						<span className="text-secondary">
							chitava18.official@gmail.com
						</span>
					</div>
					<div className="flex gap-2 items-center">
						<FaPhoneAlt color="white" size={24} />
						<span className="text-secondary">
							+995 555 00 18 18
						</span>
					</div>
				</div>
			</div>
		</>
	);
};

export default Footer;
