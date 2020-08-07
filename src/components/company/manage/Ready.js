import React, { Component } from 'react'
import ReadyCard from './ReadyCard'

export default class Ready extends Component {


    render() {
        return (
            <div>
                {/* Test */}
                <ReadyCard Img="../avatars/6.jpg" Title="Daddy" time="20-08-2018" group={["default","Ddd"]}/>
            </div>
        )
    }
}
