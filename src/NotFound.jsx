import { Link } from "react-router-dom";

function NotFound() {

    
  return (
    <>
      <div className="py-32 text-black text-center mx-20">
        <h2 className="text-8xl font-bold text-primary">404</h2>
        <p className="text-2xl mt-5 font-semibold">Page Not found</p>
        <p className="mt-5 text-gray-500">The page you requested cannot be found, kindly navigate back to the home page</p>
        <Link to={"/"}>
          <button type='button' className='relative z-30 mx-auto bg-blue-700 px-8 py-4 rounded-sm text-sm text-center font-semibold text-white hover:bg-primary cursor-pointer mt-7'>
            Home page
          </button>
        </Link>
      </div>
    </>
  )
}

export default NotFound
