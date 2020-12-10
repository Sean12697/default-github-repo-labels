[
  {
    name: "hacktoberfest-accepted",
    description: "Accept for Hacktoberfest, will merge later",
    color: "f96f00",
  },
  {
    name: "Priority: Critical",
    description: "Critical Priority",
    color: "ff2222",
  },
  {
    name: "Priority: High",
    description: "High Priority",
    color: "FF7922",
  },
  {
    name: "Priority: Medium",
    description: "Medium Priority",
    color: "fbca04",
  },
  {
    name: "Priority: Low",
    description: "Low Priority",
    color: "c2e0c6",
  },
  {
    name: "Status: Complete",
    description: "This issue has been resolved",
    color: "7ED321",
  },
  {
    name: "Status: Confirmed",
    description: "Acknowledgement of the Issue",
    color: "0e8a16",
  },
  {
    name: "Status: Feedback Needed",
    description: "",
    color: "bfdadc",
  },
  {
    name: "Status: In Progress",
    description: "Someone is working on this Issue",
    color: "FC8264",
  },
  {
    name: "Status: On Hold",
    description: "",
    color: "BABABA",
  },
  {
    name: "Status: Review Needed",
    description: "",
    color: "EAE435",
  },
  {
    name: "Type: a11y",
    description: "There is an accessibility issue",
    color: "5d2999",
  },
  {
    name: "Type: Bug",
    description: "Something isn't working",
    color: "d93f0b",
  },
  {
    name: "Type: Deployment",
    description: "Deployment pipeline needs work",
    color: "0e8a16",
  },
  {
    name: "Type: Deprecation",
    description: "There's an issue related to deprecation",
    color: "cccccc",
  },
  {
    name: "Type: Documentation",
    description: "Improvements or additions to documentation",
    color: "006b75",
  },
  {
    name: "Type: Duplicate",
    description: "This issue or pull request already exists",
    color: "c5def5",
  },
  {
    name: "Type: Enhancement",
    description: "New feature or request on existing feature",
    color: "1d76db",
  },
  {
    name: "Type: Feature",
    description: "Additional feature to add",
    color: "6DFF6D",
  },
  {
    name: "Type: Good First Issue",
    description: "Good for newcomers",
    color: "c2e0c6",
  },
  {
    name: "Type: Help Needed",
    description: "",
    color: "5319e7",
  },
  {
    name: "Type: Help Wanted",
    description: "Extra attention is needed",
    color: "fef2c0",
  },
  {
    name: "Type: Idea",
    description: "An idea or improvement to discuss",
    color: "6DE6FF",
  },
  {
    name: "Type: Invalid",
    description: "This doesn't seem right",
    color: "e99695",
  },
  {
    name: "Type: Question",
    description: "Further information is requested",
    color: "FF6DD9",
  },
  {
    name: "Type: Security",
    description: "There is a security concern or threat",
    color: "b60205",
  },
  {
    name: "Type: Dependency",
    description: "There's an issue related to a Dependency",
    color: "c4ecfc",
  },
  {
    name: "Type: Test",
    description: "A test needs to be created or done",
    color: "fbca04",
  },
  {
    name: "Type: Wontfix",
    description: "This will not be worked on",
    color: "ffffff"
  }
].forEach(function (label) {
  addLabel(label);
});

function updateLabel(label) {
  var flag = false;
  [].slice.call(document.querySelectorAll(".labels-list-item")).forEach(function (element) {
      if (element.querySelector(".label-link").textContent.trim() === label.name) {
        flag = true;
        element.querySelector(".js-edit-label").click();
        element.querySelector(".js-new-label-name-input").value = label.name;
        element.querySelector(".js-new-label-description-input").value = label.description;
        element.querySelector(".js-new-label-color-input").value = "#" + label.color;
        element.querySelector(".js-edit-label-cancel ~ .btn-primary").click();
      }
    });
  return flag;
}

function addNewLabel(label) {
  document.querySelector(".js-new-label-name-input").value = label.name;
  document.querySelector(".js-new-label-description-input").value = label.description;
  document.querySelector(".js-new-label-color-input").value = "#" + label.color;
  document.querySelector(".js-details-target ~ .btn-primary").disabled = false;
  document.querySelector(".js-details-target ~ .btn-primary").click();
}

function addLabel(label) {
  if (!updateLabel(label)) addNewLabel(label);
}
