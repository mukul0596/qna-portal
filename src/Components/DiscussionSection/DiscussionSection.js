import React from "react";
import Accordion from "../Accordion/Accordion";
import firestoreDB from "../../firestore";
import "./DiscussionSection.css";

class DiscussionSection extends React.Component {
    state = {
        questions: []
    }

    componentDidMount() {
        firestoreDB.collection('questions').onSnapshot((querySnapshot) => {
            const questions = [];
            querySnapshot.forEach((doc) => {
                questions.push({...doc.data(), id: doc.id});
            });
            this.setState({ questions });
        });
    }

    render() {
        return (
            <div className='Discussion Section'>
                <div className='AccordionWrapper'>
                    {
                        this.state.questions.map(question => (
                            <Accordion key={question.question} question={question} />
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default DiscussionSection;