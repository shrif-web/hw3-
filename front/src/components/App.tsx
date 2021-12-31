import { useState } from 'react';
import {
  Container,
  Wrapper,
  Text,
  ButtonsContainer,
  Button,
  Title,
  Link,
} from '../style';
import tw, { globalStyles } from 'twin.macro';
import { injectGlobal, css } from '@emotion/css/macro';
import clsx from 'clsx';

injectGlobal(globalStyles as any);

const App = () => {
  const [count, setCount] = useState<number>(0);
  return (
    <div className={Container}>
      <div className={Wrapper}>
        <h1 className={Title}>Tailwindcss with React using twin.macro</h1>
        <p className={clsx(Text, css(tw`text-center text-gray-500`))}>
          Current Count: {count}
        </p>
        <div className={ButtonsContainer}>
          <button
            className={Button({ variant: 'A' })}
            onClick={() => setCount(count + 1)}
          >
            Increase Count
          </button>
          <button
            className={Button({ variant: 'B' })}
            onClick={() => setCount(count - 1)}
          >
            Decrease Count
          </button>
        </div>
      </div>
      <div className={ButtonsContainer}>
        <a className={Link} href="https://tailwindcss.com/docs">
          Learn Tailwindcss
        </a>
        <a className={Link} href="https://reactjs.org/tutorial/tutorial.html">
          Learn React
        </a>
      </div>
    </div>
  );
};

export default App;
