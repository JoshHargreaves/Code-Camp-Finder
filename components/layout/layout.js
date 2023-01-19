import Navbar from '../navbar'
import Hero from '../hero'

export default function Layout({ children }) {
    return (<>
        <Navbar></Navbar>
        <Hero></Hero>
        <div className="container mx-auto">
            <main className="flex-1">
               {children}
            </main>
        </div>
        <div>
        </div>
    </>
    );
}