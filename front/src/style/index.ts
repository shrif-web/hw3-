import tw, { styled } from 'twin.macro';

interface ButtonProp {
	bg?: string;
}

export const Container = tw.div`h-screen bg-gray-900 text-white flex flex-col items-center justify-center space-y-4`;
export const Title = tw.h1`text-4xl font-bold text-purple-700`;
export const Wrapper = tw.div`max-w-lg text-center space-y-4`;
export const Text = tw.p`text-xl text-gray-300`;
export const ButtonsContainer = tw.div`space-x-4`;
export const Button = styled.button<ButtonProp>`
	background-color: ${props => (props.bg ? props.bg : '#6930c3')};
	${tw`px-4 py-3 rounded-md font-bold focus:outline-none focus:ring-2 focus:ring-green-700`}
`;
export const Link = tw.a`inline-block text-lg font-bold text-blue-500 hover:text-blue-700 hover:underline`;
