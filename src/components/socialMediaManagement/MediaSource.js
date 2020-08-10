import React, { Component } from 'react'
import SearchPage from './SearchPage'
import ListPage from './ListPage'

export default class MediaSource extends Component {
  render() {
    return (
      <>
        <SearchPage />

        <ListPage />
      </>
    )
  }
}
