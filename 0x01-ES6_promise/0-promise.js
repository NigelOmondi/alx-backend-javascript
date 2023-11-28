function getResponseFromAPI() {
  return new Promise((resolve) => {
    // Simulate an asynchronous API call
    setTimeout(() => {
      // Assuming the asynchronous operation is completed
      const responseData = {
        status: 200,
        body: 'photo-profile-1',
      };

      resolve(responseData);
    }, 1000);
  });
}

export default getResponseFromAPI;
