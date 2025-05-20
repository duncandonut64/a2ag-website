$(document).ready(function() {
    document.getElementById('insertFooter').innerHTML = `
    <footer class="bg-secondary">
      <div class="container">
        <div class="row py-5">
          <div class="col mb-3 px-5">
            <h5>Links</h5>
            <ul class="nav flex-column">
              <li class="nav-item">
                <a class="nav-link p-0 text-body-secondary" href="./index.html">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link p-0 text-body-secondary" href="./schedule.html">Schedule</a>
              </li>
              <li class="nav-item">
                <a class="nav-link p-0 text-body-secondary" href="./tournaments.html">Tournaments</a>
              </li>
              <li class="nav-item">
                <a class="nav-link p-0 text-body-secondary" href="./registration.html">Registration</a>
              </li>
              <li class="nav-item">
                <a class="nav-link p-0 text-body-secondary" href="./camp.html">Summer Camp</a>
              </li>
              <li class="nav-item">
                <a class="nav-link p-0 text-body-secondary" href="./contribution.html">Contribute</a>
              </li>
              <li class="nav-item">
                <a class="nav-link p-0 text-body-secondary" href="./contact.html">Contact</a>
              </li>
            </ul>
            <!-- <a href="/" class="d-flex align-items-center justify-content-center mb-3 link-body-emphasis text-decoration-none">
              <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
            </a> -->
            
          </div>
          <div class="col mb-3 px-5">
            <h5>Other Links</h5>
            <ul class="nav flex-column">
              <li class="nav-item"><a href="https://agloa.org/" class="nav-link p-0 text-body-secondary">AGLOA</a></li>
              <li class="nav-item"><a href="http://mlagonline.com/" class="nav-link p-0 text-body-secondary">MLAG</a></li>
              <li class="nav-item"><a href="https://sites.google.com/view/ann-arbor-camp-academic-games/camp-ag" class="nav-link p-0 text-body-secondary">CAMP AG</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="row px-5">
        <hr>
        <p class="text-body-secondary">
          Copyright © 2024 David Chen
        </p>
      </div>
    </footer>
    `;
});