import { ComponentPropsWithoutRef } from 'react';

export type AspectRatio = [number, number];
export type FitType = 'cover' | 'contain';

type ImageSource = {
	media: string;
	srcset: string;
};

export interface ImageProps extends ComponentPropsWithoutRef<'img'> {
	alt: string;
	src: string;
	fit?: FitType;
	source?: ReadonlyArray<ImageSource>;
	aspectRatio?: AspectRatio;
}

export interface StyledImageProps {
	$aspectRatio?: AspectRatio;
	$hasFit: boolean;
}

export const FALLBACK_SOURCE: ReadonlyArray<ImageSource> = [];
