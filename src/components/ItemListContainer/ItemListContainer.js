import { ItemCount } from "../ItemCount/ItemCount";

export const ItemListContainer = (props) => {
  const task = new Promise((resolve, reject) => {
    resolve("Iggy");
  });

  task
    .then(
      (result) => {
        console.log(result);
      },
      (err) => {}
    )
    .then((result) => {})
    .catch((err) => {})
    .finally((err) => {});

  return (
    <div>
      <span>{props.greeting}</span>
      <ItemCount stock="5" name="Pantalon" initial="1" />
    </div>
  );
};
