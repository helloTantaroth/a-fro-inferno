import { render } from 'inferno';

const message = "Hello world";

render(
    <MyComponent message={message} />,
    document.getElementById("app")
);