const element = () => {
  const text = 'Hello World';

  return html`
    <div className="new-div">
      <h1>${text}</h1>
    </div>
  `;
};

console.log(element);
