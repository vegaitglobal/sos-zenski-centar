import { ReactElement } from 'react';
import { FALLBACK_SOURCE, ImageProps } from './Image.data';
import { StyledImage, StyledImageElement, StyledPicture } from './Image.styles';

export const Image = ({
	alt,
	src,
	aspectRatio,
	fit,
	source = FALLBACK_SOURCE,
	...props
}: ImageProps): ReactElement => (
	<StyledImage data-testid="Image" $aspectRatio={aspectRatio} $hasFit={!!fit} {...props}>
		<StyledPicture $fullView={!!aspectRatio || !!fit}>
			{source.map(({ media, srcset }) => (
				<source key={srcset} media={media} srcSet={srcset} />
			))}
			<StyledImageElement data-testid="ImageElement" src={src} alt={alt} $fit={fit} />
		</StyledPicture>
	</StyledImage>
);
