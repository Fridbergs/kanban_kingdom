import Story from "./Story";

const Column = ({ stories, column }) => {
  return (
    <section className="column">
      {/* En form som lägger till stories */}
      <h2 className="column-title">
        {column.title}
      </h2>
      {stories.map((story) => (
        <Story key={story.id} tasks={story.tasks} story={story} />
      ))}
    </section>
  );
};

export default Column;
