import React, {Fragment} from 'react'
import spinner from './spinner.gif'

const Spinner = () => {
    return (
      <Fragment>
            <img
      src={spinner}
      style={{ width: '70px', margin: 'auto', display: 'block', marginTop: '130px' }}
      alt="Loading..."
    />
      </Fragment>
    )
}

export default Spinner
