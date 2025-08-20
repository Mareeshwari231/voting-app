import Counter from '../components/Counter.jsx';
import AlertButton from '../components/AlertButton.jsx';
import LiveText from '../components/LiveText.jsx';
import FeedbackCollector from '../components/FeedbackCollector.jsx';
import Clock from '../components/Clock.jsx';
import ParentChild from '../components/ParentChild.jsx';
import LoginMessage from '../components/LoginMessage.jsx';
import TaskList from '../components/TaskList.jsx';
import LiveForm from '../components/LIveForm.jsx';

export default function Home() {
  const tasks = [
    { id: 1, title: 'Learn React State' },
    { id: 2, title: 'Practice Events' },
    { id: 3, title: 'Build Voting App' },
  ];

  return (
    <div className="container">
      <h2>Home</h2>
      <Counter />
      <AlertButton />
      <LiveText />
      <FeedbackCollector />
      <Clock />
      <ParentChild />
      <LoginMessage loggedIn={false} />
      <TaskList tasks={tasks} />
      <LiveForm />
    </div>
  );
}
