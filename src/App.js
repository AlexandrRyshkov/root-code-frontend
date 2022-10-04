import './App.css';
import Kanban from "./Kanban";
import {Box} from "@mui/material";

function App() {
    return (
        <Box display="flex" flexDirection="column" alignItems="center" height="100%" justifyContent="center">
            <Kanban/>
        </Box>
    );
}

export default App;
