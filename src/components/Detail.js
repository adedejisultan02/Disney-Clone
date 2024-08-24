import styled from "styled-components";

const Detail = (props) => {
    return (
        <Container>
            <Background>
                <img
                    src=""
                    alt=""
                />
            </Background>
        </Container>
    )
}

const Container = styled.div`
    position: relative;
    min-height: calc(100vh-250px);
    overflow-x: hidden;
    display: block;
    top: 72px;
    padding: 0 calc(3.5vw + 5px);
`

const Background = styled.div`
    
`

export default Detail;