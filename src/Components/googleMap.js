import React from 'react'
import Iframe from 'react-iframe'

export default (props)=>{
    return(
        <div>
            <Iframe url="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d7157.554440745723!2d-2.3166798271221154!3d7.335495830253801!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0xfdacf30c7bda111%3A0xd9bf43d5c26c5018!2sECOBANK%20SUNYANI%20BRANCH%2C%20Sunyani!3m2!1d7.3349414!2d-2.3123031!5e0!3m2!1sen!2sgh!4v1592324836255!5m2!1sen!2sgh"
            position="relative"
            id="myId"
            width='90%'
            className="myClassname"
            height="370px"
            styles={{height: "25px"}}/>
        </div>
    )
}

