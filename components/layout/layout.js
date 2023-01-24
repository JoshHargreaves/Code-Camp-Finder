import Navbar from '../navbar'
import Hero from '../hero'
import CampContainer from '../camp-container'

// @ts-ignore
export default function Layout({ children }) {
    return (
    <>
        <Navbar></Navbar>
        <div className="container mx-auto">
        <Hero></Hero>
        <CampContainer></CampContainer>
            <main className="flex-1">
               {children}
            </main>
        </div>
        <div>
        </div>
    </>
    );
}