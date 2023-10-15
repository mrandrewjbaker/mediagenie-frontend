import scss from './BInput.module.scss';

export interface tiBInputProps {
	type: string;
	placeholder: string;
	onChange?: any;
	value: string;
}

export const BInput: React.FC<tiBInputProps> = ({ type, placeholder, onChange, value }) => {
	return (
		<div className={scss.BInput}>
			<input 
				className={scss.BInput_input}
				type={type} 
				placeholder={placeholder} 
				onChange={onChange} 
				value={value} 

			/>
		</div>
	)
}