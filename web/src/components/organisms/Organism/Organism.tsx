import { ReactElement } from 'react';
import { OrganismProps } from './Organism.data';
import { StyledOrganism } from './Organism.styles';

export const Organism = (props: OrganismProps): ReactElement => {
	return (
		<StyledOrganism data-testid="Organism" {...props}>
			Organism
		</StyledOrganism>
	);
};
