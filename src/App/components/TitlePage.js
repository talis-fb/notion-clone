import { css, jsx } from '@emotion/react'
import styled from '@emotion/styled'

function TitlePage({ name, icon }){
    const Div = styled.div({
        display: 'flex',
        borderRadius: '10px',
        padding: '10px',
        alignItems: 'center',
        gap: '5px',
        img: {
            borderRadius: '5px'
        }
    })

    return (
        <Div>
            <img src={icon} height="40px" />
            {name}
        </Div>
    )
}

export default TitlePage;
