import Task from "./Task";

const Story = ({ tasks, story }) => {
  return (
    <article className="story">
      {/* en form som lägger till tasks */}
      <h2>{story.title}</h2>
      <div className="taskDiv">
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
      </div>
    </article>
  );
};

export default Story;
