import { useState } from "react";

// 1-vazifa
export function Header() {
  return <h2>Header qismi</h2>;
}

export function Content() {
  return <p>Content qismi</p>;
}

export function Footer() {
  return <h3>Footer qismi</h3>;
}

// 2-vazifa
export function Product(props) {
  return (
    <div>
      <h3>{props.name}</h3>
      <p>{props.price} so'm</p>
    </div>
  );
}

// 3-vazifa
export function Student(props) {
  return (
    <div>
      <h3>{props.name}</h3>
      <p>Yosh: {props.age}</p>
      <p>Sinf: {props.grade}</p>
    </div>
  );
}

// 5-vazifa
export function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}

// 6-vazifa
export function ToggleText() {
  const [text, setText] = useState("Salom");
  return (
    <div>
      <h3>{text}</h3>
      <button onClick={() => setText(text === "Salom" ? "Xush kelibsiz!" : "Salom")}>
        O'zgartir
      </button>
    </div>
  );
}

// 7-vazifa
export function LikeButton() {
  const [like, setLike] = useState(0);
  return (
    <div>
      <h3>Like: {like}</h3>
      <button onClick={() => setLike(like + 1)}>Like 👍</button>
    </div>
  );
}

// 8-vazifa
export function NameInput() {
  const [name, setName] = useState("");
  return (
    <div>
      <input onChange={(e) => setName(e.target.value)} />
      <p>Salom, {name}</p>
    </div>
  );
}

// 9-vazifa
export function DarkMode() {
  const [mode, setMode] = useState("light");

  const style = {
    background: mode === "light" ? "white" : "black",
    color: mode === "light" ? "black" : "white",
    padding: "15px",
    marginTop: "10px",
  };

  return (
    <div style={style}>
      <h2>{mode.toUpperCase()} MODE</h2>
      <button onClick={() => setMode(mode === "light" ? "dark" : "light")}>
        O'zgartir
      </button>
    </div>
  );
}

// 10-vazifa
export function Card(props) {
  return (
    <div>
      <h3>{props.title}</h3>
      <img src={props.imgUrl} alt="rasm" width="150" />
    </div>
  );
}
