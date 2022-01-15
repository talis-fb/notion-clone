import TitlePage from './components/TitlePage'
import styled from '@emotion/styled'

const Nav = styled.nav({
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    height: '100%',
    '.new-page': {
        marginTop: 'auto'
    }
})

function NavPages({ pages, newPage, profile }){
    return (
        <Nav>
            <TitlePage name={`${profile.name}'s Notion`} icon={profile.icon} />

            <div>
                { pages.map( 
                    (el, ind) => <TitlePage key={ind} name={el.name} icon={el.icon} />
                )}
            </div>

            <div className="new-page" onClick={newPage}>+ New Page</div>
        </Nav>
    )
}

export default NavPages;
