import React from "react";

class AddComponent extends React.Component {

    state = {
        title: '',
        salary: '',
    }

    handletitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handlesalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        if (!this.state.title || !this.state.salary) {
            alert('Missing input')
            return;
        }
        console.log(">>> Check data: ", this.state)
        this.props.addNewJob({
            id: Math.floor(Math.random() * 1001),
            title: this.state.title,
            salary: this.state.salary
        })

        this.setState({
            title: '',
            salary: ''
        })
    }

    render() {
        return (
            <form action="/action_page.php">
                <label htmlFor="fname">Job's title:</label><br />
                <input
                    type="text"
                    value={this.state.title}
                    onChange={(event) => this.handletitle(event)}
                />
                <br />
                <label htmlFor="lname">Salary:</label><br />
                <input
                    type="text"
                    value={this.state.salary}
                    onChange={(event) => this.handlesalary(event)}
                />
                <br />
                <br />
                <input type="submit" value="Submit"
                    onClick={(event) => this.handleSubmit(event)} />
            </form>

        )
    }
}

export default AddComponent;