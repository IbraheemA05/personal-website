// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Mobile menu toggle functionality
document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuToggle = document.getElementById("mobileMenuToggle");
  const nav = document.getElementById("nav");

  if (mobileMenuToggle && nav) {
    mobileMenuToggle.addEventListener("click", function () {
      mobileMenuToggle.classList.toggle("active");
      nav.classList.toggle("active");
    });

    // Close mobile menu when clicking on a nav link
    nav.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", function () {
        mobileMenuToggle.classList.remove("active");
        nav.classList.remove("active");
      });
    });

    // Close mobile menu when clicking outside
    document.addEventListener("click", function (e) {
      if (!mobileMenuToggle.contains(e.target) && !nav.contains(e.target)) {
        mobileMenuToggle.classList.remove("active");
        nav.classList.remove("active");
      }
    });
  }
});

// Header scroll effect with enhanced animations
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  const scrollY = window.scrollY;

  if (scrollY > 100) {
    header.style.background =
      "linear-gradient(135deg, rgba(10, 10, 10, 0.98) 0%, rgba(26, 26, 26, 0.99) 100%)";
    header.style.boxShadow = "0 8px 40px rgba(0, 255, 136, 0.15)";
    header.style.borderColor = "rgba(0, 255, 136, 0.3)";
    header.style.transform = `translateY(${scrollY * 0.1}px)`;
  } else {
    header.style.background =
      "linear-gradient(135deg, rgba(10, 10, 10, 0.95) 0%, rgba(26, 26, 26, 0.98) 100%)";
    header.style.boxShadow = "0 4px 30px rgba(0, 0, 0, 0.3)";
    header.style.borderColor = "rgba(0, 255, 136, 0.2)";
    header.style.transform = "translateY(0)";
  }
});

// Terminal typing animation
function startTerminalAnimation() {
  const commands = [
    {
      prompt: "ibraheemA05@cybersec:~$",
      command: "ls -la projects/",
      delay: 1000,
    },
    { output: "Multi-Service-Docker-Application/", delay: 500 },
    { output: "AWS-Cloud-Security-Audit/", delay: 500 },
    { output: "Server-Performance-Stats/", delay: 500 },
    { output: "bash-automation-tools/", delay: 1000 },
    {
      prompt: "ibraheemA05@cybersec:~$",
      command: 'echo "Welcome to my portfolio!"',
      delay: 1500,
    },
    { output: "Welcome to my portfolio!", delay: 1000 },
  ];

  const terminalBody = document.querySelector(".terminal-body");
  let commandIndex = 0;

  function typeNextCommand() {
    if (commandIndex < commands.length) {
      const cmd = commands[commandIndex];

      setTimeout(() => {
        const line = document.createElement("div");
        line.classList.add("terminal-line");

        if (cmd.prompt) {
          line.innerHTML = `<span class="prompt">${cmd.prompt}</span> <span class="command">${cmd.command}</span>`;
        } else {
          line.classList.add("output");
          line.textContent = cmd.output;
        }

        // Remove cursor from previous line
        const existingCursor = terminalBody.querySelector(".cursor");
        if (existingCursor) {
          existingCursor.remove();
        }

        terminalBody.appendChild(line);

        // Add cursor to new line if it's a command
        if (cmd.prompt) {
          const cursor = document.createElement("div");
          cursor.classList.add("terminal-line");
          cursor.innerHTML =
            '<span class="prompt">ibraheemA05@cybersec:~$</span> <span class="cursor">_</span>';
          terminalBody.appendChild(cursor);
        }

        commandIndex++;
        typeNextCommand();
      }, cmd.delay);
    }
  }

  // Start the animation after initial delay
  setTimeout(() => {
    // Clear initial content
    terminalBody.innerHTML = "";
    typeNextCommand();
  }, 2000);
}

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe elements for scroll animations
document.addEventListener("DOMContentLoaded", () => {
  // Add initial styles for scroll animations
  const elementsToAnimate = document.querySelectorAll(
    ".content-card, .stat-card, .about-content"
  );
  elementsToAnimate.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });

  // Start terminal animation
  startTerminalAnimation();
});

