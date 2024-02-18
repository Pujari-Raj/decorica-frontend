import { Link } from 'react-router-dom';

const ProductsNavbar = () => {

  return (
    <div className='w-full'>
      <div className=''>
        {/* <!-- Main navigation container --> */}
        <nav
          className="flex justify-center items-center py-1 px-1 shadow-lg bg-[#755c5c] text-white">
          <div className="flex w-full flex-wrap items-center justify-center">
            {/* <!-- Collapsible navbar container --> */}
            <div className="mt-2 flex-grow basis-[100%] items-center">
              <ul className="list-style-none flex justify-center space-x-10">
                {/* <!-- Home link --> */}
                <Link to="/shop/plant-decor">
                  <li className="" data-te-nav-item-ref>
                    <a className="duration-150 border-b-[3px] border-transparent hover:border-[#c66b16]" aria-current="page">
                      Plant decoration
                    </a>
                  </li>
                </Link>
                {/* <!-- Features link --> */}
                <Link to="/shop/arts-frame">
                  <li className="">
                    <a className="duration-150 border-b-[3px] border-transparent hover:border-[#c66b16]">
                      Art and Frames</a>
                  </li>
                </Link>
                {/* <!-- Pricing link --> */}
                <Link to="/shop/interior-lights">
                  <li className="">
                    <a className="duration-150 border-b-[3px] border-transparent hover:border-[#c66b16]">
                      Interior Lightings</a>
                  </li>
                </Link>
                <Link to="/shop/mirrors">
                  <li className="" >
                    <a className="duration-150 border-b-[3px] border-transparent hover:border-[#c66b16]" aria-current="page">Mirrors</a>
                  </li>
                </Link>
                <Link to="/shop/showpieces">
                  <li className="" data-te-nav-item-ref>
                    <a className="duration-150 border-b-[3px] border-transparent hover:border-[#c66b16]" aria-current="page">ShowPieces</a>
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default ProductsNavbar