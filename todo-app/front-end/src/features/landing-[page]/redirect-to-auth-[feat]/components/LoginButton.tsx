import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "../../../../shared/components/ui/button.tsx";

export default function SignInButton() {
    const { loginWithRedirect } = useAuth0();

    const AUDIENCE = import.meta.env.VITE_AUTH0_AUDIENCE
    console.log("Audience:", AUDIENCE);

    return (
        <Button
            onClick={() =>
                loginWithRedirect({
                    authorizationParams: {
                        audience: AUDIENCE,
                        redirect_uri: window.location.origin
                    }
                })
            }
        >
            Login
        </Button>
    )
}