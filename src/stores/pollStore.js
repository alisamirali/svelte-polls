import { writable } from "svelte/store";

const pollStore = writable([
  {
    id: 1,
    question: "JavaScript or TypeScript?",
    answerA: "JavaScript",
    answerB: "TypeScript",
    votesA: 30,
    votesB: 25,
  },
  {
    id: 2,
    question: "React or Angular?",
    answerA: "React",
    answerB: "Angular",
    votesA: 20,
    votesB: 15,
  },
]);

export default pollStore;
