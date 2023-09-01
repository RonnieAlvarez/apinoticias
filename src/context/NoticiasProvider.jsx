/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useEffect, createContext } from 'react';
import axios from 'axios';

const NoticiasContext = createContext();
const NoticiasProvider = ({ children }) => {
	const [categoria, setCategoria] = useState('general');
	const [noticias, setNoticias] = useState([]);
	const [pagina, setPagina] = useState(1);
	const [totalNoticias, setTotalNoticias] = useState(0);
	const [prevCategory, setPrevCategory] = useState('');
	const [prevPagina, setPrevPagina] = useState('');

	useEffect(() => {
		const consultarAPI = async () => {
			const url = `https://newsapi.org/v2/top-headlines?country=us&page=${pagina}&category=${categoria}&pageSize=20&apikey=${
				import.meta.env.VITE_API_KEY
			}`;
			const { data } = await axios(url);
			let newArray = data.articles.filter((element) => element.title !== null && element.title !== '');
			setNoticias(newArray);
			setTotalNoticias(data.totalResults);
			if (categoria !== prevCategory) {
				// Establece la página en 1
				setPagina(1);

				window.scrollTo(0, 0);
			}
			if (prevPagina != pagina) {
				//va al principio de la página en los cambios de pagina
				window.scrollTo(0, 0);
			}
			newArray = [];
		};
		consultarAPI();
		setPrevCategory(categoria);
		setPrevPagina(pagina);
	}, [categoria, pagina, prevCategory, prevPagina]);

	const handleChangeCategoria = (e) => {
		setCategoria(e.target.value);
	};

	const handleChangePagination = (e, valor) => {
		setPagina(valor);
	};

	return (
		<NoticiasContext.Provider
			value={{
				categoria,
				handleChangeCategoria,
				noticias,
				totalNoticias,
				handleChangePagination,
				pagina,
			}}
		>
			{children}
		</NoticiasContext.Provider>
	);
};

export { NoticiasProvider };
export default NoticiasContext;
