import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import NavBar from './components/NavBar';
import { ThemeProvider } from '@mui/material/styles';
import theme from './config/themeConfig';
import Main from './components/Main';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <NavBar title="Nico Dietetica" />
            <Main />
        </ThemeProvider>
    );
}

export default App;
