import {BrowserRouter as Router, Routes, Route} from "react-router";
import SignInPage from "./app/sign-in.tsx";
import SignUpPage from "./app/sign-up.tsx";
import TasksPage from "./app/tasks.tsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/taskflow/v2/signin' element={<SignInPage />}></Route>
                <Route path='/taskflow/v2/signup' element={<SignUpPage />}></Route>
                    <Route path="/taskflow/v2/app" element={
                        <TasksPage />
                    }>
                    </Route>
            </Routes>
        </Router>
    );
}

export default App;