import React from 'react';
import ChildComponent from './ChildComponent';
import AddComponent from './AddComponent';

class Mycomponent extends React.Component {

    state = {

        arrJobs: [
            { id: 'Job1', title: 'Developer', salary: '500' },
            { id: 'Job2', title: 'Testers', salary: '400' },
            { id: 'Job3', title: 'Project Manager', salary: '1000' }
        ]
    }


    addNewJob = (job) => {
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
        })
        // console.log('check job from parent: ', job)
    }

    deleteAJob = (job) => {
        let currentJobs = this.state.arrJobs;
        currentJobs = currentJobs.filter(item => item.id !== job.id)
        this.setState({
            arrJobs: currentJobs
        })
    }


    render() {
        console.log('>>>call render:', this.state)
        return (

            <>
                <AddComponent
                    addNewJob={this.addNewJob}
                />

                <ChildComponent
                    arrJobs={this.state.arrJobs}
                    deleteAJob={this.deleteAJob}
                />

            </>

        )
    }
}

export default Mycomponent;