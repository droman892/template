import { Counter } from './components/counter/Counter'
import MediaImg from './assets/images/media.png'
import SunSVG from './assets//images/sun.svg'

export const App = () => {
    const person = 'Tech Wiz'
    return (
        <div>
            <h1>
                The app is ready for you, {person}! - {process.env.NODE_ENV}{' '}
                {process.env.name}
            </h1>
            <p>
                This template comes with Webpack, TypeScript, Babel, ESLint, and
                Prettier.
            </p>
            <Counter />
            <img src={MediaImg} alt="Media Icons PNG"></img>
            <img src={SunSVG} alt="Sun SVG"></img>
        </div>
    )
}
