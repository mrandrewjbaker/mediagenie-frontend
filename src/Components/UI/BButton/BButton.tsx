import { MaterialSymbol } from 'material-symbols';
import scss from './BButton.module.scss';
import { MIcon } from '../MIcon/MIcon';

export interface tiBButtonProps {
		type: string;
		onClick?: any;
		icon?: MaterialSymbol;
		iconPosition?: 'left' | 'right';
		label?: string;
}

export const BButton: React.FC<tiBButtonProps> = ({ type, onClick, icon, iconPosition, label }) => {
	
	const handleOnClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.preventDefault();
		if(onClick) {
			onClick(e);
		}
	}
	

	return (
		<div className={scss.BButton}>
			<button 
				className={scss.BButton_button}
				onClick={handleOnClick}
			>
				{
					icon && iconPosition === 'left' &&
					<span className={scss.BButton_button_icon}>
						<MIcon icon={icon} />
					</span>
				}
				{
					label &&
					<span className={scss.BButton_button_label}>
						{label}
					</span>
				}
				{
					icon && iconPosition === 'right' &&
					<span className={scss.BButton_button_icon}>
						<MIcon icon={icon} />
					</span>
				}
			</button>
		</div>
	)
}