import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const resolve = await signUpUser(firstName, lastName);
  const reject = await uploadPhoto(fileName);

  return [resolve, reject];
}
