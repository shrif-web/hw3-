/** @jsxImportSource @emotion/react */
import '@emotion/react'
import React, { useState } from 'react';
import {
	Container,
	Wrapper,
	Text,
	ButtonsContainer,
	Button,
	Title,
	Link,
} from '../style';
import tw, { GlobalStyles } from 'twin.macro';

const App = () => {
	const [count, setCount] = useState<number>(0);
	return (
		<>
			<GlobalStyles />
			<Container>
				<Wrapper>
					<Title>Tailwindcss with React using twin.macro</Title>
					<Text css={[tw`text-center`]} tw="text-gray-500" className={'a'}>Current Count: {count}</Text>
					<ButtonsContainer>
						<Button onClick={() => setCount(count + 1)}>
							Increase Count
						</Button>
						<Button onClick={() => setCount(count - 1)}>
							Decrease Count
						</Button>
					</ButtonsContainer>
				</Wrapper>
				<ButtonsContainer>
					<Link href='https://tailwindcss.com/docs'>Learn Tailwindcss</Link>
					<Link href='https://reactjs.org/tutorial/tutorial.html'>
						Learn React
					</Link>
				</ButtonsContainer>
			</Container>
		</>
	);
};

export default App;
