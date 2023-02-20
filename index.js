const { ref, computed, watch } = Vue;
const app = {
  setup() {
    const todoId = ref(1);
    const todoData = ref(null);

    watch(todoId, (newData, oldData) => {
      fetchData();
      console.log("newData:" + newData + "oldData:" + oldData);
    });

    async function fetchData() {
      todoData.value = null;
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${todoId.value}`
      );
      todoData.value = await res.json();
    }

    fetchData();

    return { todoId, todoData };
  },
};
const myVue = Vue.createApp(app).mount("#app");
