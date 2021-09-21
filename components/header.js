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
                        <button class="dropbtn">Information</button>
                        <div class="dropdown-content">
                            <a href="../pages/eventDetails.html">Event Details</a>
                            <a href="../pages/howToRegister.html">How To Register</a>
                            <a href="../pages/schedule.html">Schedule</a>
                            <a href="../pages/judgingCriteria.html">Judging Criteria</a>
                        </div>
                    </div>
                    <div class="dropdown">
                        <button class="dropbtn">Showcase</button>
                        <div class="dropdown-content">
                            <a href="../pages/showcase2019.html">Game Jam 2019</a>
                        </div>
                    </div>
                    <div class="dropdown">
                        <button class="dropbtn">Resources</button>
                        <div class="dropdown-content">
                            <a href="../pages/whatIsBCI.html">What is a BCI?</a>
                            <a href="../pages/gamJamTips.html">Game Jam Tips</a>
                            <a href="../pages/gameDesignBasics.html">Basics of Game Design</a>
                            <a href="../pages/bciControllers.html">BCI Game Controllers</a>
                            <a href="../pages/faq.html">FAQ</a>
                        </div>
                    </div>
                </div>
                <div class="hamburger">
                    <span class="hamburger-bar"></span>
                    <span class="hamburger-bar"></span>
                    <span class="hamburger-bar"></span>
                </div>
        </div>
        `;
      }
  }

  customElements.define('header-component', Header);