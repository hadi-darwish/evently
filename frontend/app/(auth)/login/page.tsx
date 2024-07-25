import { auth } from "@/auth";
import { LoginForm } from "@/components/auth/login-form";
import { useRouter } from "next/navigation";
import { NextResponse } from "next/server";

const LoginPage = async () => {
  // const session = await auth();
  // session && NextResponse.redirect("/settings");
  return <LoginForm />;
};

export default LoginPage;
