class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props)
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        }
    }
    handleToggleVisibility() {
        this.setState((prevState) => {
          return {
            visibility: !prevState.visibility
          }  
        })
    }
    render() {
        return(
            <div>
            <h1> Visibility Toggle</h1>
            <button onClick={this.handleToggleVisibility}> {
                this.state.visibility ? 'Hide details' : 'Show details'
            }</button>
            {this.state.visibility && (
                <div> You need to put your brain to work</div>
            )}
            </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));





// console.log("Buildit.js is running")

// const appRoot = document.getElementById('app')
// let visibility = false;

// const show = () => {
//     console.log('Button Clicked')
//     visibility = !visibility
//     renderText()
// }

// const renderText = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={show}> {
//                 visibility ? 'Hide details' : 'Show details'
//             }</button>
//             {visibility && (
//                 <div> You need to put your brain to work</div>
//             )}
//         </div>
//     );

//     ReactDOM.render(template, appRoot);
// }

// renderText()