import Navbar from "../../components/navbar/Navbar"


export default function GeneralLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <>
    <Navbar />
    <main>
    { children }
    <span className="text-3xl font-bold">Hola Mundo</span>
    </main>
    </>
  );
}