function MyButton() {
    return (
      <button>
          I'm button, click me!
      </button>
    );
}

export default function MyApp() {
    return (
        <div>
            <h1>Welcome to my app</h1>
            <MyButton />
        </div>
    );
}