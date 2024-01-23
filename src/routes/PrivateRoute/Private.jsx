import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'

export default function Private({children}) {

        const usertoken = localStorage.getItem("mernapptoken")
        console.log(usertoken)
        if(usertoken){
        return children
    }else{
        return <Navigate to="/"/>
    }
}
