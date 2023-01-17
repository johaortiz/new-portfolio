import { Link } from "react-router-dom"

function Drawer({ Component }) {
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col justify-center">
                <div className="aa">
                    <label htmlFor="my-drawer-2" className="absolute z-10 btn btn-circle swap swap-rotate drawer-button lg:hidden mt-5 ml-5">
                        <input type="checkbox" />
                        <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>
                        <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>
                    </label>
                    <Component />
                </div>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-64 bg-base-300 justify-center items-center">
                    <li className="w-full"><Link to='/' className="flex justify-center">Home</Link></li>
                    <div className="divider"></div>
                    <li className="w-full"><Link to='/projects' className="flex justify-center">Projects</Link></li>
                    <div className="divider"></div>
                    <li className="w-full"><Link to='/about-me' className="flex justify-center">About Me</Link></li>
                    <div className="divider"></div>
                    <li className="w-full"><Link to='/contact-me' className="flex justify-center">Contact Me</Link></li>
                </ul>

            </div>
        </div>
    )
}
export default Drawer