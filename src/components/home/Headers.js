import styled from 'styled-components';
import media from 'media';

export const MainHeader = styled.h1`
	font-weight: normal;
	padding-bottom: 0.25em;
	font-size: 4em;

	${media.tablet`
		font-size: 5em;
	`}
`;

export const SubHeader = styled.h2`
	font-size: 3em;
	font-weight: normal;
	padding: 0.5em 0;
`;

export const SubSubHeader = styled.h3`
	font-size: 1.5em;
	font-weight: normal;
`;
