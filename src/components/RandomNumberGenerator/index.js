// Write your code here
import {Component} from 'react'
class RandomNumberGenerator extends Component{
    state={count:0}
    onNumberChange=()=> {
        this.setState(prev =>({
            count:(Math.floor(Math.random()*100))
        }))
    }
    render(){
        const {count}=this.state
        return (
            <div>
            <h1>Random Number</h1>
            <p>Generate a random number in the range of 0 to 100</p>
            <div>
            <button onClick={this.onNumberChange}>Generate</button>
            <p>{count}</p>
            </div>
            </div>
        )
    }
}
export default RandomNumberGenerator