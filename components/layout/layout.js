import Navbar from '../navbar'
import Hero from '../hero'
import CampContainer from '../camp-container'

// @ts-ignore
export default function Layout() {
    return (
    <>
        <Navbar></Navbar>
        <div className="container mx-auto">
        <Hero></Hero>
        <CampContainer></CampContainer>
        </div>
        <div>
        </div>
    </>
    );
}