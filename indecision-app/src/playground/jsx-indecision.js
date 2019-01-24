console.log("App.js is running")

var app = {
    title: 'List of Things to do',
    subTitle: "Put your thoughts downs here, Let him guide you towards Destiny",
    options: []
}

function getOptions(options) {
    return (options.length > 0) ? <p>Options: {options}</p> : <p>No Value present</p>
}

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option)
        e.target.elements.option.value = '';
    }
    renderForm()
    console.log('Form Submitted')
}

const reset = () => {
    app.options = []
    renderForm()
}

const onMakeDecission = () => {
    const randomNum = Math.floor(Math.random() * app.options.length) ;
    const option = app.options[randomNum]
    alert(option)
}


const appRoot = document.getElementById('app')

const numbers = [55, 101, 1000];

const renderForm = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {(app.subTitle) && <p>{app.subTitle}</p>}
            <button disabled={app.options.length === 0} onClick={onMakeDecission}> What Should I Do ?</button>
            <button onClick={reset}>Remove All</button>
            <ol>
                {
                    app.options.map((option) => )
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Options</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
}


renderForm()
