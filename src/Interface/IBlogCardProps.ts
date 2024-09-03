export interface IBlogCardProps {
	postID?: number;
	title: string;
	subtitle?: string;
	image?: string;
	author: string;
	created_at?: string;
	onClickEdit?: ()=> void;
	onClickDelete?: ()=> void;
	onClick?: () => void;
}
