import React, { Component } from 'react'
import UpdloadFile from './uploadfile'
import ListFileTable from './listFileTable'


export default class index extends Component {
    render() {
        return (
            <div>
                <UpdloadFile/>
                <ListFileTable/>
            </div>
        )
    }
}
