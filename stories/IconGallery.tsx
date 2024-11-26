import { IconGallery as GalleryBlock, IconItem } from '@storybook/blocks';
import { styled } from '@storybook/theming';
import * as React from 'react';

import * as Icon from '../src/icons/index';

const Input = styled.input(({ theme }) => ({
	appearance: 'none',
	height: 28,
	padding: 14,
	border: 0,
	boxShadow: `${theme.button.border} 0 0 0 1px inset`,
	background: 'transparent',
	borderRadius: 4,
	fontSize: `${theme.typography.size.s1 + 1}px`,
	fontFamily: 'inherit',
	transition: 'all 150ms',
	color: theme.color.defaultText,

	'&:focus, &:active': {
		outline: 0,
		borderColor: theme.color.secondary,
		background: theme.background.app,
	},
	'&::placeholder': {
		color: theme.textMutedColor,
		opacity: 1,
	},
	'&:valid ~ code, &:focus ~ code': {
		display: 'none',
	},
	'&:invalid ~ svg': {
		display: 'none',
	},
	'&:valid ~ svg': {
		display: 'block',
	},
	'&::-ms-clear': {
		display: 'none',
	},
	'&::-webkit-search-decoration, &::-webkit-search-cancel-button, &::-webkit-search-results-button, &::-webkit-search-results-decoration': {
		display: 'none',
	},
}));

export const IconGallery = () => {
	const [searchTerm, setSearchTerm] = React.useState('');

	const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value);
	};

	const filteredList = Object.keys(Icon).filter((icon) => icon.toLowerCase().includes(searchTerm.toLowerCase()));

	return (
		<div className={'flex flex-col gap-4'}>
			<Input type="text" placeholder="Search icons" value={searchTerm} onChange={handleSearchChange} />
			<div>
				{filteredList.length === 0 ? (
					<div style={{ paddingTop: 32 }}>No icons matched "{searchTerm}"</div>
				) : (
					<GalleryBlock>
						{filteredList.map((icon) => {
							const MyIcon = Icon[icon as keyof typeof Icon] as any;
							return (
								<IconItem key={icon} name={icon}>
									<MyIcon className={' !w-7 !h-7'} />
								</IconItem>
							);
						})}
					</GalleryBlock>
				)}
			</div>
		</div>
	);
};
