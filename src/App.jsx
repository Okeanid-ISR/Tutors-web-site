import Container from './components/Container'
import SideBar from './components/SideBar'
import Greetings from "./components/Greetings";
import Account from "./components/Account";
import Middle from "./components/Middle";
import RightContainer from "./components/RightContainer";

export function App() {
    return (
        <Container>
            <SideBar/>
            <Middle>
                <Greetings/>
            </Middle>
            <RightContainer>
                <Account/>
            </RightContainer>
        </Container>
    )
}


