import axios from 'axios';

export async function getAnimal(dog: string = '', cat: string = '') {
  const dogData = await axios.get(`http://localhost:4000/${dog}`);
  const catData = await axios.get(`http://localhost:4000/${cat}`);
  return { dogData, catData };
}
