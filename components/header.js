class Header extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
        this.innerHTML = `
            <div id="navigation">
                <a href="../index.html" id="logo"></a>
                <div id="dropdown-menus">
                    <div class="dropdown">
                        <button class="dropbtn" onclick="getElementById('infoMenu').classList.toggle('active');">Information</button>
                        <div class="dropdown-content" id="infoMenu" >
                            <a href="../pages/eventDetails.html">Event Details</a>
                            <a href="../pages/howToRegister.html">Register</a>
                            <a href="../pages/schedule.html">Schedule</a>
                            <a href="../pages/judgingCriteria.html">Judging Criteria</a>
                        </div>
                    </div>
                    <div class="dropdown">
                        <button class="dropbtn" onclick="getElementById('showcaseMenu').classList.toggle('active');">Showcase</button>
                        <div class="dropdown-content" id="showcaseMenu" >
                            <a href="../pages/showcase2019.html">Game Jam 2019</a>
                            <a href="../pages/showcase2021.html">Game Jam 2021</a>
                        </div>
                    </div>
                    <div class="dropdown">
                        <button class="dropbtn" onclick="getElementById('resourceMenu').classList.toggle('active');">Resources</button>
                        <div class="dropdown-content" id="resourceMenu">
                            <a href="../pages/whatIsBCI.html">What is a BCI?</a>
                            <a href="../pages/gamJamTips.html">Game Jam Tips</a>
                            <a href="../pages/gameDesignBasics.html">Basics of Game Design</a>
                            <a href="../pages/bciControllers.html">BCI Game Controllers</a>
                            <a href="../pages/faq.html">FAQ</a>
                        </div>
                    </div>
                </div>
                <div class="hamburger" onclick="getElementById('dropdown-menus').classList.toggle('active'); getElementById('logo').classList.toggle('active');">
                    <span class="hamburger-bar"></span>
                    <span class="hamburger-bar"></span>
                    <span class="hamburger-bar"></span>
                </div>
        </div>
        `;
      }
  }

  customElements.define('header-component', Header);