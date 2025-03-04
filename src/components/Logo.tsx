// @ts-expect-error
import RocketIcon from './../../favicon.svg';

const Logo = ({size}: {size: number}) => (
    <img src={RocketIcon} alt="App Logo" className={"max-h-" + size + " max-w-full object-contain"} />
);

export default Logo;
