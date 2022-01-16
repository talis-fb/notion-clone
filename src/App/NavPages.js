import TitlePage from './components/TitlePage'
import styled from '@emotion/styled'

import { useDispatch, useSelector } from 'react-redux'
import { addPage, selectPage, selectAllPages } from './features/pagesSlice'
import { selectName, selectUser } from './features/userProfileSlice'

const Nav = styled.nav({
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    height: '100%',
    color: '#A2A4A6',
    img:{
        color: '#A2A4A6',
    },
    '.new-page': {
        display: 'flex',
        alignItems: 'center',
        marginTop: 'auto',
        height: '50px',
        borderTop: '1px solid #5D626577',
        padding: '3px',
        '&:hover': {
            backgroundColor: '#5D6265'
        },
    },
    '.pages': {
        borderRadius: '0',
        transition: '0.03s',
        '&:hover': {
            backgroundColor: '#5D6265'
        },
    },
    '.active': {
        backgroundColor: '#5D6265'
    }
})



function NavPages({ currentPage, setPage }){
    const profile = useSelector(selectUser);
    const pages = useSelector(selectAllPages);

    const dispatch = useDispatch();
    const newPage = () => dispatch(addPage());

    const ListPages = (el, ind) => {
        const active = ind===currentPage;
        const click = () => setPage(ind);
        const classes = 'pages '.concat(active ? 'active' : '');
        return <TitlePage onClick={click} key={ind} name={el.name} icon={el.icon} className={classes} />
    }

    return (
        <Nav>
            <TitlePage name={`${profile.name}'s Notion`} icon={profile.icon} />

            <div>
                {pages.map(ListPages)}
            </div>

            <div className="new-page" onClick={newPage}>+ New Page</div>
        </Nav>
    )
}

export default NavPages;
