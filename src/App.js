import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import NavBar from './components/NavBar';
import { ThemeProvider } from '@mui/material/styles';
import theme from './config/themeConfig';
import Main from './components/Main';
import { BrowserRouter } from 'react-router-dom';

import CarritoProvider from './context/CarritoProvider';

function App() {
    return (
        <BrowserRouter>
            <CarritoProvider>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <NavBar title="Nico Dietetica" />
                    <Main />
                </ThemeProvider>
            </CarritoProvider>
        </BrowserRouter>
    );
}

export default App;
