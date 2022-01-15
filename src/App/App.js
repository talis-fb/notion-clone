import styled from '@emotion/styled'
import NavPages from './NavPages'
import Page from './Page'

import { useState } from 'react'


import { useDispatch, useSelector } from 'react-redux'
import { addPage, selectPage, selectAllPages } from './features/pagesSlice'


const STORE2 = {
    profile: {
        name: 'Talison',
        icon: 'https://avatars.githubusercontent.com/u/54823205?v=4'
    }
}

// const NewPage = (name) => STORE.Pages.push({ icon: '', body:[], name: (name ? name: '') });

const App  = styled.div({
    width: '100%',
    height: '100vh',
    display: 'grid',
    gridTemplateColumns: '25% auto',
    backgroundColor: '#AAAAAA'
})

function Index(props) {
    const [currentPage, setCurrentPage] = useState();
    const dispatch = useDispatch();

    const PAGES = useSelector(selectAllPages)

    return (
        <App className="App">
            <NavPages profile={STORE2.profile} pages={PAGES} newPage={() => dispatch(addPage())} />
            <Page page={PAGES} />
        </App>
    );
}

export default Index;
