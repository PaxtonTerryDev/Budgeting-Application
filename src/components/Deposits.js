import React, { Component } from 'react'
import Ledger from './Ledger'
import Title from './Title'

export default class Deposits extends Component {
  render() {
    return (
      <>
      <Title name='Deposits'/>
      <Ledger />
      </>
    )
  }
}
