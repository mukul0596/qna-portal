import PostSection from './Components/PostSection/PostSection';
import DiscussionSection from './Components/DiscussionSection/DiscussionSection';

import './App.css';

function App() {
  console.log(process.env.REACT_APP_FIRESTORE_API_KEY, process.env.REACT_APP_FIRESTORE_PROJECT_ID);
  return (
    <div className="App">
      <h1>Q&A</h1><h1>Portal</h1>
      <PostSection />
      <DiscussionSection />
    </div>
  );
}

export default App;
