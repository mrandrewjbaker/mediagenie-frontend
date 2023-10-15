import { useEffect, useState } from "react";

import scss from './MediaBoxModal.module.scss';
import { useAppStoreSelector } from "../../../App/AppStore/AppStore";
import { selectMediaBoxModalState } from "./MediaBoxModal.slice";


export const MediaBoxModal: React.FC = () => {
	const mediaBoxModalState = useAppStoreSelector(selectMediaBoxModalState);

	const [mediaBoxModalClassNames, setMediaBoxModalClassNames] = useState<string[]>([scss.MediaBoxModal]);


	const determineClassNames = () => {
		const classNames = [scss.MediaBoxModal];

		if (mediaBoxModalState.opened) {
			classNames.push(scss.MediaBoxModal_open);
		}

		return classNames;
	}

	const toggleModal = () => {
		setMediaBoxModalClassNames(determineClassNames());
	}


	return (
		<>
			<div className={mediaBoxModalClassNames.join(' ')}>

			</div>
		</>
	)
}