const ghpages = require("gh-pages");

ghpages.publish(
  "build",
  {
    branch: "gh-pages",
    dotfiles: false,
    message: "deploy",
  },
  (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("Deployed successfully!");
    }
  }
);