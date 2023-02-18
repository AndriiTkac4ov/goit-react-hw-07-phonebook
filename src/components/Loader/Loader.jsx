import { MutatingDots } from 'react-loader-spinner';
import { LoaderWrapper } from './Loader.styled';

export default function Loader() {
    return (
        <LoaderWrapper>
            <MutatingDots 
                height="100"
                width="100"
                color="chocolate"
                secondaryColor= "chocolate"
                radius="12.5"
                ariaLabel="mutating-dots-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </LoaderWrapper>
    )
}