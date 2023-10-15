import { useEffect, useState } from 'react';
import { tiMediaBox } from '../../../Resources/MediaBox/MediaBox.types';
import scss from './MediaBox.module.scss';
import { MediaBoxModal } from '../MediaBoxModal/MediaBoxModal';

export const MediaBox: React.FC<tiMediaBox> = (props) => {
	const [title, setTitle] = useState(props.title);
	const [id, setId] = useState(props.id);
	const [poster, setPoster] = useState<any>(null);

	const [mediaBoxModalOpen, setMediaBoxModalOpen] = useState<boolean>(false);



	useEffect(() => {
		setTitle(props.title);
		setId(props.id);
	}, [props.title, props.id]);


	return (
		<div className={scss.MediaBox}>
			<img 
				className={scss.MediaBox_img}
				src={`https://image.tmdb.org/t/p/w500${props.posterPath}`} 
				alt=""
				onClick={() => setMediaBoxModalOpen(true)}
			/>
		</div>
	)
}