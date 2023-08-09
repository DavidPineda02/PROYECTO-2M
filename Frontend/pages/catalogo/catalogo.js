const opciones = document.querySelectorAll(".dropdown-item");
const contenidoCambiante = document.getElementById("contenidoCambiante");

opciones.forEach((opcion) => {
  opcion.addEventListener("click", function (event) {
    event.preventDefault();
    const categoria = opcion.getAttribute("data-categoria");
    cambiarContenido(categoria);
  });
});

function cambiarContenido(categoria) {
  let nuevoContenido = "";

  // Lógica para cambiar el contenido según la categoría
  if (categoria === "hombre") {
    nuevoContenido = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Inicio</title>
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9"
            crossorigin="anonymous"
          />
          <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm"
            crossorigin="anonymous"
          ></script>
          <script src="https://kit.fontawesome.com/323dc45883.js" crossorigin="anonymous"></script>
          <link rel="stylesheet" href="../../styles/inicio.css" />
          
        </head>
        <body>
          <header>
            <nav class="navbar navbar-expand-lg z-3 position-absolute w-100 bg-opacity-50 bg-dark">
              <div class="container-fluid">
                <a class="navbar-brand text-light" href="#"
                  ><img src="../../assets/img/icononav.png" alt="" width="30" />
                  <strong>DosMarias</strong>
                </a>
                <button class="navbar-toggler text-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                
                <div
                  class="collapse navbar-collapse mx-2"
                  id="navbarSupportedContent"
                >
                  <ul class="navbar-nav mb-2 mb-lg-0">
                    <li class="nav-item mx-4">
                      <a
                        class="nav-link active fs-5 text-light fw-bold"
                        aria-current="page"
                        href="#"
                        >Inicio</a
                      >
                    </li>
                    <li class="nav-item dropdown mx-4">
                      <a class="nav-link dropdown-toggle fs-5 text-light fw-bold" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        Catalogo
                      </a>
                      <ul class="dropdown-menu dropdown-menu-lg  multi-column" aria-labelledby="navbarDropdown">
                        <div class="d-flex text-light row col-12 text-center">
                            <li class="col-md-3 col-sm-6"><a class="dropdown-item text-light" href="../catalogo/index.html"><strong>Hombre</strong></a></li>
                            <li class="col-md-3 col-sm-6"><a class="dropdown-item text-light" href="../catalogo/index.html"><strong>Mujer</strong></a></li>
                            <li class="col-md-3 col-sm-6"><a class="dropdown-item text-light" href="../catalogo/index.html"><strong>Niño</strong></a></li>
                            <li class="col-md-3 col-sm-6"><a class="dropdown-item text-light" href="../catalogo/index.html"><strong>Niña</strong></a></li>
                        </div>
                    </ul>
                    
                    
                    </li>
                    <li class="nav-item mx-4">
                      <a class="nav-link fs-5 text-light fw-bold" href="#">Nosotros</a>
                    </li>
                    <li class="nav-item mx-4">
                      <a class="nav-link fs-5 text-light fw-bold" href="#">Contacto</a>
                    </li>
                  </ul>
                  <form class="d-flex mx-4 w-100" role="search">
                    <input
                      class="form-control me-2 w-100 mx-5"
                      type="search"
                      placeholder=" Search"
                      aria-label="Search"
                    />
                    <a class="btn btn-outline-light  mx-4 w-25" href="../login/login.html" type="submit">
                      <strong>Sign In</strong>
                    </a>
                  </form>
                </div>
              </div>
            </nav>
          </header>
          <main>
            <section>
                <div class="container-fluid p-0">
                  <div class="w-100">
                      <img src="../../assets/img/hombre.jpg" alt="" class="img-fluid w-100" id="prueba">
                  </div>
                </div>
            </section>
            <section>
              <div class="custom-container w-100 p-4">
                <div class="row">
                    <div class="col-md-3 ">
                      <div class="items item1">
                          <a href="" class="w-100 text-decoration-none text-light fw-bold">
                            <h2>Tenis</h2>
                          </a>
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="items item2">
                          <a href="" class="w-100 text-decoration-none text-light fw-bold">
                            <h2>Formales</h2>
                          </a>
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="items item3">
                          <a href="" class="w-100 text-decoration-none text-light fw-bold">
                            <h2>Botines</h2>
                          </a>
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="items item4">
                          <a href="" class="w-100 text-decoration-none text-light fw-bold">
                            <h2>Sandalias</h2>
                          </a>
                      </div>
                    </div>
                </div>
              </div>
            </section>
          </main>
          <footer>
              <div class="container-fluid bg-black">
              <div class="container  bg-black p-0 mt-2 p-3 footer w-75">
                  <div class="row text-light cols-12 justify-content-center text-center">
                    <div class="col"><a href="" class="text-decoration-none text-light">Privacy Policy</div></a>
                    <div class="col"><a href="" class="text-decoration-none text-light">Terms of Use</div></a>
                    <div class="col"><a href="" class="text-decoration-none text-light">Sales and Refunds</div></a>
                    <div class="col"><a href="" class="text-decoration-none text-light">Legal</div></a>
                    
                    
                    <div class="col justify-content-around d-flex   w-75 "><a href="" class="text-decoration-none text-light"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                    </svg></a><a href="" class="text-decoration-none text-light"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                    </svg></a><a href="" class="text-decoration-none text-light"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                    </svg></a></div>
                  </div>
              </div>
          </div>
          </footer>
        </body>
      </html>
      `;
  } else if (categoria === "mujer") {
    nuevoContenido = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Inicio</title>
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9"
            crossorigin="anonymous"
          />
          <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm"
            crossorigin="anonymous"
          ></script>
          <script src="https://kit.fontawesome.com/323dc45883.js" crossorigin="anonymous"></script>
          <link rel="stylesheet" href="../../styles/inicio.css" />
          
        </head>
      <main>
         <section>
            <div class="container-fluid p-0">
               <div class="w-100">
                  <img src="../../assets/img/hombre.jpg" alt="" class="img-fluid w-100" id="prueba">
               </div>
            </div>
         </section>
         <section>
            <div class="custom-container w-100 p-4">
               <div class="row">
                  <div class="col-md-3 ">
                     <div class="items item1">
                        <a href="" class="w-100 text-decoration-none text-light fw-bold">
                           <h2>Tenis</h2>
                        </a>
                     </div>
                  </div>
                  <div class="col-md-3">
                     <div class="items item2">
                        <a href="" class="w-100 text-decoration-none text-light fw-bold">
                           <h2>Formales</h2>
                        </a>
                     </div>
                  </div>
                  <div class="col-md-3">
                     <div class="items item3">
                        <a href="" class="w-100 text-decoration-none text-light fw-bold">
                           <h2>Botines</h2>
                        </a>
                     </div>
                  </div>
                  <div class="col-md-3">
                     <div class="items item4">
                        <a href="" class="w-100 text-decoration-none text-light fw-bold">
                           <h2>Sandalias</h2>
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </main>
      <footer>
         <div class="container-fluid bg-black">
            <div class="container  bg-black p-0 mt-2 p-3 footer w-75">
               <div class="row text-light cols-12 justify-content-center text-center">
                  <div class="col"><a href="" class="text-decoration-none text-light">Privacy Policy</div></a>
                  <div class="col"><a href="" class="text-decoration-none text-light">Terms of Use</div></a>
                  <div class="col"><a href="" class="text-decoration-none text-light">Sales and Refunds</div></a>
                  <div class="col"><a href="" class="text-decoration-none text-light">Legal</div></a>
                  <div class="col justify-content-around d-flex   w-75 "><a href=""
                        class="text-decoration-none text-light"><svg xmlns="http://www.w3.org/2000/svg" width="16"
                           height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                           <path
                              d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                        </svg></a><a href="" class="text-decoration-none text-light"><svg
                           xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                           class="bi bi-facebook" viewBox="0 0 16 16">
                           <path
                              d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                        </svg></a><a href="" class="text-decoration-none text-light"><svg
                           xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                           class="bi bi-twitter" viewBox="0 0 16 16">
                           <path
                              d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                        </svg></a>
                  </div>
               </div>
            </div>
         </div>
      </footer>
      <body>
      </html>`;
  } else if (categoria === "niño") {
    nuevoContenido = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Inicio</title>
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9"
            crossorigin="anonymous"
          />
          <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm"
            crossorigin="anonymous"
          ></script>
          <script src="https://kit.fontawesome.com/323dc45883.js" crossorigin="anonymous"></script>
          <link rel="stylesheet" href="../../styles/inicio.css" />
          
        </head>
        <body>
      <main>
         <section>
            <div class="container-fluid p-0">
               <div class="w-100">
                  <img src="../../assets/img/hombre.jpg" alt="" class="img-fluid w-100" id="prueba">
               </div>
            </div>
         </section>
         <section>
            <div class="custom-container w-100 p-4">
               <div class="row">
                  <div class="col-md-3 ">
                     <div class="items item1">
                        <a href="" class="w-100 text-decoration-none text-light fw-bold">
                           <h2>Tenis</h2>
                        </a>
                     </div>
                  </div>
                  <div class="col-md-3">
                     <div class="items item2">
                        <a href="" class="w-100 text-decoration-none text-light fw-bold">
                           <h2>Formales</h2>
                        </a>
                     </div>
                  </div>
                  <div class="col-md-3">
                     <div class="items item3">
                        <a href="" class="w-100 text-decoration-none text-light fw-bold">
                           <h2>Botines</h2>
                        </a>
                     </div>
                  </div>
                  <div class="col-md-3">
                     <div class="items item4">
                        <a href="" class="w-100 text-decoration-none text-light fw-bold">
                           <h2>Sandalias</h2>
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </main>
      <footer>
         <div class="container-fluid bg-black">
            <div class="container  bg-black p-0 mt-2 p-3 footer w-75">
               <div class="row text-light cols-12 justify-content-center text-center">
                  <div class="col"><a href="" class="text-decoration-none text-light">Privacy Policy</div></a>
                  <div class="col"><a href="" class="text-decoration-none text-light">Terms of Use</div></a>
                  <div class="col"><a href="" class="text-decoration-none text-light">Sales and Refunds</div></a>
                  <div class="col"><a href="" class="text-decoration-none text-light">Legal</div></a>
                  <div class="col justify-content-around d-flex   w-75 "><a href=""
                        class="text-decoration-none text-light"><svg xmlns="http://www.w3.org/2000/svg" width="16"
                           height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                           <path
                              d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                        </svg></a><a href="" class="text-decoration-none text-light"><svg
                           xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                           class="bi bi-facebook" viewBox="0 0 16 16">
                           <path
                              d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                        </svg></a><a href="" class="text-decoration-none text-light"><svg
                           xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                           class="bi bi-twitter" viewBox="0 0 16 16">
                           <path
                              d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                        </svg></a>
                  </div>
               </div>
            </div>
         </div>
      </footer>
      <body>
      </html>`;
  } else if (categoria === "nina") {
    nuevoContenido = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Inicio</title>
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9"
            crossorigin="anonymous"
          />
          <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm"
            crossorigin="anonymous"
          ></script>
          <script src="https://kit.fontawesome.com/323dc45883.js" crossorigin="anonymous"></script>
          <link rel="stylesheet" href="../../styles/inicio.css" />
          
        </head>
        <body>
      <main>
         <section>
            <div class="container-fluid p-0">
               <div class="w-100">
                  <img src="../../assets/img/hombre.jpg" alt="" class="img-fluid w-100" id="prueba">
               </div>
            </div>
         </section>
         <section>
            <div class="custom-container w-100 p-4">
               <div class="row">
                  <div class="col-md-3 ">
                     <div class="items item1">
                        <a href="" class="w-100 text-decoration-none text-light fw-bold">
                           <h2>Tenis</h2>
                        </a>
                     </div>
                  </div>
                  <div class="col-md-3">
                     <div class="items item2">
                        <a href="" class="w-100 text-decoration-none text-light fw-bold">
                           <h2>Formales</h2>
                        </a>
                     </div>
                  </div>
                  <div class="col-md-3">
                     <div class="items item3">
                        <a href="" class="w-100 text-decoration-none text-light fw-bold">
                           <h2>Botines</h2>
                        </a>
                     </div>
                  </div>
                  <div class="col-md-3">
                     <div class="items item4">
                        <a href="" class="w-100 text-decoration-none text-light fw-bold">
                           <h2>Sandalias</h2>
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </main>
      <footer>
         <div class="container-fluid bg-black">
            <div class="container  bg-black p-0 mt-2 p-3 footer w-75">
               <div class="row text-light cols-12 justify-content-center text-center">
                  <div class="col"><a href="" class="text-decoration-none text-light">Privacy Policy</div></a>
                  <div class="col"><a href="" class="text-decoration-none text-light">Terms of Use</div></a>
                  <div class="col"><a href="" class="text-decoration-none text-light">Sales and Refunds</div></a>
                  <div class="col"><a href="" class="text-decoration-none text-light">Legal</div></a>
                  <div class="col justify-content-around d-flex   w-75 "><a href=""
                        class="text-decoration-none text-light"><svg xmlns="http://www.w3.org/2000/svg" width="16"
                           height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                           <path
                              d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                        </svg></a><a href="" class="text-decoration-none text-light"><svg
                           xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                           class="bi bi-facebook" viewBox="0 0 16 16">
                           <path
                              d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                        </svg></a><a href="" class="text-decoration-none text-light"><svg
                           xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                           class="bi bi-twitter" viewBox="0 0 16 16">
                           <path
                              d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                        </svg></a>
                  </div>
               </div>
            </div>
         </div>
      </footer>
      <body>
      </html>`;
  }

  contenidoCambiante.innerHTML = nuevoContenido;
}
