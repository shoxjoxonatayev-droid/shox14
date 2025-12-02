import {
  Header,
  Content,
  Footer,
  Product,
  Student,
  Counter,
  ToggleText,
  LikeButton,
  NameInput,
  DarkMode, 
    


  
  Card
} from "./shox";

export default function App() {
  const numbers = [1,2,3,4,5,6,7,8,9,10];

  return (
    <div style={{ padding: "20px" }}>

      <h1>1 - Oddiy Componentlar</h1>
      <Header />
      <Content />
      <Footer />
      <hr />

      <h1>2 - Mahsulotlar</h1>
      <Product name="Non" price={3000} />
      <Product name="Sut" price={6000} />
      <Product name="Olma" price={5000} />
      <hr />

      <h1>malumot</h1>
      <Student name="Ali" age={14} grade="8A" />
      <Student name="Madina" age={15} grade="9B" />
      <hr />

      <h1>1 dan 10 gacha</h1>
      {numbers.map((n) => (
        <p key={n}>{n}</p>
      ))}
      <hr />

      <h1>5 - Counter</h1>
      <Counter />
      <hr />

      <h1>6 - almashtirish</h1>
      <ToggleText />
      <hr />

      <h1>7 - Like</h1>
      <LikeButton />
      <hr />

      <h1>8 - Input</h1>
      <NameInput />
      <hr />

      <h1>9 - Dark Mode</h1>
      <DarkMode />
      <hr />

      <h1>10 - Rasm Card</h1>
      <Card 
        title="Random rasm" 
        imgUrl="https://artery.uz/wa-data/public/shop/products/03/11/1103/images/5495/5495.970.jpg"
      />

    </div>
  );
}
