import tw from 'twin.macro';
import { css } from '@emotion/css';
import { complexClassNames } from 'src/utils/styles';

interface ButtonProp {
  bg?: string;
  variant?: 'A' | 'B';
}

export const Container = css(
  tw`h-screen bg-gray-900 text-white flex flex-col items-center justify-center space-y-4`
);
export const Title = css(tw`text-4xl font-bold text-purple-700`);

export const Wrapper = css(tw`max-w-lg text-center space-y-4`, {
  ['.' + Title]: {
    display: 'inline-block',
  },
});
export const Text = css(tw`text-xl text-gray-300`);
export const ButtonsContainer = css(tw`space-x-4`);
export const Button = complexClassNames<ButtonProp>(
  {},
  css(
    tw`px-4 py-3 rounded-md font-bold focus:outline-none focus:ring-2 focus:ring-green-700`
  ),
  {
    bg: (bg) =>
      css`
        background: ${bg};
      `,
    variant: {
      A: css`
        border: 1px solid;
      `,
      B: css`
        outline: none;
      `,
    },
  }
);

export const Link = css(
  tw`inline-block text-lg font-bold text-blue-500 hover:text-blue-700 hover:underline`
);
