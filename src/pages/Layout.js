import Nav from '../Components/nav/Nav'
export default function Layout({children}){
    return <>
        <section>
            <Nav/>
        </section>
        <main>
            {children}
        </main>
    </>
}