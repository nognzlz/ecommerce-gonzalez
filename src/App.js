import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import NavBar from './components/NavBar';
import { ThemeProvider } from '@mui/material/styles';
import theme from './config/themeConfig';
import Container from './components/Container';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <NavBar title="Nico Dietetica" />
            <Container>Mi contenido</Container>
        </ThemeProvider>
    );
}

export default App;
