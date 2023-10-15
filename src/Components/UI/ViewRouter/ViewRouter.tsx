import { Route, Routes } from 'react-router-dom';
import { Search } from '../../../Views/Search/Search';

import scss from './ViewRouter.module.scss';


export const ViewRouter: React.FC = () => {
	return (
		<div className={scss.ViewRouter}>
			<Routes>
				<Route path="/search" Component={Search} /> 
			</Routes>
		</div>
	)
}