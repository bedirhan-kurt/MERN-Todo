import SignInButton from "../features/landing-[page]/redirect-to-auth-[feat]/components/LoginButton";
import { Button } from "../shared/components/ui/button";

export default function LandingPage() {
    return (
        <div className="flex flex-col items-center justify-center h-screen gap-8">
            <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
                Organize Your Tasks with TaskFlow!
            </h1>
            <div className="flex items-center justify-center gap-2">
                <SignInButton />
                <Button>Signup</Button>
            </div>
        </div>
    );
}