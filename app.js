// Create our observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);

    // if it's intersecting AKA its visible on the screen...
    if (entry.isIntersecting) {
      entry.target.classList.add("show"); // add a class called 'show' to it
    }
    // if you want the animation to replay, need to also remove show
    else {
      entry.target.classList.remove("show");
    }
  });
});

// Grab our elements we want to apply the observer to
const hiddenElements = document.querySelectorAll(".hidden");

// for each element in hidden elements, apply the observer
hiddenElements.forEach((element) => observer.observe(element));
