import { redirect } from "next/navigation";

export default function Home() {
  redirect("/chat");
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      home
    </div>
  );
}
