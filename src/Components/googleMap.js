import React from 'react'
import Iframe from 'react-iframe'

export default (props)=>{
    return(
        <div>
            <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15889.975690935948!2d-0.6298933499999999!3d5.341305449999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m3!3e6!4m0!4m0!5e0!3m2!1sen!2sgh!4v1592306081401!5m2!1sen!2sgh"
            position="relative"
            id="myId"
            width='90%'
            className="myClassname"
            height="500px"
            styles={{height: "25px"}}/>
        </div>
    )
}

