// import './App.css';
import styled from '@emotion/styled'
import NavPages from './NavPages'
import Page from './Page'

const STORE = {
    Pages: [
        { name: 'Welcome to Notion Clone', icon: '', body: [] },
        { name: 'Está é outra page', icon: '', body: [] },
    ],
    profile: {
        name: 'Talison',
        icon: 'https://avatars.githubusercontent.com/u/54823205?v=4'
    }
}

const NewPage = (name) => STORE.Pages.push({ icon: '', body:[], name: (name ? name: '') });

const App  = styled.div({
    width: '100%',
    height: '100vh',
    display: 'grid',
    gridTemplateColumns: '25% auto',
    backgroundColor: '#AAAAAA'
})

function Index(props) {
  return (
      <App className="App">
          <NavPages profile={STORE.profile} pages={STORE.Pages} newPage={NewPage} />
          <Page page={STORE.Pages[0]} />
      </App>
  );
}

export default Index;
