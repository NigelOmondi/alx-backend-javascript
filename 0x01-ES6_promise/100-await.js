import { uploadPhoto, createUser } from './utils.js';

async function asyncUploadUser() {
  try {
    const photo = await uploadPhoto();
    const user = await createUser();

    return {
      photo,
      user,
    };
  } catch (error) {
    // Handle errors, you can log the error if needed
    console.error(error);
    return {
      photo: null,
      user: null,
    };
  }
}

export default asyncUploadUser;
