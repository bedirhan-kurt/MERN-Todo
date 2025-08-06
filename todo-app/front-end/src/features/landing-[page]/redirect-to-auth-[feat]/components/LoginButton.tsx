import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "../../../../shared/components/ui/button.tsx";

export default function SignInButton() {
    const { loginWithRedirect } = useAuth0();

    return (
        <Button onClick={() => loginWithRedirect()}>
            Login
        </Button>
    )
}