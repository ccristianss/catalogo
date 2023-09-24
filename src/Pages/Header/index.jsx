function Header() {
    return (
        <header className="bg-slate-300">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <a href="./" className="-m-1.5 p-1.5">
                        <span >Home</span>
                    </a>
                </div>
                <div className="flex lg:flex-1">
                    <a href="./Contacto" className="-m-1.5 p-1.5">
                        <span >Contacto</span>
                    </a>
                </div>
                <div className="flex lg:flex-1">
                    <a href="./Services" className="-m-1.5 p-1.5">
                        <span >Servicios</span>
                    </a>
                </div>
                <div className="flex lg:flex-1">
                    <a href="./Ayuda" className="-m-1.5 p-1.5">
                        <span >Ayuda</span>
                    </a>
                </div>
            </nav>

        </header>
    );
}

export { Header }