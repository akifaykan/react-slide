import { Slider } from "./components/Slider";

function App() {
    const slideItems = [
        {
            id: 1,
            bigImg: 'https://lipsum.app/id/36/1024x768',
            smallImg: 'https://lipsum.app/id/36/200x150',
        },
        {
            id: 2,
            bigImg: 'https://lipsum.app/id/35/1024x768',
            smallImg: 'https://lipsum.app/id/35/200x150',
        },
        {
            id: 3,
            bigImg: 'https://lipsum.app/id/34/1024x768',
            smallImg: 'https://lipsum.app/id/34/200x150',
        },
        {
            id: 4,
            bigImg: 'https://lipsum.app/id/33/1024x768',
            smallImg: 'https://lipsum.app/id/33/200x150',
        },
    ];

    return (
        <>
            <Slider slides={slideItems} />
        </>
    );
}

export default App;
