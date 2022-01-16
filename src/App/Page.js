import styled from '@emotion/styled'
import TitlePage from './components/TitlePage'

import { useSelector } from 'react-redux'
import { selectPage } from './features/pagesSlice'

const Page = styled.section({
    backgroundColor: '#2F3437',
    display: 'grid',
    gridTemplateRows: '50px auto',
    main:{
        display: 'flex',
        flexDirection: 'column',
        '& > *': {
            width: '100%',
            maxWidth: '600px',
            padding: '10px',
            margin: '0 auto'
        }
    }
})

function Main({ currentPage }){
    const page = useSelector(selectPage(currentPage));

    return (
        <Page>
            <TitlePage icon={page.icon} name={page.name}/>
            <main>
                <div>
                    {page.body}
                </div>
            </main>
        </Page>
    )
}

export default Main;
