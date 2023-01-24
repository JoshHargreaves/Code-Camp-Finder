import Navbar from '../navbar'
import Hero from '../hero'

// @ts-ignore
export default function Layout({ children }) {
    return (
    <>
        <Navbar></Navbar>
        <div className="container mx-auto">
        <Hero></Hero>
            <main className="flex-1">
               {children}
            </main>
        </div>
        <div>
        </div>
    </>
    );
}