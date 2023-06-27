const mockApi = () => {
  return new Promise(resolve => {
    setTimeout(
      () =>
        resolve({
          firstName: "Owen",
          lastName: "Evans",
          age: 18,
          gender: "male"
        }),
      3000
    );
  });
};

export default mockApi;
