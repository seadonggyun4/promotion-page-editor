import styled from "styled-components";

// components
import Header from './layouts/Header'
import Menu from './layouts/Menu'
import ContentPanel from "./layouts/ContentPanel";
import Webview from "../features/webviewDownload/components/Webview";
import DownloadBtn from '../features/webviewDownload/components/DownloadBtn'

// hook & provider
import { useMenu } from "./hook/useMenu";
import { useElementsContext } from "../app/provider/ElementsProvider";
import { useUploadImageContext } from "../features/uploadImage/provider/UploadImageProvider";

function Main(){
    const { uploadedImage } = useUploadImageContext();
    const { elementsData } = useElementsContext();
    const { isActive, activeMenu } = useMenu()

    return(
        <MainStyle>
            <Header />
            <Menu menuActive={isActive} menuClick={activeMenu} children={<DownloadBtn uploadedImage={uploadedImage} />}/>
            <ContentStyle>
                <ContentPanel menuActive={isActive}/>
               <Webview elementsData={elementsData} uploadedImage={uploadedImage} />
            </ContentStyle>
        </MainStyle>
    )
}

const MainStyle = styled.main`
    padding: 0 1rem;
    margin: auto auto;
    height: 100vh;
    width: 100%;
    max-width: 1280px;
`;

const ContentStyle = styled.div`
    display: flex;
    align-items: flex-start;
    column-gap: 1rem;
    margin-top: 2rem;
    padding-top: 2rem;
    border-top: 2px solid var(--c-border-primary);
`;


export default Main