import React from 'react'

const UpdatedComponent = OriginalComponent => {

    class HocCounter extends React.Component {
        constructor(props){
            super(props);
            this.state = {
                count: 0
            }
        }
        incrCount = () => {
            this.setState(prevState=>{
                return {count:prevState.count+1}
            })
        }
        render() {
            return (
                <OriginalComponent count={this.state.count} incrCount ={this.incrCount} ></OriginalComponent>
            )
        }
    }
    return HocCounter
}

export default UpdatedComponent
