import React from 'react';
import AddOptions from './AddOption';
import Header from "./Header"
import Action from "./Action"
import Options from "./Options"
import OptionModal from "./OptionModal"

export default class IndecissionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    }

    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }))
    }
    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => {
                return optionToRemove !== option;
            })
        }))
    }
    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum]
        this.setState(() => ({ selectedOption: option }))
    }
    handleAddOption = (option) => {
        if (!option) {
            return 'Enter a valid value to add to the array'
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists'
        }

        this.setState((prevState) => ({ options: prevState.options.concat([option]) }))
    }
    handleOkButton = () => {
        this.setState(() => ({ selectedOption: undefined }))
    }

    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json)

            if (options) {
                this.setState(() => ({ options }))
            }

            console.log("Fetch Data")
        } catch (e) {

        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options', json)
            console.log("Save Data")
        }
    }
    componentWillUnmount() {
        console.log("This guuy left us")
    }
    render() {
        const subtitle = 'Let your thoughts flow in invoking inner Peace'

        return (
            <div>
                <Header subtitle={subtitle} />
                <div className="container">
                    <Action hasOptions={this.state.options.length > 0}
                        handlePick={this.handlePick} />
                    <div className="widget">
                        <Options options={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOptions
                            handleAddOption={this.handleAddOption} />
                    </div>
                </div>
                <OptionModal
                    selectedOption={this.state.selectedOption}
                    handleOkButton={this.handleOkButton}
                />
            </div>
        )
    }
}

IndecissionApp.defaultProps = {
    options: []
}