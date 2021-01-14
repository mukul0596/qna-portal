import React from "react";
import Spinner from "../Spinner/Spinner";
import firestoreDB from "../../firestore";
import logo from "../../assets/logo.png";
import "./PostSection.css";

class PostSection extends React.Component {
    state = {
        question: '',
        isLoading: false
    }

    postQuestion = () => {
        if (!this.state.question) {
            alert('Please, input something in the question field');
            return;
        }
        this.setState({ isLoading: true })
        firestoreDB.collection('questions').add({
            question: this.state.question,
            answers: []
        }).then(() => {
            this.setState({ question: '', isLoading: false });
        }).catch((error) => {
            alert(error);
        });
    }
    render() {
        return (
            <div className='Post Section'>
                <img src={logo} alt='LOGO' />
                {
                    this.state.isLoading
                    ? <Spinner size={60} color='#EAE7DC' />
                    : <div className='PostQuesForm'>
                        <input type='text' placeholder='Your question goes here...' value={this.state.question} onChange={(e) => this.setState({ question: e.target.value })} />
                        <button onClick={this.postQuestion}>Post Question</button>
                    </div>
                }
            </div>
        )
    }
}

export default PostSection;