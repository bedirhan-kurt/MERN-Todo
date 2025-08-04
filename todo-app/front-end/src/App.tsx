import {BrowserRouter as Router, Routes, Route} from "react-router";
import AuthRequired from "todo-app/front-end/src/features/auth-[page]/check-auth-[feat]/components/AuthRequired.tsx";
import RememberUser from "todo-app/front-end/src/features/auth-[page]/check-auth-[feat]/components/RememberUser.tsx";
import SignInPage from "todo-app/front-end/src/app/sign-in.tsx";
import TasksPage from "todo-app/front-end/src/app/tasks.tsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route element={<RememberUser />}>
                    <Route index element={<SignInPage />}></Route>
                </Route>
                <Route element={<AuthRequired />}>
                    <Route path="/app/:userId" element={
                        <TasksPage />
                    }>
                    </Route>
                </Route>
            </Routes>
        </Router>
    );
}

export default App;