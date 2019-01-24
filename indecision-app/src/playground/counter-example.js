class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleSubtractOne = this.handleSubtractOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        }
    }
    componentDidMount() {
        const stringCount = localStorage.getItem('count');
        const count = parseInt(stringCount, 10)

        if (!isNaN(count)){
            this.setState(() => ({count}))
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            localStorage.setItem('count', this.state.count)
        }
    }
    handleAddOne(){
        this.setState((prevState) => {
            return {
                count: prevState.count + 1 
            };
        });
    }
    handleSubtractOne(){
        this.setState((prevState) => {
            return {
                count: prevState.count - 1 
            };
        });
    }
    handleReset(){
        this.setState((prevState) => {
            return {
                count: 0 
            };
        });
    }
    render() {
        return(
            <div>
            <h1> Count: {this.state.count}</h1>
            <button onClick={this.handleAddOne}>+1</button>
            <button onClick={this.handleSubtractOne}>-1</button>
            <button onClick={this.handleReset}>reset</button>
            </div>
        );
    }
}

// Counter.defaultProps = {
//     count: 0
// }


ReactDOM.render(<Counter />, document.getElementById('app'));






// let count = 0;


// const addOne = () => {
//     count++;
//     console.log('addOne', count)
//     renderCounterApp();
// }

// const minusOne = () => {
//     count--;
//     console.log('minusOne', count)
//     renderCounterApp();
// }

// const reset = () => {
//     count = 0;
//     console.log('reset')
//     renderCounterApp();
// }



// const renderCounterApp = () => {
//     const template3 = (
//         <div>
//           <h1>Count: {count}</h1>
//           <button onClick={addOne}>+1</button><br></br>
//           <button onClick={minusOne}>-1</button><br></br>
//           <button onClick={reset}>reset</button>
//         </div>  
//       );
    
//       ReactDOM.render(template3, appRoot);
// }

// var userName = 'Thilaknath Ashok Kumar';
// var userAge = 27;
// var userLocation = 'Montreal';

// function getLocation(location) {
//     if (location) {
//         return <p>Location: {location}</p>;
//     }
// }


// var user = {
//     name: 'Thilaknath',
//     lname: 'Ashok Kumar',
//     age: 27
// };

// var template2 = (
//     <div>
//         <h1>{user.name ? user.name : 'Anonymous'} {user.lname}</h1>
//         {(user.age && user.age >= 18) && <p> Age: {user.age}</p>}
//         {getLocation(user.location)}
//     </div>
// );

// renderCounterApp();