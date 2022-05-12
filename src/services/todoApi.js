import axios from 'axios';

axios.defaults.baseURL = 'https://627cce7be5ac2c452af7102a.mockapi.io/todo/';

export const getMaterials = async () => {
  const { data } = await axios.get('/materials');
  return data;
};

export const createMaterial = async values => {
  const { data } = await axios.post('/materials/', values);
  return data;
};

export const deleteMaterial = async id => {
  const { data } = await axios.delete(`/materials/${id}`);
  return data;
};

// export const updateMaterial = async (id, isCompleted) => {
//   const { data } = await axios.put(`/materials/${id}`, isCompleted);
//   return data;
// };

export const updateMaterial = async fields => {
  const { data } = await axios.put(`/materials/${fields.id}`, fields);
  return data;
};
