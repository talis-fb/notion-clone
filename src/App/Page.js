import styled from '@emotion/styled'
import TitlePage from './components/TitlePage'

const Page = styled.section({
    backgroundColor: '#444444',
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

function Main({ page }){
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
