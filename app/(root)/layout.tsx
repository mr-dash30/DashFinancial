import MobileNavBar from "@/components/MobileNavBar";
import SideBar from "@/components/SideBar";
import { User } from "lucide-react";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn:User = {
    $id: "",
    email: "",
    userId: "",
    dwollaCustomerUrl: "",
    dwollaCustomerId: "",
    address1: "",
    city: "",
    state: "",
    postalCode: "",
    dateOfBirth: "",
    ssn: "",
    firstName : "Darshan",
    lastName: "Patel",
  }
   
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
