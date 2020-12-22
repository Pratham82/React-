import React, { useState } from 'react'

const SearchParams = () => {
  //  const location = 'Seattle, WA'
  const [location, setLoocation] = useState('Seattle, WA')

  return (
    <div className="search-params">
      <h2>Current Location: {location}</h2>
      <form action="">
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={e => setLoocation(e.target.value)}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default SearchParams
