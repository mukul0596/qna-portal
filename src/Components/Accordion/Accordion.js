import React from "react";
import Spinner from "../Spinner/Spinner";
import firestoreDB from "../../firestore";
import "./Accordion.css";

class Accordion extends React.Component {
    state = {
        answer: '',
        isExpanded: false,
        isPosting: false
    }

    toggleAccordion = (e) => {
        this.setState({ isExpanded: !this.state.isExpanded });
    }

    postAnswer = (e) => {
        if (!this.state.answer) {
            alert('Please, input something in the answer field');
            return;
        }
        this.setState({ isPosting: true });
        firestoreDB.collection('questions').doc(this.props.question.id).update({
            answers: [...this.props.question.answers, this.state.answer]
        }).then(() => {
            this.setState({ answer: '', isPosting: false });
        });
    }

    render() {
        return (
            <div className={`Accordion ${this.state.isExpanded ? 'Active' : ''}`}>
                <div className='Title' onClick={(e) => this.toggleAccordion(e)}>{this.props.question.question} <span>{this.state.isExpanded ? '-' : '+'}</span></div>
                <div className='Panel' style={{maxHeight: this.state.isExpanded ? '100%' : '0'}}>
                    <div className='PanelContentWrapper'>
                        {
                            this.props.question.answers.map((answer, i) => (
                                <p key={i}>{answer}</p>
                            ))
                        }
                        {
                            this.state.isPosting
                            ? <div className='AlignCenter'>
                                <Spinner size={30} color='#BC4639' />
                            </div>
                            : <>
                                <textarea placeholder='Your answer goes here...' value={this.state.answer} onChange={(e) => this.setState({ answer: e.target.value })} />
                                <button onClick={(e) => this.postAnswer(e)}>Post Answer</button>
                            </>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Accordion;