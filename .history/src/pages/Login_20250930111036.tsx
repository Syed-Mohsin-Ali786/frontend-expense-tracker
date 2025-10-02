import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router";

interface Login2Props {
  heading?: string;
  logo?: {
    url: string;
    src: string;
    alt: string;
    title?: string;
  };
  buttonText?: string;
  googleText?: string;
  LoginText?: string;
  SignupUrl?: string;
}

const Login = ({
  heading = "Login",
  logo = {
    url: "/",
    src: "/ExpenseTracker.png",
    alt: "logo",
    title: "Expense Tracker",
  },
   buttonText = "Login",
  LoginText = "Already a user?",
 SignupUrl = "/signup",
}: Login2Props) => {
  return (
    <section className="bg-muted h-screen">
      <div className="flex h-full items-center justify-center">
        <div className="flex flex-col items-center gap-6 lg:justify-start">
          {/* Logo */}
          <Link to={logo.url} className="flex">
            <img
              src={logo.src}
              alt={logo.alt}
              title={logo.title}
              className="h-10 dark:invert"
            />
            <h1 className="text-2xl font-semibold md:text-3xl ">{logo.title}</h1>
          </Link>
          <div className="min-w-sm border-muted bg-background flex w-full max-w-sm flex-col items-center gap-y-4 rounded-md border px-6 py-8 shadow-md">
            {heading && <h1 className="text-xl font-semibold">{heading}</h1>}
            <div className="flex w-full flex-col gap-2">
              <Label>Email</Label>
              <Input
                type="email"
                placeholder="Email"
                className="text-sm"
                required
              />
            </div>
            <div className="flex w-full flex-col gap-2">
              <Label>Password</Label>
              <Input
                type="password"
                placeholder="Password"
                className="text-sm"
                required
              />
            </div>
            <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 cursor-pointer">
              {buttonText}
            </Button>
          </div>
          <div className="text-muted-foreground flex justify-center gap-1 text-sm">
            <p>{LoginText}</p>
            <Link
              to={SignupUrl}
              className="text-primary font-medium hover:underline"
            >
              SignUp
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
