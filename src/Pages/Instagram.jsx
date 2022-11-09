import "./Pages.scss";

const Instagram = () => {
  return (
    <div>
      <h1 className="pg-heading-primary">Heading 1</h1>
      <h2 className="pg-heading-secondary">Heading 2</h2>
      <h3 className="pg-heading-tertiary">Heading 3</h3>
      <p className="pg-paragraph">
        <span className="pg-bold">
          Lorem Ipsum is simply dummy text of the printing and typesetting
        </span>
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        <span className="pg-italic">
          since the 1500s, when an unknown printer took a galley of type and
        </span>
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      <img
        className="pg-img"
        src="https://images.unsplash.com/photo-1636622433525-127afdf3662d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
      />
      <p className="pg-paragraph">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      <div className="pg-gallery-2">
        <img
          className="pg-img"
          src="https://images.unsplash.com/photo-1638803040283-7a5ffd48dad5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
        />
        <img
          className="pg-img"
          src="https://images.unsplash.com/photo-1639628735078-ed2f038a193e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
        />
      </div>
    </div>
  );
};

export default Instagram;
