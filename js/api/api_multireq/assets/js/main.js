const htmlSectUsr = document.getElementsByClassName("usuarios");
const endpoint = "https://jsonplaceholder.typicode.com/users";

async function JSONPlaceholder() {
  try {
    let data = [];
    let jsonData = [];

   data = await fetch(endpoint);
   jsonData = await data.json();

   console.log(jsonData);
   return jsonData;
  }
  catch (error)
  {
    return console.log(error);
  }
}


async function render() {
  const usrs = await JSONPlaceholder();
  let plantilla = "";

    usrs.forEach((usr) => {
      plantilla += `
      <div class="usuarios">
      <h3>${usr.id}</h3><br>
      <h3>${usr.name}</h3><br>
      <h3>${usr.username}</h3>
      </div>
      `;
    });
    htmlSectUsr.innerHTML = plantilla;
  }
  
  render();