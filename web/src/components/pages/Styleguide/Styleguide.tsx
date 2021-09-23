import { observer } from 'mobx-react-lite';
import { ReactElement } from 'react';
import { useGlobalStore } from '../../../GlobalStore';
import { Path } from '../../../routes/Path';
import { FontWeight, TextAlign, TextTransform } from '../../../styles/config/variables';
import Heading from '../../atoms/Heading';
import { HeadingType } from '../../atoms/Heading/Heading.data';
import { Icon } from '../../atoms/Icon/Icon';
import Paragraph from '../../atoms/Paragraph';
import { ParagraphType } from '../../atoms/Paragraph/Paragraph.data';
import Container from '../../layout/Container';
import Page from '../../layout/Page';
import Button from '../../molecules/Button';
import { ButtonTheme } from '../../molecules/Button/Button.data';

export const Styleguide = observer((): ReactElement => {
	const store = useGlobalStore();

	return (
		<Page>
			<Container>
				<Heading>Heading H1</Heading>
				<Heading type={HeadingType.H2}>Heading H2</Heading>
				<Heading type={HeadingType.H3} as={HeadingType.H2}>
					Heading H3 as H2
				</Heading>
				<Heading
					type={HeadingType.H4}
					textAlign={TextAlign.Center}
					textTransform={TextTransform.UpperCase}
					fontWeight={FontWeight.Normal}
				>
					Heading H4
				</Heading>
				<Heading type={HeadingType.H5} color="blackFaded">
					Heading H5
				</Heading>
				<Heading type={HeadingType.H6}>Heading H6</Heading>
				<Paragraph>Paragraph Default</Paragraph>
				<Paragraph type={ParagraphType.Small}>Paragraph Small</Paragraph>
				<Paragraph type={ParagraphType.Large}>Paragraph Large</Paragraph>
				<Button>Default Dark</Button>
				<Button icon={<Icon.Logo />}>With Icon</Button>
				<div style={{ background: 'black', padding: '2rem 5rem' }}>
					<Button buttonTheme={ButtonTheme.Light}>Light</Button>
					<Button href={Path.Home} buttonTheme={ButtonTheme.Light} icon={<Icon.Logo />} />
				</div>
				<Heading data-cy="count" type={HeadingType.H5}>
					{store.count}
				</Heading>
				<Button data-cy="increment" onClick={store.increment}>
					+
				</Button>
				<Button data-cy="decrement" onClick={store.decrement}>
					-
				</Button>
			</Container>
		</Page>
	);
});
