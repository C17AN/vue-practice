Vue.createApp({
  data() {
    return {
      goals: [],
      enteredValue: "",
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredValue);
    },
  },
}).mount("#app");

// const buttonEl = document.getElementById("button");
// const input = document.querySelector("input");
// const listEl = document.querySelector("ul");

// const createList = () => {
//   const content = document.createElement("li");
//   content.textContent = input.value;
//   listEl.appendChild(content);
//   input.value = " ";
// };

// buttonEl.addEventListener("click", createList);
