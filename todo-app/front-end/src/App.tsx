import { BrowserRouter as Router, Routes, Route } from "react-router";
import SignInPage from "./app/sign-in.tsx";
import SignUpPage from "./app/sign-up.tsx";
import TasksPage from "./app/tasks1.tsx";
import LandingPage from "./app/landing.tsx";
import PrivateRoute from "./features/auth-[page]/check-auth-[feat]/components/PrivateRoute.tsx";
import { ThemeProvider } from "./features/tasks-[page]/dark-mode-[feat]/components/theme-provider.tsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route index element={<LandingPage />}></Route>
                <Route path='/signin' element={<SignInPage />}></Route>
                <Route path='/signup' element={<SignUpPage />}></Route>
                <Route path="/app" element={
                    <PrivateRoute>
                        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                            <TasksPage />
                        </ThemeProvider>
                    </PrivateRoute>
                }>
                </Route>
            </Routes>
        </Router>
    );
}

export default App;