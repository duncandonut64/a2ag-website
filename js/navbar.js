$(document).ready(function() {
    document.getElementById('insertNavBar').innerHTML = `
    <nav class="navbar navbar-dark navbar-expand-lg bg-primary">
      <div class="container">
        <a class="navbar-brand" href="index.html">A<sup>2</sup>AG</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">s
            <li class="nav-item">
              <a class="nav-link" href="./index.html">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="./schedule.html">Schedule</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="./tournaments.html">Tournaments</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="./registration.html">Registration</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="./camp.html">Summer Camp</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="./contribution.html">Contribute</a>
            </li>
          </form>
        </div>
      </div>
    </nav>
    `;
});