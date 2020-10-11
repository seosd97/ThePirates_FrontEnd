const filePath = `${process.env.PUBLIC_URL}/datas/demo_data.json`;

const getData = () => {
  return fetch(filePath)
    .then((res) => res.json())
    .catch((err) => {
      console.log(err);
    });
};

const getDataByName = (name) => {
  return fetch(filePath)
    .then((res) => res.json().then((json) => json.storeData.find((j) => j.label === name)))
    .catch((err) => {
      console.log(err);
    });
};

export default { getData, getDataByName };
