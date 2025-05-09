import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { User, Lock, LogIn, UserPlus } from "lucide-react";
import { useOutfitContext } from "@/context/OutfitContext";

const Auth: React.FC = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { setUserProfile } = useOutfitContext();

  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("login");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const createDefaultProfile = (email: string, name?: string) => ({
    email,
    name: name || email.split("@")[0],
    authenticated: true,
    gender: "female", // Default gender
    bodyShape: undefined, // Will be calculated later
    complexion: "medium", // Default complexion
    measurements: {
      bust: 0,
      waist: 0,
      hips: 0,
      height: 0,
      weight: 0,
      shoulders: 0,
    },
    savedOutfits: [],
  });

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (email && password) {
        const profile = createDefaultProfile(email, name);
        setUserProfile(profile);

        toast({
          title: "Login successful",
          description: "Welcome to Virtual Fit Fashion Finder!",
        });

        navigate("/recommendations");
      } else {
        toast({
          title: "Login failed",
          description: "Please provide both email and password.",
          variant: "destructive",
        });
      }
    } catch {
      toast({
        title: "Login error",
        description: "An error occurred during login. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (email && password && name) {
        const profile = createDefaultProfile(email, name);
        setUserProfile(profile);

        toast({
          title: "Account created",
          description: "Welcome to Virtual Fit Fashion Finder!",
        });

        navigate("/");
      } else {
        toast({
          title: "Signup failed",
          description: "Please fill in all fields.",
          variant: "destructive",
        });
      }
    } catch {
      toast({
        title: "Signup error",
        description: "An error occurred during signup. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleDemoLogin = () => {
    setIsLoading(true);

    const demoProfile = createDefaultProfile("demo@example.com", "Demo User");
    setUserProfile(demoProfile);

    toast({
      title: "Demo login successful",
      description: "Welcome to the demo experience!",
    });

    setTimeout(() => {
      setIsLoading(false);
      navigate("/recommendations");
    }, 1000);
  };

  return (
    <Layout>
      <div className="container max-w-md mx-auto py-10">
        <Card className="backdrop-blur-sm bg-white/95 shadow-xl border-fashion-100">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-2xl font-bold text-fashion-700">Welcome</CardTitle>
            <CardDescription>
              Sign in to access personalized fashion recommendations
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="signup">Sign Up</TabsTrigger>
              </TabsList>

              <TabsContent value="login">
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <div className="relative">
                      <span className="absolute left-3 top-3 text-gray-400">
                        <User size={16} />
                      </span>
                      <Input
                        id="email"
                        placeholder="you@example.com"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="pl-9"
                        disabled={isLoading}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password">Password</Label>
                      <a href="#" className="text-sm font-medium text-fashion-600 hover:underline">
                        Forgot password?
                      </a>
                    </div>
                    <div className="relative">
                      <span className="absolute left-3 top-3 text-gray-400">
                        <Lock size={16} />
                      </span>
                      <Input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="pl-9"
                        placeholder="••••••••"
                        disabled={isLoading}
                      />
                    </div>
                  </div>
                  <Button type="submit" className="w-full fashion-gradient" disabled={isLoading}>
                    {isLoading ? (
                      <span className="flex items-center gap-2">
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></span>
                        Signing in...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <LogIn size={16} />
                        Sign In
                      </span>
                    )}
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="signup">
                <form onSubmit={handleSignup} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="signup-name">Full Name</Label>
                    <Input
                      id="signup-name"
                      placeholder="John Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      disabled={isLoading}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-email">Email</Label>
                    <Input
                      id="signup-email"
                      placeholder="you@example.com"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={isLoading}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-password">Password</Label>
                    <Input
                      id="signup-password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Create a password"
                      disabled={isLoading}
                    />
                  </div>
                  <Button type="submit" className="w-full fashion-gradient" disabled={isLoading}>
                    {isLoading ? (
                      <span className="flex items-center gap-2">
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></span>
                        Creating account...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <UserPlus size={16} />
                        Create Account
                      </span>
                    )}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-muted-foreground">Or continue with</span>
              </div>
            </div>

            <Button
              variant="outline"
              className="w-full border-fashion-200 hover:bg-fashion-50 hover:text-fashion-700"
              onClick={handleDemoLogin}
              disabled={isLoading}
            >
              Try Demo Experience
            </Button>
          </CardContent>
          <CardFooter className="border-t px-6 py-4 flex items-center justify-center text-sm text-muted-foreground">
            <p>
              By continuing, you agree to our{" "}
              <a href="#" className="underline text-fashion-600">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="underline text-fashion-600">
                Privacy Policy
              </a>
            </p>
          </CardFooter>
        </Card>
      </div>
    </Layout>
  );
};

export default Auth;