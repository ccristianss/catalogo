const Layout = ({ children }) => {
    return (
        <div className="flex flex-col items-center bg-slate-200">
            {children}
        </div>
    )
}

export default Layout;