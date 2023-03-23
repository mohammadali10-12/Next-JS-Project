
import Link from 'next/link'

const Nav = () => {
    return (
        <nav>
            <ul className='decoration'>
                <li className='li_decoration'>
                    <Link href="/" style={{ textDecoration: 'none' }}>
                        Home
                    </Link>
                </li>
                <li className='li_decoration'>
                    <Link href="/about" style={{ textDecoration: 'none' }} >
                        About
                    </Link>
                </li>
                <li className='li_decoration'>
                    <Link href="/contact" style={{ textDecoration: 'none' }} >
                        Contact
                    </Link>
                </li>
                <li className='li_decoration'>
                    <Link href="/gallery" style={{ textDecoration: 'none' }} >
                        Gallery
                    </Link>
                </li>
                {/* <Link className='li_decoration'>
          </Link> */}
            </ul>
        </nav>
    )
}

export default Nav;