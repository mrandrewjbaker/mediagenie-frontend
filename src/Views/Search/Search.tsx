import { SetStateAction, useState } from 'react';
import { useAppStoreDispatch, useAppStoreSelector } from '../../App/AppStore/AppStore';
import scss from './Search.module.scss';
import { getBasicSearchAsync, getMoviesSearchAsync, getTVSearchAsync, selectSearchState } from './Search.slice';
import { MediaBox } from '../../Components/Reusable/MediaBox/MediaBox';
import { BInput } from '../../Components/UI/BInput/BInput';
import { BButton } from '../../Components/UI/BButton/BButton';
import { MediaBoxModal } from '../../Components/Reusable/MediaBoxModal/MediaBoxModal';

export const Search: React.FC = () => {
	const [page, setPage] = useState<number>(1);
	const [searchString, setSearchString] = useState<string>('');

	const dispatch = useAppStoreDispatch();
	const searchState = useAppStoreSelector(selectSearchState);


	const handleSearch = () => {
		dispatch(getBasicSearchAsync({searchString, page }));
		dispatch(getMoviesSearchAsync({searchString, page }));
		dispatch(getTVSearchAsync({searchString, page }));
	}

	return (
		<>
			<div className={scss.Search_SearchForm}>
				<form className={scss.Search_SearchForm_form}>
					<div className={scss.Search_SearchForm_form_inputColumn}>
						<BInput
							type={'text'}
							placeholder={'Search'}
							onChange={(e: { target: { value: string; }; }) => setSearchString(e.target.value)}
							value={searchString}
						/>
					</div>
					<div className={scss.Search_SearchForm_form_buttonColumn}>
						<BButton
							type={'button'}
							onClick={handleSearch}
							label={'Search'}
							iconPosition={'left'}
							icon={'search'}
						/>
					</div>

				</form>
			</div>
			<div className={scss.Search_ResultsSection}>
				<div className={scss.Search_ResultsContainer}>
					{
						searchState.basic.data.length > 0 && (
							<div className={scss.Search_ResultsContainer_title}>
								<h2>Movies</h2>
							</div>
						)
					}
					{
						searchState.movies.data.length > 0 && searchState.movies.data.map((item, index) => {
							if (item.poster_path === null) {
								return null;
							}
							return (
								<MediaBox
									key={index}
									id={item.id}
									title={item.title}
									posterPath={item.poster_path}
								/>
							)
						})
					}
				</div>
				<div className={scss.Search_ResultsContainer}>
					{
						searchState.basic.data.length > 0 && (
							<div className={scss.Search_ResultsContainer_title}>
								<h2>TV Shows</h2>
							</div>
						)
					}
					{
						searchState.tv.data.length > 0 && searchState.tv.data.map((item, index) => {
							return (
								<MediaBox
									key={index}
									id={item.id}
									title={item.title || item.name}
									posterPath={item.poster_path}
								/>
							)
						})
					}
				</div>
			</div>
			<MediaBoxModal />
		</>
	)
}