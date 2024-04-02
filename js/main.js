$(document).ready(() => {
  //slider
  $("#slider").bxSlider({
    mode: "fade",
    pager: false,
    responsive: true,
  });

  // posts

  let posts = [
    {
      title: "Prueba titulo 1",
      date: `Publicado el dia ${moment()
        .locale("es")
        .format("LL")} a las ${moment().locale("es").format("LT")}`,
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
              assumenda iure nostrum officiis odio nulla id deleniti, atque
              sequi nemo modi dolor sint soluta doloremque error consequatur
              neque labore ducimus! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo non fuga deleniti quasi atque aliquam quo mollitia. Repellat quibusdam, adipisci voluptatibus quia, consequuntur dolores corrupti aperiam est hic possimus Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla temporibus debitis adipisci sed exercitationem. Enim et earum consequatur, ab aliquid itaque facere. Recusandae iste veniam repudiandae laborum! Architecto, velit optio...`,
    },
    {
      title: "Prueba titulo 2",
      date: `Publicado el dia ${moment()
        .locale("es")
        .format("LL")} a las ${moment().locale("es").format("LT")}`,
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
              assumenda iure nostrum officiis odio nulla id deleniti, atque
              sequi nemo modi dolor sint soluta doloremque error consequatur
              neque labore ducimus! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo non fuga deleniti quasi atque aliquam quo mollitia. Repellat quibusdam, adipisci voluptatibus quia, consequuntur dolores corrupti aperiam est hic possimus Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla temporibus debitis adipisci sed exercitationem. Enim et earum consequatur, ab aliquid itaque facere. Recusandae iste veniam repudiandae laborum! Architecto, velit optio...`,
    },
    {
      title: "Prueba titulo 3",
      date: `Publicado el dia ${moment()
        .locale("es")
        .format("LL")} a las ${moment().locale("es").format("LT")}`,
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
              assumenda iure nostrum officiis odio nulla id deleniti, atque
              sequi nemo modi dolor sint soluta doloremque error consequatur
              neque labore ducimus! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo non fuga deleniti quasi atque aliquam quo mollitia. Repellat quibusdam, adipisci voluptatibus quia, consequuntur dolores corrupti aperiam est hic possimus Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla temporibus debitis adipisci sed exercitationem. Enim et earum consequatur, ab aliquid itaque facere. Recusandae iste veniam repudiandae laborum! Architecto, velit optio...`,
    },
  ];

  posts.forEach((items) => {
    let post = ` <article class="post">
    <h2>${items.title}</h2>
    <span class="date">${items.date}</span>
    <p>
    ${items.content}
    </p>
    <a href="#" class="button-more">Leer mas</a>
    </article>
    
    `;
    $("#post").append(post);
  });

  // selector de temas

  let theme = $("#theme");

  $("#to-green").click(() => {
    theme.attr("href", "./css/green.css");
  });

  $("#to-red").click(() => {
    theme.attr("href", "./css/red.css");
  });

  $("#to-blue").click(() => {
    theme.attr("href", "./css/blue.css").css("transition", "300ms all");
  });

  // scroll arriba de la web

  $(".subir").click((e) => {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      500
    );
    return false;
  });

  //Manejo de sesion localStorage
  let login = $("#login");
  let about_p = $("#about p");
  let about = $("#about");

  $("#login form ").submit(() => {
    let userName = $("#name").val();
    localStorage.setItem("user", userName);
  });

  let user_login = localStorage.getItem("user");

  if (user_login != null || user_login != undefined) {
    about_p.html(`<strong>Bienvenido ${user_login}</strong>`);
    login.hide();
    $("#selector-theme").show();
    about.append(`<br><button href="#" id="close">Cerrar Sesión</button>`);
  } else {
    $("#selector-theme").hide();
    about_p.html(`<p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum
              obcaecati magnam doloremque culpa. Provident aliquam expedita eius
              reprehenderit iste libero suscipit dolorum culpa. Numquam maiores
              laborum sed eum adipisci facere?
            </p>`);
  }

  $("#close").click(() => {
    localStorage.clear();
    about_p.html(`<p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum
              obcaecati magnam doloremque culpa. Provident aliquam expedita eius
              reprehenderit iste libero suscipit dolorum culpa. Numquam maiores
              laborum sed eum adipisci facere?
            </p>`);
    $("#close").hide();
    login.show();
    $("#selector-theme").hide();
  });
});
