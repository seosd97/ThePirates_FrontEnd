const filePath = `${process.env.PUBLIC_URL}/datas/demo_data.json`;

let storeData = null;

const getData = () => {
  return fetch(filePath)
    .then((res) => res.json())
    .catch((err) => {
      console.log(err);
    });
};

export default { getData };
