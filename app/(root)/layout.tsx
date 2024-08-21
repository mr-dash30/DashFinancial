import MobileNavBar from "@/components/MobileNavBar";
import SideBar from "@/components/SideBar";
import { getLoggedInUser } from "@/lib/action/user.actions";
import { User } from "lucide-react";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  const loggedIn:User = await getLoggedInUser();
  if(!loggedIn) redirect('/sign-in');  
   
  return (
    <main className="flex h-screen w-full font-inter "> 
        <SideBar user={loggedIn} />
        <div className="flex size-full flex-col w-full">
          <div className="root-layout">
            <Image src = "/icons/logo.svg" alt="Dash" width={30} height={30} />
            <div>
              <MobileNavBar user={loggedIn} />
            </div>
          </div>
        {children}
        </div>
    </main>
  );
}
