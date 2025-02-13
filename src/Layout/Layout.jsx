import Header from "./Header";

function Layout ({children}) {
    return(
        <div className="flex flex-col justify-between min-h-screen">
            <div className="">
                {/* Navbar */}
                <Header/>
            </div>
            <main>
            {children}
            </main>
            {/* Footer */}
        </div>
    )
}

export default Layout;