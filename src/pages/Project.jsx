import React from 'react'
import data from "../assets/data"
import Card from '../component/Card'

const Project = () => {
  return (
    <div>
      {
        data.map((card,index) => {
            return (
                <Card />
            )
        })
      }
    </div>
  )
}

export default Project
