import { Button } from "@/shared/components/ui/button";
import { Label } from "@/shared/components/ui/label";
import { Input } from "@/shared/components/ui/input";
import * as React from "react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/components/ui/card";
export function SignUpForm({
    className,
    ...props
}: React.ComponentProps<"div">) {
    return (
        <div className={"flex flex-col gap-6"} {...props}>
            <Card>
                <CardHeader className="text-center">
                    <CardTitle className="text-xl">Welcome to TaskFlow!</CardTitle>
                    <CardDescription>
                        Create your account to get started
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="grid gap-6">
                            <div className="grid gap-6">
                                <div className="grid gap-3">
                                    <Label htmlFor="fullName">Full Name</Label>
                                    <Input
                                        id="fullName"
                                        type="text"
                                        placeholder="John Doe"
                                        required
                                    />
                                </div>
                                <div className="grid gap-3">
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="m@example.com"
                                        required
                                    />
                                </div>
                                <div className="grid gap-3">
                                    <Label htmlFor="password">Password</Label>
                                    <Input
                                        id="password"
                                        type="password"
                                        placeholder="********"
                                        required
                                    />
                                </div>
                                <div className="grid gap-3">
                                    <Label htmlFor="verifyPassword">Verify Password</Label>
                                    <Input
                                        id="verifyPassword"
                                        type="password"
                                        placeholder="********"
                                        required
                                    />
                                </div>
                                <Button type="submit" className="w-full">
                                    Create Account
                                </Button>
                            </div>

                            <div className="text-center text-sm">
                                Already have an account?{" "}
                                <a href="#" className="underline underline-offset-4">
                                    Sign in
                                </a>
                            </div>
                        </div>
                    </form>
                </CardContent>
            </Card>
            <div
                className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
                By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
                and <a href="#">Privacy Policy</a>.
            </div>
        </div>

    )
}