// Mobile menu toggle (if needed)
function toggleMobileMenu() {
  const nav = document.querySelector(".nav");
  nav.classList.toggle("mobile-open");
}

// Add loading animation
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

// Particle effect for background (optional enhancement)
function createParticles() {
  const particleContainer = document.createElement("div");
  particleContainer.classList.add("particles");
  document.body.appendChild(particleContainer);

  for (let i = 0; i < 50; i++) {
    const particle = document.createElement("div");
    particle.classList.add("particle");
    particle.style.left = Math.random() * 100 + "%";
    particle.style.animationDelay = Math.random() * 2 + "s";
    particle.style.animationDuration = Math.random() * 3 + 2 + "s";
    particleContainer.appendChild(particle);
  }
}

// Stats counter animation
function animateStats() {
  const statNumbers = document.querySelectorAll(".stat-number");

  statNumbers.forEach((stat) => {
    const target = parseInt(stat.textContent);
    let current = 0;
    const increment = target / 50;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      stat.textContent = Math.floor(current);
    }, 50);
  });
}

// Trigger stats animation when section is visible
const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      animateStats();
      statsObserver.unobserve(entry.target);
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const statsSection = document.querySelector(".stats-section");
  if (statsSection) {
    statsObserver.observe(statsSection);
  }
});

// Copy to clipboard functionality for contact info
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    // Create temporary notification
    const notification = document.createElement("div");
    notification.textContent = "Copied to clipboard!";
    notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: var(--primary-color);
            color: var(--background-dark);
            padding: 10px 20px;
            border-radius: 5px;
            z-index: 9999;
            font-weight: 600;
        `;
    document.body.appendChild(notification);

    setTimeout(() => {
      notification.remove();
    }, 2000);
  });
}

// Add click handlers for email
document.addEventListener("DOMContentLoaded", () => {
  const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
  emailLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const email = link.href.replace("mailto:", "");
      copyToClipboard(email);
    });
  });
});

// Generic terminal animation function for different pages
function animateTerminal(commandElementId, outputElementId, commands, outputs) {
  const commandElement = document.getElementById(commandElementId);
  const outputElement = document.getElementById(outputElementId);

  if (!commandElement || !outputElement) return;

  let currentCommand = 0;
  let currentChar = 0;
  let isTyping = false;

  function typeCommand() {
    if (currentCommand >= commands.length) {
      // Restart animation after delay
      setTimeout(() => {
        currentCommand = 0;
        commandElement.textContent = "";
        outputElement.innerHTML = "";
        typeCommand();
      }, 3000);
      return;
    }

    if (!isTyping) {
      isTyping = true;
      currentChar = 0;
      commandElement.textContent = "";
      outputElement.innerHTML = "";
    }

    const command = commands[currentCommand];

    if (currentChar < command.length) {
      commandElement.textContent += command[currentChar];
      currentChar++;
      setTimeout(typeCommand, 50 + Math.random() * 50);
    } else {
      // Command typed, show output
      setTimeout(() => {
        outputElement.innerHTML = `<div class="output-line">${outputs[currentCommand]}</div>`;
        isTyping = false;
        currentCommand++;

        setTimeout(() => {
          typeCommand();
        }, 1500);
      }, 500);
    }
  }

  // Start animation after a short delay
  setTimeout(typeCommand, 1000);
}

// Copy code functionality for project writeups
function copyCode(elementId) {
  const codeElement = document.getElementById(elementId);
  if (codeElement) {
    const text = codeElement.textContent;
    navigator.clipboard.writeText(text).then(() => {
      // Create temporary notification
      const notification = document.createElement("div");
      notification.textContent = "Code copied to clipboard!";
      notification.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                background: var(--primary-color);
                color: var(--background-dark);
                padding: 10px 20px;
                border-radius: 5px;
                z-index: 9999;
                font-weight: 600;
            `;
      document.body.appendChild(notification);

      setTimeout(() => {
        notification.remove();
      }, 2000);
    });
  }
}
