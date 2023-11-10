export default function RootLayout () {
    return (
        <div className='relative'>
            {/* <Navbar /> */}
            <main>
                <Outlet />
            </main>
        </div>
    )
}