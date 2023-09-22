import { HashLoader } from 'react-spinners';

const Loading = () => {
    return (
        <div className="absolute z-[999] top-0 left-0 h-full w-full flex-center flex-col gap-10 bg-[#fdfdfd]">
            <HashLoader color="#C4A586" loading size={100} />
        </div>
    );
}

export default Loading;