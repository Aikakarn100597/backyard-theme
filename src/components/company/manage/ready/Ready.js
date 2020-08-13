import React, { Component } from 'react'
import ReadyCard from './ReadyCard'

export default class Ready extends Component {

    userList = [
        {title: "Daddy" , Img: "../avatars/6.jpg" ,time :"20-08-2018" , group:["default","Ddd"]},
        {title: "Daddy" , Img: "../avatars/6.jpg" ,time :"20-08-2018" , group:["default","Ddd"]},
        {title: "Daddy" , Img: "../avatars/6.jpg" ,time :"20-08-2018" , group:["default","Ddd"]},
        {title: "Daddy" , Img: "../avatars/6.jpg" ,time :"20-08-2018" , group:["default","Ddd"]},
        {title: "Daddy" , Img: "../avatars/6.jpg" ,time :"20-08-2018" , group:["default","Ddd"]},
        {title: "Daddy" , Img: "../avatars/6.jpg" ,time :"20-08-2018" , group:["default","Ddd"]},
    ];

    render() {
        return (
            <div>
                {/* Test */}
                <ReadyCard Img="../avatars/6.jpg" Title="Daddy" time="20-08-2018" group={this.userList[0].group}/>
            </div>
        )
    }
}
