import styled from '@emotion/styled'
import { css } from '@emotion/react'

import { useSelector } from 'react-redux'
import { selectPage } from './features/pagesSlice'

import TitlePage from './components/TitlePage'

const Page = styled.section({
    backgroundColor: '#2F3437',
    display: 'grid',
    gridTemplateRows: '50px auto',
    header:{
        display: 'flex',
        padding: '7px'
    },
    main:{
        display: 'flex',
        flexDirection: 'column',
        '& > *': {
            width: '98%',
            maxWidth: '600px',
            padding: '10px',
            margin: '0 auto'
        }
    }
})

const NEXT = () => console.log('Agr é criado um novo text')

const Base = (props) => {

    const Enter = (event) => {
        if(event.key == 'Enter')
            NEXT()
    }

    const Component = styled.div({ color: '#FFFFFF', backgroundColor: '#2F3437', border: '0'  })

    return <Component onKeyDown={Enter} {...props} />
}

// É necessário usar a propriedade de css do emotion para personalizar direito isso
//     infelizmente com o create-react-app é um saco :/
const TextBody = (props) => <Base as="span" {...props} />
const HeaderBody = (props) => <Base as="h1" {...props} />

function Main({ currentPage }){
    const page = useSelector(selectPage(currentPage));

    return (
        <Page>
            <header css={{ color: 'blue' }}>
                <TitlePage icon={page.icon} name={page.name}/>
            </header>
            <main>
                <div>
                    {page.body}
                    <TextBody>Ola</TextBody>
                    <HeaderBody>Ola</HeaderBody>
                    <Base>Ola</Base>
                </div>
            </main>
        </Page>
    )
}

export default Main;
