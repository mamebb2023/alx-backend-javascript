export default function getFullResponseFromAPI(success) {
  const apiPromise = new Promise((resolve, reject) => {
    if (success) {
        resolve({
            status: 200,
            body: 'Success',
        });
    } else {
      reject(new Error('The Fake API is not working correctly'));
    }
  });

  return apiPromise;
}