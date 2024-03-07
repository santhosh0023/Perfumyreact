function Navbar(){
    return(
      <nav>
        <h1>perfumy</h1>
        <ul>
          <li>Home |</li>
          <li>product |</li>
          <li>About |</li>
          <li>contact |</li>
        </ul>
      </nav>
    )
  }
  function Search(){
    return(
      <div className='searchbar'>
        <input type="text"  placeholder='search'/>
      </div>
    )
  }
  
  export default Navbar
  export {Search}