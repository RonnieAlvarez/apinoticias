/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Card, CardActions, CardContent, CardMedia, Link, Typography, Grid } from '@mui/material';

const Noticia = ({ noticia }) => {
	const { urlToImage, url, title, description, source } = noticia;
	return (
		<Grid
			item
			md={6}
			lg={4}
		>
			<Card
				alignItems={'center'}
				justifyContent={'center'}
				sx={{ display: 'flex', flexDirection: 'row', maxHeight: 400, overflow: 'hidden' }}
			>
				<CardActions sx={{ display: 'flex', flexDirection: 'row' }}>
					<Link
						href={url}
						target='_blank'
						variant='button'
						// fontWeight='bold'
						width={'100%'}
						textAlign={'left'}
						sx={{ textDecoration: 'none' }}
					>
						{urlToImage && (
							<CardMedia
								component='img'
								alt={`Imagen de la noticia ${title}`}
								image={urlToImage}
								height={250}
							/>
						)}
						<CardContent>
							<Typography
								variant='body1'
								fontWeight='bold'
								color='error'
							>
								{source.name}
							</Typography>
							<Typography
								//	variant='h6'
								component='div'
							>
								{title}
							</Typography>
							<Typography
								color='black'
								variant='body2'
							>
								{description}
							</Typography>
						</CardContent>
					</Link>
				</CardActions>
			</Card>
		</Grid>
	);
};

export default Noticia;
