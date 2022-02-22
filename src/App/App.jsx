import { useState } from 'react'
import styled from '@emotion/styled'

import NavPages from './NavPages'
import Page from './Page'

const App  = styled.div({
    width: '100%',
    height: '100vh',
    display: 'grid',
    gridTemplateColumns: '240px auto',
    backgroundColor: '#373C3F'
})

function Index() {
    // O unico dado armazenado como state do componente é o id da pagina atual, 
    //  os dados e texto nela são guardados na store do Redux
    const [currentPage, setCurrentPage] = useState(0);

    return (
        <App className="App">
            <NavPages setPage={setCurrentPage} currentPage={currentPage} />
            <Page currentPage={currentPage} />
        </App>
    );
}

export default Index;
