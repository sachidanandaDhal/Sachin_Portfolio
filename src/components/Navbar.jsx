
import pic from '../../public/bubuPs.png';
function Navbar() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 shadow-md">
        <div className='flex justify-between items-center h-16'>
          <div className="flex space-x-2">
            <img src={pic} className="h-12 w-12 rounded-full" alt="" />
            <h1 className='font-semibold text-xl cursor-pointer'>
              Sachida<span className='text-green-500 text-2xl'>nanda</span>
              <p className='text-sm'>Web Devloper</p>
            </h1>
          </div>
          <div >
            <ul className='flex space-x-8'>
                <li>Home</li>
                <li>About</li>
                <li>Portfolio</li>
                <li>Experiance</li>
                <li>Contacts</li>
            </ul>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
}

export default Navbar
