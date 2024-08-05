interface ITitleProps {
	title: string;
	subtitle?: string;
}

const Header: React.FC<ITitleProps> = ({ title, subtitle }) => {
	return (
		<div>
			<h1 className="text-primary font-bold text-3xl">{title}</h1>
			<p className="text-secondary text-sm">{subtitle}</p>
		</div>
	);
};

export default Header;
