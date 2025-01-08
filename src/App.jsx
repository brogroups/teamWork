import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []);

  return <div>Salom</div>;
}

export default App;
