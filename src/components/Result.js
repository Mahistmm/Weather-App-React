import React from 'react'
import './Result.css'
import { Button } from '@mui/material'

const result = ({ temp , description , icon , setTemp}) => {
  return (
    <div className='result'>
        <div className='resultbox'>
            <h1> Temp: {temp} °C</h1>
            <p>{description}</p>
            <br/>
            <img src={icon} alt='icon' />
            <br/>
            <Button
            variant="contained"
            color="success"
            type="submit"
            onClick={()=>setTemp("")}
          >
            Back
          </Button>
        </div>
    </div>
  )
}

export default result