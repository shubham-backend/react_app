import React, { Component } from 'react'
import HocCounter from './HocCounter'
export class CounterClick extends Component {
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         count: 0
    //     }
    // }
    // incrCount = () => {
    //     this.setState(prevState=>{
    //         return {count:prevState.count+1}
    //     })
    // }
    render() {
        // const { count } = this.state
        const {count, incrCount} = this.props
        return (
            <div>
                <button onClick={incrCount}>Click {count} times</button>
            </div>
        )
    }
}

export default HocCounter(CounterClick)
