import Navbar from "../Components/Navbar/Navbar";
import Container from "../Components/Container/Container";
import Grid from "../Components/Grid/Grid";
const MainLayout = () => {
    return (
        <div>
            <Container>
                <Navbar />
                <Grid />
            </Container>
        </div>
    );
};

export default MainLayout;
